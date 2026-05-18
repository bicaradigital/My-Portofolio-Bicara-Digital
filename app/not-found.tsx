export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-bg">
      <h1 className="text-4xl font-bold text-brand-dark mb-2">404</h1>
      <p className="text-brand-muted mb-4">Page not found</p>
      <a
        href="/"
        className="px-6 py-2 bg-brand-accent text-white rounded-lg hover:opacity-90"
      >
        Go back home
      </a>
    </div>
  );
}
