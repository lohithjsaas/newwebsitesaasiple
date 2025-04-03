"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
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
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const services = [
  {
    id: "ai-chatbot",
    name: "Generative AI Chatbot Implementation",
    description: "AI-driven chatbots for customer engagement and automation",
    icon: MessageSquare,
  },
  {
    id: "crm-implementation",
    name: "CRM Implementation",
    description: "Deployment of Leadsquared, Salesforce, SAP, and other CRMs",
    icon: Database,
  },
  {
    id: "helpdesk-support",
    name: "Helpdesk Support System",
    description: "Freshdesk, Zendesk, Kapture CX, and more",
    icon: Headphones,
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description: "End-to-end setup for streamlined marketing operations",
    icon: BarChart3,
  },
  {
    id: "bpm-consulting",
    name: "BPM Consulting",
    description: "Process optimization and business workflow automation",
    icon: GitBranch,
  },
  {
    id: "integration-services",
    name: "Integration Services",
    description: "CXO, B2B, and industry-specific integrations",
    icon: Layers,
  },
  {
    id: "managed-services",
    name: "Managed Services",
    description: "Ongoing support and optimization for business tools",
    icon: Settings,
  },
  {
    id: "voice-solutions",
    name: "Voice Solutions",
    description: "Cloud and on-premise voice solutions",
    icon: Mic,
  },
  {
    id: "training",
    name: "Product & Custom Training",
    description: "Hands-on training for products and custom-built solutions",
    icon: GraduationCap,
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    description: "Bespoke software for unique business needs",
    icon: Code,
  },
  {
    id: "cdn-cdp",
    name: "CDN & CDP Implementation",
    description: "Content delivery and customer data platform solutions",
    icon: Network,
  },
  {
    id: "web-mobile-development",
    name: "Website & Mobile App Development",
    description: "End-to-end development for web and mobile applications",
    icon: Smartphone,
  },
]

export default function Services() {
  const isMobile = useMobile()

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Services</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Solutions for Your Business
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            We offer a wide range of services to help your business thrive in the digital landscape.
          </p>
        </div>
        <div className="mx-auto mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: isMobile ? 0.1 : index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full flex flex-col transition-all hover:shadow-md service-card border border-primary/10 bg-secondary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-md bg-primary/10 mr-3">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2">{/* Additional content could go here */}</CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary hover:bg-transparent"
                  >
                    <Link href={`/services/${service.id}`} className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

