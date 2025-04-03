"use client"

import { motion } from "framer-motion"
import { CheckCircle, Search, FileText, Palette, Code, TestTube, Rocket, HeartPulse } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const features = [
  {
    name: "Expert Consultation",
    description: "Our team of experts provides tailored consultation to address your specific business needs.",
  },
  {
    name: "Cutting-Edge Technology",
    description:
      "We leverage the latest technologies to deliver innovative solutions that keep you ahead of the competition.",
  },
  {
    name: "Seamless Integration",
    description: "Our solutions integrate seamlessly with your existing systems, ensuring a smooth transition.",
  },
  {
    name: "Ongoing Support",
    description: "We provide continuous support and maintenance to ensure your systems run optimally.",
  },
  {
    name: "Scalable Solutions",
    description: "Our solutions are designed to scale with your business, accommodating growth and changing needs.",
  },
  {
    name: "Data Security",
    description:
      "We prioritize the security of your data, implementing robust measures to protect sensitive information.",
  },
]

const milestones = [
  {
    title: "Discover",
    description:
      "We begin by understanding your business needs, challenges, and goals through in-depth consultation and research.",
    icon: Search,
    color: "from-primary/20 to-primary/40",
    textColor: "text-primary",
  },
  {
    title: "Define",
    description:
      "Based on our findings, we define the scope, requirements, and roadmap for your solution, ensuring alignment with your objectives.",
    icon: FileText,
    color: "from-purple-500/20 to-purple-500/40",
    textColor: "text-purple-500",
  },
  {
    title: "Design",
    description:
      "Our design team creates intuitive user experiences and interfaces that are both functional and visually appealing.",
    icon: Palette,
    color: "from-pink-500/20 to-pink-500/40",
    textColor: "text-pink-500",
  },
  {
    title: "Develop",
    description:
      "Our expert team develops your solution using cutting-edge technologies, following best practices and rigorous quality standards.",
    icon: Code,
    color: "from-blue-500/20 to-blue-500/40",
    textColor: "text-blue-500",
  },
  {
    title: "Test",
    description:
      "We conduct thorough testing to ensure your solution is robust, secure, and performs optimally under various conditions.",
    icon: TestTube,
    color: "from-green-500/20 to-green-500/40",
    textColor: "text-green-500",
  },
  {
    title: "Deploy",
    description:
      "We implement your solution in your environment, ensuring a smooth transition and minimal disruption to your operations.",
    icon: Rocket,
    color: "from-cyan-500/20 to-cyan-500/40",
    textColor: "text-cyan-500",
  },
  {
    title: "Support",
    description:
      "Our team provides ongoing support and maintenance to ensure your solution continues to deliver value and adapt to your evolving needs.",
    icon: HeartPulse,
    color: "from-red-500/20 to-red-500/40",
    textColor: "text-red-500",
  },
]

export default function Features() {
  const isMobile = useMobile()

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
                A better way to grow your business
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                We combine industry expertise with technological innovation to deliver solutions that drive business
                growth and efficiency.
              </p>
              <dl className="mt-8 sm:mt-10 max-w-xl space-y-6 sm:space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-muted-foreground">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="w-full space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">Our Process</h3>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-blue-500/30 to-red-500/30 transform -translate-x-1/2 rounded-full"></div>

                {/* Milestones */}
                <div className="space-y-8 sm:space-y-10 relative">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: isMobile ? 0.1 : index * 0.1 }}
                      className="relative"
                    >
                      {/* Milestone circle */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div
                          className={`flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br ${milestone.color} shadow-lg`}
                        >
                          <milestone.icon className={`h-6 sm:h-7 w-6 sm:w-7 ${milestone.textColor}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-6 sm:ml-8 pt-5 sm:pt-6 pb-2 pl-8 sm:pl-10 pr-3 sm:pr-4 rounded-lg bg-secondary/20 border border-secondary/30 ${index % 2 === 0 ? "text-left" : "text-left"}`}
                      >
                        <h4 className={`text-lg sm:text-xl font-bold ${milestone.textColor}`}>{milestone.title}</h4>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

