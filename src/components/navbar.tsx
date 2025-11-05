"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin, Search, Globe } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("EN")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang)
    setIsLanguageOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">ChinaTravel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/destinations" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Destinations
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/destinations/east" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">East China</Link>
                  <Link href="/destinations/south" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">South China</Link>
                  <Link href="/destinations/north" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">North China</Link>
                  <Link href="/destinations/southwest" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Southwest</Link>
                </div>
              </div>
            </div>
            <Link href="/experiences" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Experiences
            </Link>
            <Link href="/food" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Food
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Guides
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>{currentLang}</span>
              </Button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <button 
                      onClick={() => changeLanguage("EN")} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => changeLanguage("CN")} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                    >
                      CN
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              href="/experiences"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Experiences
            </Link>
            <Link
              href="/food"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Food
            </Link>
            <Link
              href="/guides"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Guides
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Button variant="outline" size="sm" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Globe className="mr-2 h-4 w-4" />
                {currentLang}
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Login
              </Button>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}