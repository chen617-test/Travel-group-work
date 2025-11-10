"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, Clock } from "lucide-react"

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("cities")

  const searchTabs = [
    { id: "cities", label: "Cities" },
    { id: "experiences", label: "Experiences" },
    { id: "food", label: "Food" },
    { id: "landscapes", label: "Landscapes" }
  ]

  const popularChips = [
    { id: 1, label: "#city nights", icon: "🌃" },
    { id: 2, label: "#forest hiking", icon: "🌲" },
    { id: 3, label: "#lake views", icon: "🏞️" },
    { id: 4, label: "#ancient towns", icon: "🏛️" },
    { id: 5, label: "#metro access", icon: "🚇" },
    { id: 6, label: "#family friendly", icon: "👨‍👩‍👧‍👦" }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery, "in category:", activeTab)
    // Here you would typically handle the search logic
  }

  return (
    <div className="relative bg-gradient-to-r from-green-50 to-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover the Beauty of China
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From city skylines to forest lakes—discover your next trip by landscape.
          </p>
          
          {/* Search Tabs */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {searchTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <img src="/icon.png" alt="location" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="where do u want to go what do you want today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-base border-0 focus-visible:ring-0"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </form>
          </div>
          
          {/* Popular Chips */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularChips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setSearchQuery(chip.label.replace("#", ""))}
                  className="flex items-center space-x-1 px-3 py-1 bg-white rounded-full text-sm text-gray-700 hover:bg-green-50 transition-colors"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Best Season: Mar-May</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Duration: Half day / Full day</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-600">★★★★★</span>
              <span>Photo Index</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}