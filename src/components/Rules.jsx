import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Rules() {
  const [openSection, setOpenSection] = useState(null)

  const rulesSections = [
    {
      title: "General Rules",
      rules: [
        "The tournament follows Battle Royale (Squad Mode).",
        "Individual Participation: Play at your own risk, organizers are not responsible for any issues.",
        "Each team consists of 4 players.",
        "The latest version of BGMI must be used.",
        "Use of emulators, triggers, or third-party software is strictly prohibited.",
        "Participants must register before the deadline; late entries won't be accepted.",
        "The disqualified teams registration fees will not be refunded.",
        "If any technical issue is occurred the match will be restarted only on admin approval.",
        "Team should be present at given location, on time.",
        "If any opposition team take objection on a team/player the admin will spect that team/player by their own.",
      ],
    },
    {
      title: "Match Format",
      rules: [
        "The event will have semi-finals, and finals (depending on the number of teams).",
        "Maps may include Erangel, Miramar (decided by organizers).",
        "Scoring is based on a point system (Placement Points + Kill Points).",
        "The team with the highest total points in the final round wins.",
      ],
    },
    {
      title: "Scoring System",
      rules: [
        "Winner (1st Place) – 15 Points",
        "2nd Place – 12 Points",
        "3rd Place – 10 Points",
        "4th Place – 8 Points",
        "5th-8th Place – 6 Points",
        "Kill Points – 1 point per kill",
        "(After Completing the Match everyone must have to take a Screenshot.)",
      ],
    },
    {
      title: "Fair Play & Disqualification",
      rules: [
        "Teaming (alliances between teams) is prohibited.",
        "Use of cheats, hacks, or scripts will lead to an immediate ban.",
        "Players must not exploit glitches (e.g., map glitches, character bugs).",
        "Toxic behavior, verbal abuse, or harassment will lead to disqualification.",
      ],
    },
    {
      title: "Match Procedures",
      rules: [
        "Players must be on time; late players will be disqualified.",
        "The tournament will be conducted in custom rooms with passwords shared before matches.",
        "Any network issues during the match are the player's responsibility.",
        "If a match is interrupted due to server issues, it may be restarted.",
      ],
    },
    {
      title: "Device & Network Rules",
      rules: [
        "Only mobile devices (Android/iOS) are allowed.",
        "Use of tablets, emulators, or controllers is prohibited.",
        "Players must ensure they have a stable internet connection.",
      ],
    },
    {
      title: "Prize & Awards",
      rules: [
        "Winners will receive Cash prizes, trophies, or certificates (as per event details).",
        "MVP (Most Valuable Player) may be awarded separately.",
      ],
    },
  ]

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  return (
    <section className="py-20" id="rules">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-white">
          Tournament Rules
        </h2>
        <Card className="bg-black/50 backdrop-blur-sm border border-green-900/30 max-w-4xl mx-auto">
          <CardContent className="p-6">
            {rulesSections.map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full text-left text-xl text-green-400 hover:text-green-300 focus:outline-none"
                >
                  {section.title}
                  {openSection === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {openSection === index && (
                  <ul className="mt-2 space-y-2 text-gray-300 list-disc pl-5">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex}>{rule}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

