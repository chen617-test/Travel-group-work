import { Suspense } from "react"
import RoadmapContent from "./_content"

export const dynamic = 'force-dynamic'

export default function RoadmapPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading...</div>}>
      <RoadmapContent />
    </Suspense>
  )
}


