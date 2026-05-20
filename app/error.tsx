'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-surface">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-brand-orange text-white rounded-lg hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
