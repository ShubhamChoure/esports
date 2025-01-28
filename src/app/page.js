"use client"

import { useRef, useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import GamesSection from "@/components/GamesSection"
import Rules from "@/components/Rules"
import Contact from "@/components/Contact"
import Location from "@/components/Location"
import AnimatedBackground from "@/components/AnimatedBackground"
import SplashScreen from "@/components/SplashScreen"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const rulesRef = useRef(null)
  const contactRef = useRef(null)
  const locationRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSplash && <SplashScreen />}
      <main className={`min-h-screen text-white relative ${showSplash ? "hidden" : ""}`}>
        <AnimatedBackground />
        <Navbar
          onRulesClick={() => scrollTo(rulesRef)}
          onContactClick={() => scrollTo(contactRef)}
          onLocationClick={() => scrollTo(locationRef)}
        />
        <HeroSection />
        <GamesSection />
        <div ref={rulesRef}>
          <Rules />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div ref={locationRef}>
          <Location />
        </div>
      </main>
    </>
  )
}

