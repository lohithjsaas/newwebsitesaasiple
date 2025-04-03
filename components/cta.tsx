import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <div className="bg-secondary/50">
      <div className="mx-auto max-w-7xl py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background/30 px-4 sm:px-6 py-12 sm:py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-border/50">
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Let's work together to create innovative solutions that drive growth and efficiency for your business.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="w-full sm:w-auto rounded-full mt-2 sm:mt-0">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#ff80b5] to-[#ff8a4c] opacity-10"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

