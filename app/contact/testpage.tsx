import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./contact-form"
import { Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contact Us | Saasiple",
  description: "Get in touch with our team to discuss your business needs and how we can help.",
}

export default function ContactPage() {
  return (
    <div className="mt-[120px] sm:mt-[150px]">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team to discuss your business needs and how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
            <Card className="border border-primary/20">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:border-l lg:border-primary/20 lg:pl-12">
            <div className="space-y-8 sm:space-y-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 89700-81700</p>
                    <p className="text-muted-foreground">Monday to Friday, 9am to 9pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">sales@saasiple.in</p>
                    <p className="text-muted-foreground">lohith@saasiple.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}