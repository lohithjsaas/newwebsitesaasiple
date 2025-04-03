import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MessageSquare,
  Database,
  Headphones,
  BarChart3,
  GitBranch,
  Layers,
  Settings,
  Mic,
  GraduationCap,
  Code,
  Network,
  Smartphone,
} from "lucide-react"

export const metadata = {
  title: "Services | Saasiple",
  description: "Explore our comprehensive range of consulting and software development services.",
}

const services = [
  {
    id: "ai-chatbot",
    name: "Generative AI Chatbot Implementation",
    description: "AI-driven chatbots for customer engagement and automation",
    icon: MessageSquare,
    content:
      "Enhance customer engagement with our AI-powered chatbot solutions. We design, develop, and implement conversational AI that understands your customers and provides instant support.",
  },
  {
    id: "crm-implementation",
    name: "CRM Implementation",
    description: "Deployment of Leadsquared, Salesforce, SAP, and other CRMs",
    icon: Database,
    content:
      "Streamline your customer relationship management with our expert CRM implementation services. We help you select, customize, and deploy the right CRM solution for your business needs.",
  },
  {
    id: "helpdesk-support",
    name: "Helpdesk Support System",
    description: "Freshdesk, Zendesk, Kapture CX, and more",
    icon: Headphones,
    content:
      "Improve your customer support with our helpdesk implementation services. We set up and configure support systems that help you manage tickets, track issues, and resolve customer problems efficiently.",
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description: "End-to-end setup for streamlined marketing operations",
    icon: BarChart3,
    content:
      "Automate your marketing processes with our comprehensive marketing automation solutions. We help you implement tools that nurture leads, track campaigns, and optimize your marketing efforts.",
  },
  {
    id: "bpm-consulting",
    name: "BPM Consulting",
    description: "Process optimization and business workflow automation",
    icon: GitBranch,
    content:
      "Optimize your business processes with our BPM consulting services. We analyze your workflows, identify bottlenecks, and implement solutions that improve efficiency and productivity.",
  },
  {
    id: "integration-services",
    name: "Integration Services",
    description: "CXO, B2B, and industry-specific integrations",
    icon: Layers,
    content:
      "Connect your systems and applications with our integration services. We design and implement integrations that enable seamless data flow and process automation across your organization.",
  },
  {
    id: "managed-services",
    name: "Managed Services",
    description: "Ongoing support and optimization for business tools",
    icon: Settings,
    content:
      "Ensure the optimal performance of your business tools with our managed services. We provide ongoing support, maintenance, and optimization to keep your systems running smoothly.",
  },
  {
    id: "voice-solutions",
    name: "Voice Solutions",
    description: "Cloud and on-premise voice solutions",
    icon: Mic,
    content:
      "Enhance your communication capabilities with our voice solutions. We implement cloud and on-premise voice systems that improve collaboration and customer interaction.",
  },
  {
    id: "training",
    name: "Product & Custom Training",
    description: "Hands-on training for products and custom-built solutions",
    icon: GraduationCap,
    content:
      "Empower your team with our comprehensive training programs. We provide hands-on training for products and custom-built solutions to ensure your team can maximize their potential.",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    description: "Bespoke software for unique business needs",
    icon: Code,
    content:
      "Address your unique business challenges with our custom software development services. We design and build bespoke solutions tailored to your specific requirements.",
  },
  {
    id: "cdn-cdp",
    name: "CDN & CDP Implementation",
    description: "Content delivery and customer data platform solutions",
    icon: Network,
    content:
      "Optimize your content delivery and customer data management with our CDN and CDP implementation services. We help you set up systems that improve performance and enhance customer insights.",
  },
  {
    id: "web-mobile-development",
    name: "Website & Mobile App Development",
    description: "End-to-end development for web and mobile applications",
    icon: Smartphone,
    content:
      "Create engaging digital experiences with our website and mobile app development services. We design and develop responsive websites and intuitive mobile applications that captivate your audience.",
  },
]

export default function ServicesPage() {
  return (
    <div className="mt-[150px]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of consulting and software development services to help your business thrive
            in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="h-full flex flex-col transition-all hover:shadow-md service-card border border-primary/10 bg-secondary/20"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-md bg-primary/10 mr-3">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription className="text-sm mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <p className="text-sm text-muted-foreground">{service.content}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href={`/services/${service.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
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

