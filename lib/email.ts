import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace these with your actual email configuration
const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "your-email@gmail.com",
    pass: process.env.SMTP_PASSWORD || "your-app-password",
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport(smtpOptions)

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL || "Saasiple Contact <your-email@gmail.com>",
    ...data,
  })
}

export const createContactFormEmailHtml = (data: {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
}) => {
  return `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
    ${data.service ? `<p><strong>Service Interested In:</strong> ${data.service}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `
}

