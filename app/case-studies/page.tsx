import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies | Saasiple",
  description: "Explore our success stories and learn how we've helped businesses transform with our solutions.",
}

const caseStudies = [
  {
    id: "fintech-ai-chatbot",
    title: "AI Chatbot for FinTech Leader",
    description:
      "How we helped a leading fintech company implement an AI chatbot that reduced customer service costs by 35%.",
    category: "AI Chatbot Implementation",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Fintech+Chatbot&height=600&width=800",
    results: [
      "35% reduction in customer service costs",
      "24/7 customer support coverage",
      "92% customer satisfaction rate",
    ],
  },
  {
    id: "healthcare-crm",
    title: "CRM Implementation for Healthcare Provider",
    description: "Streamlining patient management and improving care coordination through a custom CRM solution.",
    category: "CRM Implementation",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Healthcare+CRM&height=600&width=800",
    results: [
      "40% increase in patient engagement",
      "25% reduction in administrative tasks",
      "Improved care coordination",
    ],
  },
  {
    id: "retail-mobile-app",
    title: "Mobile App for Retail Chain",
    description:
      "Developing a feature-rich mobile app that increased customer engagement and boosted sales for a national retail chain.",
    category: "Mobile App Development",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Retail+App&height=600&width=800",
    results: ["28% increase in repeat purchases", "45% increase in mobile sales", "Enhanced customer loyalty"],
  },
  {
    id: "manufacturing-bpm",
    title: "BPM Optimization for Manufacturing Company",
    description:
      "Optimizing business processes to improve efficiency and reduce costs for a global manufacturing company.",
    category: "BPM Consulting",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Manufacturing+Process&height=600&width=800",
    results: ["30% reduction in production time", "20% cost savings", "Improved quality control"],
  },
  {
    id: "ecommerce-integration",
    title: "E-commerce Integration Solution",
    description: "Creating a seamless integration between multiple systems for a growing e-commerce business.",
    category: "Integration Services",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Ecommerce+Integration&height=600&width=800",
    results: ["50% faster order processing", "Real-time inventory updates", "Improved customer experience"],
  },
  {
    id: "saas-custom-software",
    title: "Custom Software for SaaS Company",
    description:
      "Developing a bespoke software solution that helped a SaaS company scale its operations and serve more clients.",
    category: "Custom Software Development",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+SaaS+Software&height=600&width=800",
    results: ["200% increase in capacity", "40% reduction in operational costs", "Enhanced service delivery"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="mt-[120px] sm:mt-[150px]">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">Case Studies</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our success stories and learn how we've helped businesses transform with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="h-full transition-all hover:shadow-md service-card border border-primary/10 bg-secondary/20 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{study.category}</div>
                <CardTitle className="line-clamp-2">{study.title}</CardTitle>
                <CardDescription className="line-clamp-3">{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-sm font-medium mb-2">Key Results:</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  {study.results.map((result, index) => (
                    <li key={index} className="line-clamp-2">
                      {result}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/case-studies/${study.id}`}>
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

