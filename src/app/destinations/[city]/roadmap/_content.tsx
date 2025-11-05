"use client"

import Link from "next/link"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cities } from "@/data/destinations"
import { guides, tours } from "@/data/roadmap"
import { MapPin, ChevronRight, Camera, Calendar, Navigation } from "lucide-react"

const toId = (name: string) => name.toLowerCase().replace(/\s+/g, '')

export default function RoadmapContent() {
  const params = useParams<{ city: string }>()
  const search = useSearchParams()
  const router = useRouter()

  const cityFromPath = (params?.city || '').toLowerCase()
  const initialCity = useMemo(() => {
    const match = cities.find(c => c.id === cityFromPath) || cities.find(c => toId(c.name) === cityFromPath)
    return match?.id || 'wuhan'
  }, [cityFromPath])

  const [cityId, setCityId] = useState(initialCity)
  const [tab, setTab] = useState<'tours'|'guides'>( (search.get('tab') as any) || 'tours')
  const [duration, setDuration] = useState<'half-day'|'1d'|'2-3d'|'4d+'|''>('')
  const [season, setSeason] = useState<'spring'|'summer'|'autumn'|'winter'|''>('')

  useEffect(() => {
    const qs = new URLSearchParams(search.toString())
    qs.set('tab', tab)
    router.replace(`/destinations/${cityId}/roadmap?${qs.toString()}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId, tab])

  const cityName = cities.find(c => c.id === cityId)?.name || 'City'
  const cityTours = useMemo(() => {
    return tours.filter(t => {
      if (t.city !== cityId) return false
      if (duration && t.duration !== duration) return false
      if (season && !t.bestSeason.includes(season)) return false
      return true
    })
  }, [cityId, duration, season])
  const cityGuides = guides.filter(g => g.city === cityId)

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        <Link href="/">Home</Link>
        <ChevronRight className="inline-block w-4 h-4 mx-2" />
        <Link href="/destinations">Destinations</Link>
        <ChevronRight className="inline-block w-4 h-4 mx-2" />
        <Link href={`/destinations?city=${cityName}`}>{cityName}</Link>
        <ChevronRight className="inline-block w-4 h-4 mx-2" />
        <span>Road Map</span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Trip Roadmap｜City · Nature · Heritage</h1>
              <p className="text-gray-700 mt-2">Use real reviews and curated suggestions to quickly match your trip preferences.</p>
            </div>
            <div className="w-full md:w-96 h-48 rounded-lg overflow-hidden shadow">
              <img src="/images/experiences/zhangjiajie.jpg" alt={`${cityName} city view`} className="w-full h-full object-cover" />
              <div className="text-[10px] text-white/90 bg-black/40 px-2 py-1">Photo credit: demo image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters (simplified demo) */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Combine filters and see results instantly</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <Select value={cityId} onValueChange={setCityId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(c => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <Select value={duration || 'any'} onValueChange={(v)=> setDuration((v === 'any' ? '' : (v as any)))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="half-day">Half-day</SelectItem>
                    <SelectItem value="1d">1 day</SelectItem>
                    <SelectItem value="2-3d">2–3 days</SelectItem>
                    <SelectItem value="4d+">4+ days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Season</label>
                <Select value={season || 'any'} onValueChange={(v)=> setSeason((v === 'any' ? '' : (v as any)))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="spring">Spring</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="autumn">Autumn</SelectItem>
                    <SelectItem value="winter">Winter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs & Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={tab} onValueChange={(v)=> setTab(v as any)}>
            <TabsList>
              <TabsTrigger value="tours">Tours</TabsTrigger>
              <TabsTrigger value="guides">Local Guides</TabsTrigger>
            </TabsList>
            <TabsContent value="tours" className="mt-6 space-y-6">
              {cityTours.map(t => (
                <Card key={t.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 h-48 md:h-full">
                      <img src={t.coverImage.url} alt={t.coverImage.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>{t.title}</CardTitle>
                        <CardDescription>
                          <span className="inline-flex items-center mr-4"><Calendar className="w-4 h-4 mr-1"/>Best: {t.bestSeason.join(', ')}</span>
                          <span className="inline-flex items-center mr-4"><Navigation className="w-4 h-4 mr-1"/>Duration: {t.duration}</span>
                          <span className="inline-flex items-center"><Camera className="w-4 h-4 mr-1"/>Photo {t.photoScore}/5</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {t.landscape.map((l, i)=> (<Badge key={i} variant="secondary" className="text-xs">{l}</Badge>))}
                        </div>
                        <div className="text-sm text-gray-700">Stops: {t.stops.map(s=>s.name).join(' → ')}</div>
                        <div className="text-sm text-gray-700">⭐ {t.reviews.rating} · {t.reviews.count} reviews · {t.reviews.tags.join(' | ')}</div>
                        {t.reviews.snippets?.length ? (
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            {t.reviews.snippets.slice(0, 2).map((s, i) => (
                              <li key={i} className="italic">“{s}”</li>
                            ))}
                          </ul>
                        ) : null}
                        <div className="flex gap-2">
                          <Button className="bg-green-600 hover:bg-green-700">View Route & Schedule</Button>
                          <Button variant="outline">Open in Map</Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="guides" className="mt-6 space-y-6">
              {cityGuides.map(g => (
                <Card key={g.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{g.name}</span>
                      <span className="text-sm text-gray-600">⭐ {g.reviews.rating} · {g.reviews.count} reviews</span>
                    </CardTitle>
                    <CardDescription>
                      Expertise: {g.expertise.join(', ')} · Features: {g.features.join(', ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">Representative routes: {g.routes.join(', ')}</div>
                    <div className="flex gap-2">
                      <Button>View Sample Plan</Button>
                      <Button className="bg-green-600 hover:bg-green-700">Contact</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}


