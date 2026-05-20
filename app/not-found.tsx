export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-surface">
      <h1 className="text-4xl font-bold text-brand-dark mb-2">404</h1>
      <p className="text-brand-text-dim mb-4">Page not found</p>
      <a
        href="/"
        className="px-6 py-2 bg-brand-orange text-white rounded-lg hover:opacity-90"
      >
        Go back home
      </a>
    </div>
  );
}
