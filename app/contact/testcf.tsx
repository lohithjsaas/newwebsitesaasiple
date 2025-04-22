"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RefreshCwIcon as ReloadIcon, CheckCircle, AlertTriangle } from "lucide-react"

import { submitContactForm, type ContactFormState } from "./actions"

const initialState: ContactFormState = {}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [selectedService, setSelectedService] = useState<string>("")

  return (
    <form action={formAction} className="space-y-5">
      {state?.success && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state?.errors?._form && (
        <Alert className="bg-red-50 text-red-800 border-red-200">
          <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
          <AlertDescription>{state.errors._form}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className={state?.errors?.name ? "border-red-500" : ""}
          />
          {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className={state?.errors?.email ? "border-red-500" : ""}
          />
          {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company name" />
          {state?.errors?.company && <p className="text-sm text-red-500">{state.errors.company[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Your phone number" />
          {state?.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service You're Interested In</Label>
        <input type="hidden" name="service" value={selectedService} />
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai-chatbot">AI Chatbot Implementation</SelectItem>
            <SelectItem value="crm">CRM Implementation</SelectItem>
            <SelectItem value="helpdesk">Helpdesk Support System</SelectItem>
            <SelectItem value="marketing">Marketing Automation</SelectItem>
            <SelectItem value="bpm">BPM Consulting</SelectItem>
            <SelectItem value="integration">Integration Services</SelectItem>
            <SelectItem value="managed-services">Managed Services</SelectItem>
            <SelectItem value="voice">Voice Solutions</SelectItem>
            <SelectItem value="training">Product & Custom Training</SelectItem>
            <SelectItem value="custom-software">Custom Software Development</SelectItem>
            <SelectItem value="cdn-cdp">CDN & CDP Implementation</SelectItem>
            <SelectItem value="web-mobile">Website & Mobile App Development</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {state?.errors?.service && <p className="text-sm text-red-500">{state.errors.service[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry"
          rows={5}
          required
          className={state?.errors?.message ? "border-red-500" : ""}
        />
        {state?.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

