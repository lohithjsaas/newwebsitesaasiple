"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Typewriter from "typewriter-effect"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-background to-background/95 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 -top-50 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ff8a4c] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-4">
              Transforming Businesses with
            </h1>
            <div className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold h-16 sm:h-20 flex items-center justify-center">
              <Typewriter
                options={{
                  strings: ["Innovative Solutions", "Innovative Team", "Innovative Approach", "Innovative Ideas"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 1500,
                  cursor: "|",
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            </div>
            <p className="mt-6 sm:mt-10 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4 sm:px-0">
              We provide cutting-edge consulting and software development services to help businesses streamline
              operations, enhance customer experiences, and drive growth.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button asChild size={isMobile ? "default" : "lg"} className="w-full sm:w-auto rounded-full">
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto rounded-full mt-2 sm:mt-0"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#ff8a4c] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}

