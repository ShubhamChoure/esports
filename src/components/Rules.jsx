import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Rules() {
  return (
    <section className="py-20" id="rules">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent text-white">
          Tournament Rules
        </h2>
        <Card className="bg-black/50 backdrop-blur-sm border border-red-900/30 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">General Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Students from any college can participate in the tournament.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                All participants must be present at the venue to play.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                After completing the payment and Google form, participants must contact the volunteers for confirmation.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>A squad can have a minimum of 2 players.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Use of any cheats or hacks will result in immediate disqualification.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                The tournament will be conducted in a knockout format.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                The decision of the organizers will be final in case of any disputes.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

