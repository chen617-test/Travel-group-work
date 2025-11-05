"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star, Camera, Mountain, Building, TreePine } from "lucide-react"

export default function SpecialExperiences() {
  // Experience categories
  const experienceCategories = [
    {
      id: "urban",
      title: "Urban Highlights",
      icon: Building,
      description: "City skylines, architecture, and urban culture"
    },
    {
      id: "nature",
      title: "Nature & Forests",
      icon: TreePine,
      description: "Lakes, forests, mountains, and natural landscapes"
    },
    {
      id: "culture",
      title: "Culture & Heritage",
      icon: Mountain,
      description: "Historical sites, traditions, and cultural experiences"
    }
  ]

  const experiences = [
    // Urban Experiences
    {
      id: 1,
      category: "urban",
      name: "Xi'an Ancient City Exploration - Shaanxi",
      subtitle: "Ride the ancient city walls and overlook the 13-dynasty capital",
      description: "Cycling 5km on the ancient city walls, overlooking the urban fabric of the ancient capital of thirteen dynasties.",
      image: "https://sspark.genspark.ai/cfimages?u1=78MecJEFV4ANcDJY%2FXpsyaitBYNnZLR6CxauW3v9UwSN6WVFjoH4WXqKNsyZ%2B2xKFL9vGfewzmhgTdqMv6VccdSQ16B%2FkbBaGzvX9WUJJKPhIWlxj8vioCaZKO0Hy2RCCRJq5omIbcTbQtHjClgdJA%3D%3D&u2=GgZN1n8dX23Sv6sy&width=1024",
      landscapeType: "Urban",
      bestSeason: "Oct-Nov",
      duration: "Half day",
      intensity: "Medium",
      photoIndex: 4,
      tags: ["Photography", "Historical", "Metro Access"],
      highlights: ["City wall cycling", "Muslim Quarter food street", "Bell & Drum Towers"]
    },
    {
      id: 2,
      category: "urban",
      name: "Hong Kong Night Harbor - Hong Kong",
      subtitle: "Victoria Harbour night view with Star Ferry",
      description: "Experience the dazzling night view of Victoria Harbour from the Star Ferry, where modern skyscrapers meet traditional Chinese junk boats.",
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/hong-kong-victoria-harbor-at-night-sam.jpg",
      landscapeType: "Urban",
      bestSeason: "Year-round",
      duration: "Half day",
      intensity: "Low",
      photoIndex: 5,
      tags: ["Night Photography", "Family Friendly", "Metro Access"],
      highlights: ["Symphony of Lights", "Star Ferry crossing", "Tsim Sha Tsui Promenade"]
    },
    {
      id: 3,
      category: "urban",
      name: "Shanghai Bund Architecture Line - Shanghai",
      subtitle: "Colonial architecture meets modern Pudong skyline",
      description: "Walk along the historic Bund where colonial-era buildings stand in contrast to the futuristic Pudong skyline across the Huangpu River.",
      image: "https://www.researchgate.net/publication/344942090/figure/fig6/AS:1021737256886275@1620612553661/Night-view-of-the-Shanghai-Bund-scenic-line-Source-Zhong-Tang_Q320.jpg",
      landscapeType: "Urban",
      bestSeason: "Mar-May, Sep-Nov",
      duration: "Half day",
      intensity: "Low",
      photoIndex: 5,
      tags: ["Architecture", "Photography", "Metro Access"],
      highlights: ["Historic buildings", "Huangpu River cruise", "Pudong skyline view"]
    },
    
    // Nature Experiences
    {
      id: 4,
      category: "nature",
      name: "West Lake Spring Colors - Hangzhou",
      subtitle: "From Huagang Fish Viewing to Su Causeway Spring Dawn",
      description: "One scene at every step from Huagang Fish Viewing to Su Causeway Spring Dawn.",
      image: "https://z-cdn-media.chatglm.cn/files/7bf23d36-b75f-45cf-968f-56b80ff85e11_west%20lake.jpg?auth_key=1762245866-629c396822204658b4cdc27d89eb0da5-0-5cfb9553cd2b4f440830d4b004390f23",
      landscapeType: "Lake",
      bestSeason: "Mar-Apr",
      duration: "Half day",
      intensity: "Low",
      photoIndex: 5,
      tags: ["Family Friendly", "Photography", "Spring Blossom"],
      highlights: ["Su Causeway", "Lotus Pond", "Leifeng Pagoda sunset"]
    },
    {
      id: 5,
      category: "nature",
      name: "Jiuzhaigou Colorful Forests - Sichuan",
      subtitle: "Crystal lakes and colorful forests in alpine paradise",
      description: "Discover the breathtaking beauty of Jiuzhaigou's turquoise lakes, waterfalls, and vibrant forests that change colors with the seasons.",
      image: "https://z-cdn-media.chatglm.cn/files/77dde329-8907-4dd5-bd04-8cb76251a1d6_%E4%B9%9D%E5%AF%A8%E6%B2%9F.jpeg?auth_key=1762245866-ead97ecc98974e04885a78b6695eaac7-0-73a7d1b2e4440f8d4f3d54269eaf6928",
      landscapeType: "Forest",
      bestSeason: "Sep-Oct",
      duration: "Full day",
      intensity: "Medium",
      photoIndex: 5,
      tags: ["Photography", "Hiking", "Nature"],
      highlights: ["Five Flower Lake", "Pearl Shoal Waterfall", "Primeval Forest"]
    },
    {
      id: 6,
      category: "nature",
      name: "Zhangjiajie National Forest Park - Hunan",
      subtitle: "Avatar mountains and towering sandstone pillars",
      description: "Explore the otherworldly landscape of Zhangjiajie, with its massive sandstone pillars that inspired the movie Avatar.",
      image: "https://z-cdn-media.chatglm.cn/files/6886df3e-7c50-45cc-a3da-1638dee002a2_zhangjiajie.jpg?auth_key=1762245866-c94730e198424fe0ba157df6b6915efe-0-3a791e352fab019754eb48035f135d72",
      landscapeType: "Mountain",
      bestSeason: "Apr-May, Sep-Oct",
      duration: "Full day",
      intensity: "High",
      photoIndex: 5,
      tags: ["Hiking", "Photography", "Adventure"],
      highlights: ["Hallelujah Mountain", "Glass Bridge", "Bailong Elevator"]
    },
    
    // Cultural Experiences
    {
      id: 7,
      category: "culture",
      name: "Terracotta Warriors & Ancient City Wall - Xi'an",
      subtitle: "Ancient history and imperial legacy",
      description: "Witness the thousands of life-sized terracotta warriors and explore the ancient city walls that protected the imperial capital.",
      image: "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f43z32ccbbte56fcklhz.jpg",
      landscapeType: "Historical",
      bestSeason: "Mar-May, Sep-Nov",
      duration: "Full day",
      intensity: "Medium",
      photoIndex: 5,
      tags: ["Historical", "Photography", "Cultural"],
      highlights: ["Terracotta Army", "Ancient City Wall", "Shaanxi History Museum"]
    },
    {
      id: 8,
      category: "culture",
      name: "Chengdu Museum Night Tour - Sichuan",
      subtitle: "Cultural treasures after dark",
      description: "Experience Chengdu's rich cultural heritage through an evening tour of its world-class museums and cultural sites.",
      image: "https://z-cdn-media.chatglm.cn/files/81858c1c-5110-4d00-872f-f7ca88290810_Chengdu%20Museum%20Night%20Tour.jpg?auth_key=1762245866-80194ff351b84fc9b5c3d9df279c1548-0-be762482cccdcd3cbe22fd076beba7df",
      landscapeType: "Cultural",
      bestSeason: "Year-round",
      duration: "Half day",
      intensity: "Low",
      photoIndex: 4,
      tags: ["Cultural", "Night Tour", "Family Friendly"],
      highlights: ["Jinsha Site Museum", "Sichuan Opera", "Traditional Tea House"]
    },
    {
      id: 9,
      category: "culture",
      name: "Shadow Puppet Experience - Shaanxi",
      subtitle: "Intangible cultural heritage workshop",
      description: "Learn about and participate in the ancient art of Chinese shadow puppetry, a UNESCO Intangible Cultural Heritage.",
      image: "https://z-cdn-media.chatglm.cn/files/37103585-92c4-40d9-8eab-a58e82c3647b_Shadow%20Puppet%20Experience.jpg?auth_key=1762245866-7a4e339a9d5d4290ad9dc8f524d1ec7a-0-e4a37c0e056366b1b725b4edc5518a8a",
      landscapeType: "Cultural",
      bestSeason: "Year-round",
      duration: "Half day",
      intensity: "Low",
      photoIndex: 4,
      tags: ["Cultural", "Hands-on", "Traditional"],
      highlights: ["Shadow puppet making", "Performance workshop", "Cultural stories"]
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating}/5)</span>
      </div>
    )
  }

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low": return "bg-green-100 text-green-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      case "High": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated unique travel experiences to deeply feel China's cultural charm
          </p>
        </div>

        {/* Experience Categories */}
        {experienceCategories.map((category) => {
          const categoryExperiences = experiences.filter(exp => exp.category === category.id)
          const IconComponent = category.icon

          return (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-8">
                <IconComponent className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryExperiences.map((experience) => (
                  <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                        {experience.landscapeType}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {experience.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 italic">
                        {experience.subtitle}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {experience.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Best: {experience.bestSeason}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">💪</span>
                          <span>Intensity: {experience.intensity}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Camera className="h-4 w-4 mr-2" />
                          {renderStars(experience.photoIndex)}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className={getIntensityColor(experience.intensity)}>
                            {experience.intensity} Intensity
                          </Badge>
                          {experience.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {experience.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        View Route & Photo Spots
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-green-600 border-green-600 hover:bg-green-50">
            View More Experiences
          </Button>
        </div>
      </div>
    </section>
  )
}