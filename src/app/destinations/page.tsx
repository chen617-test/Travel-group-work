import { Suspense } from "react"
import DestinationsContent from "./_content"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading...</div>}>
      <DestinationsContent />
    </Suspense>
  )
}


