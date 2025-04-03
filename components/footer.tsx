import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Chatbot Implementation", href: "/services/ai-chatbot" },
    { name: "CRM Implementation", href: "/services/crm" },
    { name: "Helpdesk Support", href: "/services/helpdesk" },
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "Website Development", href: "/services/web-development" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAASIPLE%20%282%29-Q4MD7X3oefI9SFQe7eOpXQbQrWpcv7.png"
              alt="Saasiple Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming businesses with innovative solutions since 2015. We help companies streamline operations and
              drive growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul role="list" className="mt-4 space-y-3 sm:mt-6">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul role="list" className="mt-4 space-y-3 sm:mt-6">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul role="list" className="mt-4 space-y-3 sm:mt-6">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 flex justify-center space-x-6 sm:space-x-8">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saasiple, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

