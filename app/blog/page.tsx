import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Saasiple",
  description: "Insights, trends, and best practices in consulting and software development.",
}

const blogPosts = [
  {
    id: "ai-chatbots-transform-customer-service",
    title: "How AI Chatbots Are Transforming Customer Service",
    description: "Explore the ways AI-powered chatbots are revolutionizing customer service and support operations.",
    category: "AI & Automation",
    author: "Alex Johnson",
    date: "June 15, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Customer+Service+Chatbot&height=600&width=800",
    readTime: "5 min read",
  },
  {
    id: "choosing-right-crm",
    title: "Choosing the Right CRM for Your Business",
    description: "A comprehensive guide to selecting the CRM system that best fits your business needs and goals.",
    category: "CRM",
    author: "Sarah Chen",
    date: "May 28, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+CRM+Dashboard&height=600&width=800",
    readTime: "8 min read",
  },
  {
    id: "business-process-optimization",
    title: "Business Process Optimization: A Step-by-Step Guide",
    description: "Learn how to identify, analyze, and optimize your business processes for maximum efficiency.",
    category: "BPM",
    author: "Michael Rodriguez",
    date: "April 12, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Business+Process+Flowchart&height=600&width=800",
    readTime: "10 min read",
  },
  {
    id: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs. Off-the-Shelf Solutions",
    description: "Weighing the pros and cons of custom software development against ready-made solutions.",
    category: "Software Development",
    author: "Emily Patel",
    date: "March 5, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Software+Comparison&height=600&width=800",
    readTime: "7 min read",
  },
  {
    id: "mobile-app-development-trends",
    title: "Top Mobile App Development Trends for 2023",
    description: "Stay ahead of the curve with these emerging trends in mobile application development.",
    category: "Mobile Development",
    author: "David Kim",
    date: "February 20, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Mobile+App+Trends&height=600&width=800",
    readTime: "6 min read",
  },
  {
    id: "data-security-best-practices",
    title: "Data Security Best Practices for Businesses",
    description: "Essential strategies to protect your business data and maintain customer trust.",
    category: "Security",
    author: "Lisa Wong",
    date: "January 15, 2023",
    // In a real implementation, replace with actual AI-generated image path
    image: "/placeholder.svg?text=AI+Generated+Data+Security&height=600&width=800",
    readTime: "9 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="mt-[120px] sm:mt-[150px]">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">Blog & Insights</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in consulting and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="h-full transition-all hover:shadow-md service-card border border-primary/10 bg-secondary/20 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-3 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {post.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.id}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
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

