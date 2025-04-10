"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Expanded set of partners with more variety
const partners = [
  {
    name: "Partner 1",
    logo: "/images/partner-logo-1.png",
    width: 120,
    height: 120,
  },
  {
    name: "Partner 2",
    logo: "/images/partner-logo-2.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 3",
    logo: "/images/partner-logo-3.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 4",
    logo: "/images/partner-logo-4.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 5",
    logo: "/images/partner-logo-5.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 6",
    logo: "/images/partner-logo-6.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 7",
    logo: "/images/partner-logo-7.png",
    width: 180,
    height: 80,
  },
  {
    name: "Partner 8",
    logo: "/images/partner-logo-8.png",
    width: 180,
    height: 80,
  },
]

export default function Partners() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Trusted By Industry Leaders</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">Our Partners</p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            We collaborate with leading companies across various industries to deliver exceptional solutions.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center space-x-8 sm:space-x-16 py-4"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`partner-${index}`} className="flex-shrink-0">
                  <div className="relative h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center rounded-lg p-4 hover:bg-white/5">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className="max-h-12 sm:max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* We need one duplicate set at the end to ensure seamless looping */}
              {partners.map((partner, index) => (
                <div key={`partner-duplicate-${index}`} className="flex-shrink-0">
                  <div className="relative h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center rounded-lg p-4 hover:bg-white/5">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className="max-h-12 sm:max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 flex justify-center">
          <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-muted-foreground ring-1 ring-primary/10 hover:ring-primary/20">
            <span className="hidden md:inline">Want to become our partner? </span>
            <a href="/contact" className="font-semibold text-primary">
              <span className="absolute inset-0" aria-hidden="true" />
              Contact us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

