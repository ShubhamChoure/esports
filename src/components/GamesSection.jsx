"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users } from "lucide-react"

export default function GamesSection() {
  const games = [
    {
      title: "Free Fire",
      image: "/freefire.jpg",
      entryFee: "₹200",
      firstPrize: "₹2000",
      secondPrize: "₹1000",
    },
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
          Featured Games
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

