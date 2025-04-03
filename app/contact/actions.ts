"use server"

import { z } from "zod"
import { sendEmail, createContactFormEmailHtml } from "@/lib/email"

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    phone?: string[]
    service?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    // Validate form data
    const validatedFields = contactFormSchema.safeParse({
      name,
      email,
      company,
      phone,
      service,
      message,
    })

    // If validation fails, return errors
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
        message: "Please correct the errors in the form.",
      }
    }

    // Prepare the data for email
    const validatedData = validatedFields.data

    // Create the email HTML content
    const emailHtml = createContactFormEmailHtml(validatedData)

    // Send the email
    await sendEmail({
      to: process.env.CONTACT_FORM_RECIPIENT || "your-email@example.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: emailHtml,
    })

    // Return success state
    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    return {
      success: false,
      message: "There was an error submitting your form. Please try again later.",
      errors: {
        _form: ["An unexpected error occurred. Please try again later."],
      },
    }
  }
}

