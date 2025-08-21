import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Protected</title>
    <style>
      :root { --card-bg: rgba(255,255,255,0.05); --hairline: rgba(255,255,255,0.1); --primary: #072ef0; }
      * { box-sizing: border-box }
      body { background:#000; color:#fff; font-family: Inter, system-ui, Arial, sans-serif; margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px }
      .wrap { width:100%; max-width:420px; display:flex; flex-direction:column; align-items:center; gap:16px }
      .logo { position:relative; width:260px; height:56px }
      .card { width:100%; background:var(--card-bg); border:1px solid var(--hairline); border-radius:20px; padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.35); position:relative; isolation:isolate }
      .card::before, .card::after { content:""; position:absolute; inset:0; border-radius:20px; padding:1px; -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none; z-index:0 }
      .card::before { background: var(--hairline) }
      @property --a { syntax:'<angle>'; inherits:false; initial-value:0deg }
      @keyframes ring { to { --a: 360deg } }
      .card::after { background: conic-gradient(from var(--a), transparent 0deg, transparent 356deg, rgba(255,255,255,.6) 358deg, #fff 360deg); filter: drop-shadow(0 0 6px rgba(255,255,255,.25)); animation: ring 20s linear infinite }
      h1 { margin:0 0 6px 0; font-size:20px; font-weight:800 }
      p  { margin:0 0 16px 0; color:rgba(255,255,255,.7); font-size:14px }
      .field { width:100%; display:flex; flex-direction:column; gap:8px }
      input[type=password] { width:100%; padding:12px 14px; border-radius:12px; border:1px solid var(--hairline); background:rgba(255,255,255,0.06); color:#fff; font-size:14px }
      /* Button styles matching site */
      .btn { margin-top:12px; position:relative; display:inline-flex; align-items:center; justify-content:center; width:100%; padding:12px 14px; border-radius:12px; font-weight:700; box-shadow:0 1px 2px rgba(0,0,0,0.2); overflow:hidden; transition: background .2s ease, transform .2s ease; border:0; cursor:pointer }
      .btn-primary { color:#fff; background-color:#072ef0 }
      .btn-primary:hover { background-color:#1b3df2 }
      .btn-shine::after { content:""; position:absolute; inset:-1px; pointer-events:none; background:linear-gradient(120deg, transparent 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 65%, transparent 100%); transform:translateX(-140%); transition: transform .6s ease }
      .btn-shine:hover::after { transform:translateX(140%) }
      .hint { margin-top:8px; font-size:12px; color:rgba(255,255,255,.55) }
      img { display:block; width:100%; height:100%; object-fit:contain }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="logo"><img alt="Fractional Demand" src="/assets/images/logo-wordmark-white.png"/></div>
      <form method="POST" class="card">
        <h1>Enter password</h1>
        <p>Private preview. Please enter the access password to continue.</p>
        <div class="field">
          <label for="password" style="font-size:12px;color:rgba(255,255,255,.75)">Password</label>
          <input id="password" type="password" name="password" placeholder="Your password" autofocus/>
        </div>
        <button type="submit" class="btn btn-primary btn-shine">Continue</button>
      </form>
    </div>
  </body>
</html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}

export async function POST(req: Request) {
  const sitePassword = process.env.SITE_PASSWORD || '';
  const form = await req.formData();
  const password = String(form.get('password') || '');
  const next = new URL(req.url).searchParams.get('next') || '/';
  if (password === sitePassword) {
    // Use 303 See Other to convert POST to GET on redirect target
    const res = NextResponse.redirect(new URL(next, req.url), { status: 303 });
    res.cookies.set('site_protected', '1', { path: '/', httpOnly: true, sameSite: 'lax', secure: true, maxAge: 60 * 60 * 24 * 7 });
    return res;
  }
  return new NextResponse('Unauthorized', { status: 401 });
}


