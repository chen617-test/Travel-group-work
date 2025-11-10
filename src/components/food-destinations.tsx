"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Utensils } from "lucide-react"

export default function FoodDestinations() {
  const router = useRouter()

  const destinations = [
    {
      id: 1,
      name: "Wuhan",
      region: "central",
      flavor: "savory",
      budget: "budget",
      dietary: ["halal"],
      title: "Home of Hot Dry Noodles",
      description: "Wuhan hot dry noodles are one of Hubei's most famous snacks. The noodles are chewy, the sesame sauce is fragrant, and served with radish strips and green onions. Besides hot dry noodles, Wuhan also features doupi, soup dumplings, and duck neck.",
      highlights: ["Metro Line 2 direct to Jianghan Road Pedestrian Street", "High density of halal restaurants"],
      image: "https://sw.wuhan.gov.cn/xwdt/mtbd/202407/W020240731320451641168.jpg",
      rating: 4.8,
      specialties: ["Hot Dry Noodles", "Doupi", "Soup Dumplings", "Duck Neck"]
    },
    {
      id: 2,
      name: "Hong Kong",
      region: "hongkong",
      flavor: "savory",
      budget: "mid",
      dietary: ["halal", "vegetarian"],
      title: "Food Paradise",
      description: "Hong Kong's aroma and cooking atmosphere blend perfectly. From street snacks to Michelin restaurants, from tea restaurants to seafood restaurants, Hong Kong's food culture is diverse and rich. Dim sum, roast meat, seafood, desserts—every bite is the ultimate enjoyment for taste buds.",
      highlights: ["Tea culture", "Michelin street food", "Victoria Harbour night view with Star Ferry"],
      image: "https://centralionrock.com/wp-content/uploads/2023/08/hong-kong-food-guide.jpg",
      rating: 4.9,
      specialties: ["Dim Sum", "Roast Meat", "Seafood", "Milk Tea"]
    },
    {
      id: 3,
      name: "Beijing",
      region: "north",
      flavor: "savory",
      budget: "mid",
      dietary: ["halal", "vegetarian"],
      title: "Capital Flavors",
      description: "Beijing, as China's capital, has a long dietary culture history. Peking duck is world-renowned, while traditional snacks like old Beijing fried sauce noodles, fermented mung bean juice, braised offal, and fried liver carry memories of old Beijing.",
      highlights: ["Old Beijing time-honored brands", "Hutong snacks and Guijie night food", "Central axis culture connecting food and sightseeing"],
      image: "https://p5.itc.cn/images01/20220811/572cd70ee02143a4b85192ec83a47a19.png",
      rating: 4.7,
      specialties: ["Peking Duck", "Fried Sauce Noodles", "Fermented Mung Bean Juice", "Braised Offal"]
    },
    {
      id: 4,
      name: "Chengdu",
      region: "central",
      flavor: "spicy",
      budget: "budget",
      dietary: ["vegetarian"],
      title: "Spicy Food Capital",
      description: "Chengdu is famous for its spicy cuisine. From hot pot to mapo tofu, the city offers a variety of spicy dishes that will tantalize your taste buds. The food culture here is deeply rooted in Sichuan's culinary traditions.",
      highlights: ["Kuanzhai Alley food street", "Hot pot culture", "Tea house traditions"],
      image: "https://p1.itc.cn/images01/20201009/fffd9e541b2341aebbc1f4c1812a7536.jpeg",
      rating: 4.8,
      specialties: ["Hot Pot", "Mapo Tofu", "Dan Dan Noodles", "Sichuan Snacks"]
    },
    {
      id: 5,
      name: "Guangzhou",
      region: "south",
      flavor: "sweet",
      budget: "mid",
      dietary: ["halal", "vegetarian"],
      title: "Cantonese Cuisine Hub",
      description: "Guangzhou is the birthplace of Cantonese cuisine, known for its delicate flavors and fresh ingredients. Morning tea culture is an essential part of local life, offering a wide variety of dim sum and traditional tea.",
      highlights: ["Morning tea culture", "Seafood markets", "Traditional Cantonese restaurants"],
      image: "https://img.delicious.com.au/YYRJna3O/del/2019/04/dim-sum-106073-1.jpg",
      rating: 4.6,
      specialties: ["Dim Sum", "Morning Tea", "Cantonese Roast", "Seafood"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Food Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore China's culinary capitals and taste authentic flavors from different regions
          </p>
        </div>

        {/* Destinations Slider */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {destinations.map((destination) => (
              <div key={destination.id} className="flex-none w-80">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <img src="/icon.png" alt="location" className="inline-block w-4 h-4 mr-1" />
                      {destination.name}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {destination.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(destination.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {destination.rating}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {destination.description}
                    </CardDescription>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {destination.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Utensils className="w-4 h-4 mr-2" />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700" 
                      onClick={() => {
                        const slug = destination.name.toLowerCase().replace(/\s+/g, '')
                        router.push(`/destinations/${slug}/roadmap`)
                      }}
                    >
                      View Food Map
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-green-600 border-green-600 hover:bg-green-50">
            Discover 20 Food Tours
          </Button>
        </div>
      </div>
    </section>
  )
}