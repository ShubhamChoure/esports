"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar({ onContactClick, onRulesClick, onLocationClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 z-50 border-b border-red-900/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white font-bold text-center">
          <div className="text-2xl tracking-wider">TECHNOBASH</div>
          <div className="text-sm tracking-widest">2025</div>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-green-400" />
        </Button>
        <div className={`w-full md:w-auto md:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              onClick={onRulesClick}
              className="text-white hover:text-green-300 hover:bg-green-900/20"
            >
              Rules
            </Button>
            <Button
              variant="ghost"
              onClick={onContactClick}
              className="text-white hover:text-green-300 hover:bg-green-900/20"
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              onClick={onLocationClick}
              className="text-white hover:text-green-300 hover:bg-green-900/20"
            >
              Location
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://forms.gle/HLBghN7Qrwf3k8GV6" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

