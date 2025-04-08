"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    name: "Sri Velliyur",
    role: "Co-Founder, Curapod - Litemed",
    content:
      "Saasiple transformed our customer service with their AI chatbot implementation. The team was professional, knowledgeable, and delivered beyond our expectations.",
    avatar: "SV",
  },
  {
    name: "Pradhu M",
    role: "CEO, SparKX",
    content:
      "The custom software solution developed by Saasiple has streamlined our operations and significantly improved our efficiency. Highly recommended!",
    avatar: "PM",
  },
  {
    name: "Srinivas N",
    role: "Head of Marketing, Travel India",
    content:
      "Working with Saasiple on our marketing automation implementation was a game-changer. Their expertise and attention to detail are unmatched.",
    avatar: "SN",
  },
]

export default function Testimonials() {
  const isMobile = useMobile()

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-accent/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="mx-auto mt-8 sm:mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: isMobile ? 0.1 : index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

