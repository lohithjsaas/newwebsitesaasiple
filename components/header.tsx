"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  if (!mounted) {
    return null
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4 sm:py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Saasiple</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAASIPLE%20%282%29-Q4MD7X3oefI9SFQe7eOpXQbQrWpcv7.png"
              alt="Saasiple Logo"
              width={isMobile ? 150 : 200}
              height={isMobile ? 40 : 50}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-all relative group",
                pathname === item.href
                  ? "text-primary neon-glow"
                  : "text-foreground/80 hover:text-primary hover:neon-glow",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full shadow-[0_0_8px_3px_hsla(var(--primary)/0.3)] neon-pulse" : "",
                )}
              ></span>
              <span
                className={cn(
                  "absolute inset-0 rounded-md -z-10 opacity-0 transition-opacity duration-300",
                  pathname === item.href
                    ? "bg-primary/5 shadow-[0_0_15px_hsla(var(--primary)/0.15)] opacity-100"
                    : "group-hover:opacity-50 group-hover:shadow-[0_0_10px_hsla(var(--primary)/0.1)]",
                )}
              ></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="relative overflow-hidden group">
            <Link href="/contact">
              Get Started
              <span className="absolute inset-0 rounded-md -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_15px_hsla(var(--primary)/0.3)]"></span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/10"
            id="mobile-menu"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Saasiple</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAASIPLE%20%282%29-Q4MD7X3oefI9SFQe7eOpXQbQrWpcv7.png"
                  alt="Saasiple Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 relative group",
                        pathname === item.href
                          ? "text-primary neon-glow"
                          : "text-foreground/80 hover:text-primary hover:neon-glow",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      <span
                        className={cn(
                          "absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100",
                          pathname === item.href
                            ? "scale-x-100 shadow-[0_0_8px_3px_hsla(var(--primary)/0.3)] neon-pulse"
                            : "",
                        )}
                      ></span>
                      <span
                        className={cn(
                          "absolute inset-0 rounded-md -z-10 opacity-0 transition-opacity duration-300",
                          pathname === item.href
                            ? "bg-primary/5 shadow-[0_0_15px_hsla(var(--primary)/0.15)] opacity-100"
                            : "group-hover:opacity-50 group-hover:shadow-[0_0_10px_hsla(var(--primary)/0.1)]",
                        )}
                      ></span>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-center py-6">
                  <Button
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full relative overflow-hidden group"
                  >
                    <Link href="/contact">
                      Get Started
                      <span className="absolute inset-0 rounded-md -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_15px_hsla(var(--primary)/0.3)]"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

