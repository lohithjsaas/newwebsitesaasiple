import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Saasiple",
  description: "Learn about Saasiple, our mission, values, and the team behind our innovative solutions.",
}

export default function AboutPage() {
  return (
    <div className="mt-[150px]">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About Saasiple</h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're a team of passionate technologists dedicated to transforming businesses through innovative
                software solutions.
              </p>
              <p className="text-muted-foreground">
                Founded in 2015, Saasiple has grown from a small startup to a leading consulting and software
                development company. Our mission is to empower businesses with cutting-edge technology solutions that
                drive growth, efficiency, and success.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Saasiple team" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative technology solutions that drive growth and efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of transformative software solutions that shape the future of business.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Innovation, excellence, integrity, collaboration, and client success drive everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", image: "/placeholder.svg?height=400&width=400" },
              { name: "Sarah Chen", role: "CTO", image: "/placeholder.svg?height=400&width=400" },
              { name: "Michael Rodriguez", role: "COO", image: "/placeholder.svg?height=400&width=400" },
              { name: "Emily Patel", role: "Head of Client Success", image: "/placeholder.svg?height=400&width=400" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-12 bg-accent/50 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: "8+", label: "Years of Experience" },
                { stat: "200+", label: "Clients Served" },
                { stat: "500+", label: "Projects Completed" },
                { stat: "50+", label: "Team Members" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-lg text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

