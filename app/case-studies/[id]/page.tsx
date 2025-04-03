import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"

// This would typically come from a database or CMS
const caseStudies = [
  {
    id: "fintech-ai-chatbot",
    title: "AI Chatbot for FinTech Leader",
    description:
      "How we helped a leading fintech company implement an AI chatbot that reduced customer service costs by 35%.",
    category: "AI Chatbot Implementation",
    client: "FinTech Innovations Inc.",
    duration: "3 months",
    year: "2023",
    challenge: `
      FinTech Innovations Inc., a leading financial technology company, was experiencing a significant increase in customer service inquiries as their user base grew. Their existing customer service team was struggling to keep up with the volume, resulting in longer response times and decreased customer satisfaction.
      
      The company needed a solution that could:
      - Handle routine customer inquiries 24/7
      - Reduce the burden on their human customer service team
      - Maintain high-quality customer interactions
      - Scale with their growing user base
      - Integrate with their existing systems
    `,
    solution: `
      After a thorough analysis of their requirements, we proposed and implemented an AI-powered chatbot solution that could handle a wide range of customer inquiries automatically.
      
      Our approach included:
      
      1. Developing a custom AI chatbot using natural language processing (NLP) to understand and respond to customer inquiries
      2. Training the chatbot with historical customer service data to ensure accurate responses
      3. Implementing machine learning algorithms to enable the chatbot to improve over time
      4. Creating a seamless handoff process to human agents for complex inquiries
      5. Integrating the chatbot with their existing customer service platform and knowledge base
      6. Designing a user-friendly interface that aligned with their brand
    `,
    results: [
      "35% reduction in customer service costs",
      "24/7 customer support coverage",
      "92% customer satisfaction rate",
      "80% of routine inquiries handled automatically",
      "Average response time reduced from 15 minutes to instant",
      "Human customer service team able to focus on complex issues",
    ],
    testimonial: {
      quote:
        "Saasiple's AI chatbot solution has transformed our customer service operations. Not only have we reduced costs, but we've also improved customer satisfaction by providing instant responses at any time of day. The team at Saasiple was professional, knowledgeable, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CTO, FinTech Innovations Inc.",
    },
    image: "/placeholder.svg?text=AI+Chatbot+Case+Study&height=600&width=800",
    gallery: [
      "/placeholder.svg?text=AI+Chatbot+Interface&height=600&width=800",
      "/placeholder.svg?text=AI+Chatbot+Analytics&height=600&width=800",
      "/placeholder.svg?text=AI+Chatbot+Integration&height=600&width=800",
    ],
  },
  // Additional case studies would be defined here
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find((s) => s.id === params.id)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Saasiple",
    }
  }

  return {
    title: `${caseStudy.title} | Saasiple Case Study`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find((s) => s.id === params.id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="mt-[150px]">
      <div className="container mx-auto px-4 py-12">
        <Link href="/case-studies" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-sm text-primary font-medium mb-2">{caseStudy.category}</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{caseStudy.description}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-medium">{caseStudy.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{caseStudy.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium">{caseStudy.year}</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
            <div className="space-y-4">
              {caseStudy.challenge.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
            <div className="space-y-4">
              {caseStudy.solution.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
          <blockquote className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
          <div className="flex items-center">
            <div className="mr-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {caseStudy.testimonial.author
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
            <div>
              <p className="font-medium">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to achieve similar results?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

