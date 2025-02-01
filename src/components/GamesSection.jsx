"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Info, AlertCircle } from "lucide-react"

export default function GamesSection() {
  const games = [
    {
      title: "BGMI",
      image: "/bgmi.jpg",
      entryFee: "₹200",
      firstPrize: "₹2000",
      secondPrize: "₹1000",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Game
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{game.title}</h3>
                  <div className="space-y-2">
                    <p className="text-green-300 flex items-center">
                      <Users className="w-5 h-5 text-green-400 mr-2" />
                      Squad Entry Fee: {game.entryFee}
                    </p>
                    <p className="text-green-300 flex items-center">
                      <Trophy className="w-5 h-5 text-green-400 mr-2" />
                      1st Prize: {game.firstPrize} | 2nd Prize: {game.secondPrize}
                    </p>
                    <p className="text-yellow-300 flex items-center mt-4">
                      <Info className="w-5 h-5 text-yellow-400 mr-2" />
                      Note: Prize money may increase based on participation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-red-300 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
            <span>Important: The Free Fire tournament has been canceled. We apologize for any inconvenience.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

