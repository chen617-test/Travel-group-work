"use client"

import Link from "next/link"
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube, Camera, Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/icon.png" alt="Guidy" className="h-8 w-8" />
              <span className="text-xl font-bold">Guidy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Explore the beautiful scenery, rich culture, and culinary traditions of China. We are committed to providing you with the highest quality China travel experiences, making every journey an unforgettable memory.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-green-400 transition-colors">
                  Popular Destinations
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-gray-300 hover:text-green-400 transition-colors">
                  Food Journeys
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-300 hover:text-green-400 transition-colors">
                  Special Experiences
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-green-400 transition-colors">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img src="/icon.png" alt="location" className="h-4 w-4" />
                <span className="text-gray-300">88 Jianguo Road, Chaoyang District, Beijing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">400-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@guidy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Credits & Legal */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <Camera className="h-4 w-4 mr-2" />
                Image Credits & Licensing
              </h4>
              <p className="text-xs text-gray-400 mb-2">
                All images are used under license or with permission. We only use real photographs from professional photographers, official tourism boards, and properly licensed stock photography.
              </p>
              <p className="text-xs text-gray-400">
                Sources: Unsplash, Flickr (CC BY), official tourism media libraries, and partnered professional photographers. Each image is credited to its respective creator and used in accordance with licensing terms.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Legal & Compliance</h4>
              <div className="flex flex-wrap gap-4 text-xs">
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookie" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
                  Sitemap
                </Link>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                <span className="flex items-center">
                  <Copyright className="h-3 w-3 mr-1" />
                  2024 Guidy. All rights reserved.
                </span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                ICP备案号: 京ICP备12345678号-1
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}