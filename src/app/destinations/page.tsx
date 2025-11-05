"use client"

import { useMemo, useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cities, recommendations } from "@/data/destinations"
import { Star, Users, MapPin, Filter } from "lucide-react"

type Goal = 'food' | 'culture' | 'nature' | 'city'

export const dynamic = 'force-dynamic'

function DestinationsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialCity = useMemo(() => {
    const q = searchParams.get('city')
    if (!q) return ""
    const match = cities.find(c => c.name.toLowerCase() === q.toLowerCase() || c.id.toLowerCase() === q.toLowerCase())
    return match ? match.id : ""
  }, [searchParams])

  const [cityId, setCityId] = useState(initialCity)
  const [people, setPeople] = useState<number>(2)
  const [budgetMax, setBudgetMax] = useState<number>(500)
  const [goal, setGoal] = useState<Goal | "">("")

  useEffect(() => {
    // keep URL in sync for shareability
    const params = new URLSearchParams()
    if (cityId) params.set('city', cities.find(c => c.id === cityId)?.name || cityId)
    router.replace(`/destinations?${params.toString()}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId])

  const filtered = useMemo(() => {
    return recommendations.filter(rec => {
      if (cityId && rec.cityId !== cityId) return false
      if (goal && !rec.targetGoals.includes(goal)) return false
      if (people < rec.minPeople || people > rec.maxPeople) return false
      if (rec.priceCny > budgetMax) return false
      return true
    })
  }, [cityId, goal, people, budgetMax])

  return (
    <main className="min-h-screen">
      <section className="py-10 bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Destinations</h1>
            <div className="flex items-center text-gray-600"><Filter className="w-4 h-4 mr-2"/>Filter your trip</div>
          </div>
          <p className="text-gray-700 mt-2">Find tours and local guides tailored for you. The list updates instantly as you change filters.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <Card className="lg:col-span-1 h-fit sticky top-20">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <Select value={cityId} onValueChange={setCityId}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">People</label>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <Input type="number" min={1} max={20} value={people} onChange={(e) => setPeople(parseInt(e.target.value || '1', 10))} className="w-24" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Max Budget (CNY)</label>
                <Slider value={[budgetMax]} onValueChange={(v)=> setBudgetMax(v[0] ?? 500)} min={50} max={1000} step={10} />
                <div className="text-sm text-gray-600 mt-1">Up to ¥{budgetMax}</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Goal</label>
                <Select value={goal || ''} onValueChange={(v)=> setGoal((v as Goal) || '')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <Button variant="outline" onClick={()=>{ setCityId(initialCity); setPeople(2); setBudgetMax(500); setGoal('') }}>Reset</Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {filtered.length === 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>No results</CardTitle>
                  <CardDescription>Try relaxing your filters.</CardDescription>
                </CardHeader>
              </Card>
            ) : (
              filtered.map(rec => (
                <Card key={rec.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 h-48 md:h-full">
                      <img src={rec.image} alt={rec.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:col-span-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{rec.title}</CardTitle>
                          <div className="text-sm text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-green-600" />{cities.find(c=>c.id===rec.cityId)?.name}
                          </div>
                        </div>
                        {rec.subtitle && (
                          <CardDescription>{rec.subtitle}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.round(rec.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                          <span className="text-sm text-gray-600">{rec.rating.toFixed(1)} • {rec.reviewsCount} reviews</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {rec.features.map((f, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">{f}</Badge>
                          ))}
                        </div>

                        <p className="text-gray-700 text-sm">“{rec.reviewSnippet}”</p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="text-lg font-semibold">¥{rec.priceCny}</div>
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading...</div>}>
      <DestinationsContent />
    </Suspense>
  )
}


