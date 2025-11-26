import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32 text-center flex items-center justify-center">
        <div>
          <h1 className="text-5xl md:text-6xl tracking-tight">Page not found</h1>
          <p className="mt-3 text-white/70 text-lg md:text-xl">The page you’re looking for doesn’t exist or was moved.</p>
          <div className="mt-8">
            <a href="/" className="btn btn-primary btn-md btn-shine">Go home</a>
          </div>
        </div>
      </main>
      <Footer minimal />
    </div>
  );
}


