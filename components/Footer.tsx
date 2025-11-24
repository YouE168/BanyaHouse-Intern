import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BanyaHouse</h3>
            <p className="text-sm opacity-90 mb-4">Premium mobile sauna experiences for wellness, parties, and retreats.</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/banyahouse_mobilesauna" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/profile.php?id=61580868182540" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-80 transition">Home</Link></li>
              <li><Link href="/book" className="hover:opacity-80 transition">Book Now</Link></li>
              <li><Link href="/services" className="hover:opacity-80 transition">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:opacity-80 transition">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:opacity-80 transition">About Us</Link></li>
              <li><Link href="/faq" className="hover:opacity-80 transition">FAQ</Link></li>
              <li><Link href="/gift-cards" className="hover:opacity-80 transition">Gift Cards</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>3339 SW 34th Ct, Topeka, KS 66614</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} />
                <a href="tel:+17855013414" className="hover:opacity-80 transition">(785) 501-3414</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} />
                <a href="mailto:topmobilesauna@gmail.com" className="hover:opacity-80 transition">topmobilesauna@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 BanyaHouse. All rights reserved. | Premium Mobile Sauna Rentals in Topeka, Kansas</p>
        </div>
      </div>
    </footer>
  )
}
