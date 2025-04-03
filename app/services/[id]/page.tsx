import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, MessageSquare, Database } from "lucide-react"

// This would typically come from a database or CMS
const services = [
  {
    id: "ai-chatbot",
    name: "Generative AI Chatbot Implementation",
    description: "AI-driven chatbots for customer engagement and automation",
    icon: MessageSquare,
    fullDescription: `
      Our AI Chatbot Implementation service helps businesses leverage the power of artificial intelligence to enhance customer engagement and automate routine interactions. We design, develop, and deploy conversational AI solutions that understand your customers' needs and provide instant, accurate responses.
      
      Our team of AI specialists works closely with you to create chatbots that reflect your brand voice and address your specific business requirements. Whether you need a simple FAQ bot or a complex virtual assistant, we have the expertise to deliver a solution that exceeds your expectations.
    `,
    benefits: [
      "Enhance customer experience with 24/7 support",
      "Reduce support costs by automating routine inquiries",
      "Collect valuable customer insights through conversation analytics",
      "Seamlessly integrate with your existing systems",
      "Scale your support operations without increasing headcount",
    ],
    process: [
      "Requirements Analysis: We work with you to understand your business needs and objectives.",
      "Design & Development: Our team designs and develops a chatbot tailored to your requirements.",
      "Training & Testing: We train the AI model and test the chatbot to ensure optimal performance.",
      "Deployment: We deploy the chatbot on your preferred platforms and channels.",
      "Monitoring & Optimization: We continuously monitor and optimize the chatbot to improve its performance.",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "crm-implementation",
    name: "CRM Implementation",
    description: "Deployment of Leadsquared, Salesforce, SAP, and other CRMs",
    icon: Database,
    fullDescription: `
      Our CRM Implementation service helps businesses streamline their customer relationship management processes. We assist you in selecting, customizing, and deploying the right CRM solution for your business needs, whether it's Leadsquared, Salesforce, SAP, or another platform.
      
      Our team of CRM experts works closely with you to understand your sales and customer service processes, configure the CRM to match your workflows, and train your team to use the system effectively. We ensure a smooth transition to the new CRM and provide ongoing support to help you maximize its value.
    `,
    benefits: [
      "Centralize customer data for better insights and decision-making",
      "Streamline sales processes and improve conversion rates",
      "Enhance customer service with comprehensive customer information",
      "Automate routine tasks to increase productivity",
      "Generate accurate reports and forecasts for better planning",
    ],
    process: [
      "Assessment: We evaluate your current processes and identify your CRM requirements.",
      "Selection: We help you select the right CRM platform based on your needs and budget.",
      "Configuration: We configure the CRM to match your business processes and workflows.",
      "Data Migration: We migrate your existing customer data to the new CRM system.",
      "Training & Support: We train your team and provide ongoing support to ensure successful adoption.",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  // Additional services would be defined here
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return {
      title: "Service Not Found | Saasiple",
    }
  }

  return {
    title: `${service.name} | Saasiple`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  const ServiceIcon = service.icon

  return (
    <div className="mt-[150px]">
      <div className="container mx-auto px-4 py-12">
        <Link href="/services" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ServiceIcon className="h-12 w-12 text-primary mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{service.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
            <div className="space-y-4">
              {service.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground mr-2 text-sm font-medium">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

