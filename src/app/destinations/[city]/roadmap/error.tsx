"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6">{error.message || 'Client-side exception occurred.'}</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-green-600 text-white rounded">Try again</button>
    </div>
  )
}


