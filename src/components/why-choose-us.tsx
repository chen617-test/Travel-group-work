"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, UserCheck, Shield, Star, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Inspiration-Driven Discovery",
      description: "Through high-quality content such as city stories, curated themes, and travel trends, users naturally gain travel inspiration while reading, seamlessly transitioning from interest to booking decisions."
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Personalized & Smart Matching",
      description: "Based on user interest profiles and behavioral data, the platform's algorithm precisely recommends travel destinations and themes aligned with individual preferences."
    },
    {
      id: 3,
      icon: Shield,
      title: "Trusted & Secure Ecosystem",
      description: "All merchants undergo real-name verification and qualification screening; the platform also features real-time location tracking, emergency contact systems, and escrow payments to ensure travel safety and transaction transparency."
    },
    {
      id: 4,
      icon: Star,
      title: "Curated Quality Options",
      description: "Focusing on curated, localized travel content, travelers can experience journeys with genuine cultural depth and personal expression beyond standardized products."
    },
    {
      id: 5,
      icon: Zap,
      title: "Seamless Experience Loop",
      description: "One-stop, full-service solutions with seamless end-to-end coverage make trip planning effortless."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best travel experience through innovation, personalization, and trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={feature.id} 
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have discovered the beauty of China through our curated experiences and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Explore Destinations
              </button>
              <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}