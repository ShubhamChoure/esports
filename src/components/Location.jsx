import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Location() {
  return (
    <section className="py-20" id="location">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent text-white">
          Tournament Location
        </h2>
        <Card className="bg-black/50 backdrop-blur-sm border border-red-900/30 max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">Venue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <Link
                    href="https://www.google.com/maps/place/Parvatibai+Genba+Moze+College+of+Engineering,PUNE/@18.5777574,73.977915,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition duration-300"
                  >
                    Gate No, 1178, Baif Rd, beside Talathi Office, Wagholi, Pune, Maharashtra 412207
                  </Link>
                </div>
                <div className="pl-9">
                  <p className="text-gray-300">
                    Join us at PGMC for an exciting eSports tournament. The venue is easily accessible and equipped with
                    all necessary facilities.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://lh5.googleusercontent.com/p/AF1QipMwr0Xutx1g5qwF40WKbAORzDwAyk52eu-h3jq4=w408-h272-k-no"
                  alt="PGMC College"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

