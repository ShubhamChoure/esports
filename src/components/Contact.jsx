import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      name: "Krishna Prajapati",
      game: "volunteer",
      phone: "+91 8149318104",
    },
    {
      name: "Suraj Darade",
      game: "volunteer",
      phone: "+91 8265046810",
    },
  ]

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent text-white">
          Contact Us
        </h2>
        <Card className="bg-black/50 backdrop-blur-sm border border-red-900/30 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">Tournament Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contacts.map((contact) => (
                <div key={contact.name} className="flex items-start space-x-4 p-4 rounded-lg bg-black/30">
                  <Phone className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-bold text-green-400">{contact.name}</p>
                    <p className="text-gray-400 text-sm">{contact.game}</p>
                    <p className="text-gray-300">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

