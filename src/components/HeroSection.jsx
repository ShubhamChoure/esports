"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Info } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-0" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">eSports Tournament</h1>
          <p className="text-xl md:text-2xl text-white mb-8">PGMCOE IT DEPARTMENT</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Dates</h3>
              <p className="text-green-300">6th and 7th February 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Trophy className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Prize Pool</h3>
              <p className="text-green-300">₹3000+</p>
              <div className="flex items-center justify-center mt-2 text-sm text-green-300">
                <Info className="w-4 h-4 mr-1" />
                <span>May increase based on registrations</span>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-6 rounded-full shadow-lg shadow-green-500/20"
          >
            <a href="https://forms.gle/HLBghN7Qrwf3k8GV6" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

