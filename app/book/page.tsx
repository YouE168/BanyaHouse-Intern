'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, MapPin } from 'lucide-react'

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'private',
    date: '',
    duration: '2',
    guests: '4',
    location: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you for your booking request! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', serviceType: 'private', date: '', duration: '2', guests: '4', location: '', message: '' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Sauna Experience</h1>
          <p className="text-lg opacity-90">Schedule your private session or delivery today</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="(785) 501-3414"
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold mb-2 text-foreground">Service Type *</label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="private">Private Group Session</option>
                  <option value="delivered">Delivered & Setup</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground">
                  <Calendar size={16} /> Preferred Date *
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground">
                  <Clock size={16} /> Duration (hours) *
                </label>
                <select
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="2">2 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="24">24 Hours (Overnight)</option>
                  <option value="72">3 Days</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="guests" className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground">
                  <Users size={16} /> Number of Guests *
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n.toString()}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground">
                  <MapPin size={16} /> Location *
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Your address"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Special Requests</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-foreground"
                placeholder="Any special requests? (Sauna attendant, specific time, etc.)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Request Booking
            </button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              We'll confirm your booking within 24 hours
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}