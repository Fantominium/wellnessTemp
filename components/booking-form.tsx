"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ ...formData, date })
    alert("Booking request submitted! We'll contact you to confirm your appointment.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      time: "",
      notes: "",
    })
    setDate(undefined)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-sm shadow-sm">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="font-light">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 font-light"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="font-light">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 font-light"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="font-light">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 font-light"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="service" className="font-light">
            Service
          </Label>
          <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
            <SelectTrigger id="service" className="mt-1 font-light">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="swedish">Swedish Massage (60 min)</SelectItem>
              <SelectItem value="deep-tissue">Deep Tissue Massage (75 min)</SelectItem>
              <SelectItem value="hot-stone">Hot Stone Therapy (90 min)</SelectItem>
              <SelectItem value="aromatherapy">Aromatherapy Massage (60 min)</SelectItem>
              <SelectItem value="prenatal">Prenatal Massage (60 min)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="font-light">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-light mt-1", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable dates in the past and Sundays
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today || date.getDay() === 0
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="time" className="font-light">
              Time
            </Label>
            <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
              <SelectTrigger id="time" className="mt-1 font-light">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:00">9:00 AM</SelectItem>
                <SelectItem value="10:30">10:30 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="1:30">1:30 PM</SelectItem>
                <SelectItem value="3:00">3:00 PM</SelectItem>
                <SelectItem value="4:30">4:30 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="notes" className="font-light">
            Special Requests or Notes
          </Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 font-light"
            rows={3}
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-stone-800 hover:bg-stone-700 text-white font-light tracking-wide py-6">
        Request Booking
      </Button>

      <p className="text-sm text-stone-500 text-center font-light">
        We'll contact you to confirm your appointment within 24 hours.
      </p>
    </form>
  )
}
