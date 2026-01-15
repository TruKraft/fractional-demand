# Quick Start: Google Tag Manager

## ✅ What's Already Done

Google Tag Manager has been successfully integrated into your Next.js application with:

- ✅ GTM script component created
- ✅ Integrated into app layout (head and body)
- ✅ Performance optimizations (DNS prefetch/preconnect)
- ✅ Environment variable configuration
- ✅ No-JavaScript fallback included

## 🚀 Quick Setup (2 Minutes)

### Step 1: Get Your GTM ID
1. Visit [Google Tag Manager](https://tagmanager.google.com/)
2. Copy your container ID (e.g., `GTM-5SWBLGRR`)

**Note:** Based on old files, you may have used `GTM-5SWBLGRR` previously.

### Step 2: Add Environment Variable
Create a file named `.env.local` in your project root:

```env
NEXT_PUBLIC_GTM_ID=GTM-5SWBLGRR
```

Replace `GTM-5SWBLGRR` with your actual GTM container ID.

### Step 3: Restart Dev Server
```bash
npm run dev
```

### Step 4: Test
1. Open http://localhost:3000
2. Open DevTools (F12) → Network tab
3. Look for `gtm.js` request to `googletagmanager.com`

## 🌐 Production Deployment

### Vercel
1. Go to your project settings
2. Navigate to: **Settings → Environment Variables**
3. Add:
   - **Name**: `NEXT_PUBLIC_GTM_ID`
   - **Value**: `GTM-XXXXXXX`
   - **Environment**: Production

### Other Platforms
Add the environment variable `NEXT_PUBLIC_GTM_ID` with your GTM container ID.

## 📚 Full Documentation

See `GTM_SETUP_GUIDE.md` for complete details on:
- Configuring tags in GTM
- Testing with GTM Preview mode
- Troubleshooting
- Security considerations

## 🔧 Files Modified

1. `components/GoogleTagManager.tsx` - New component
2. `app/layout.tsx` - GTM integration
3. `app/next-head.tsx` - Performance optimization

## ⚠️ Important

- `.env.local` is already in `.gitignore` - don't commit it!
- Always add environment variables to your hosting platform for production
- Test tags in GTM Preview mode before publishing
