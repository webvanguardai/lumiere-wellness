'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Reserve</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F5F0E8] leading-tight mb-6">
              Your ritual<br />
              <span className="italic text-[#C9A96E]">awaits you</span>
            </h2>
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed max-w-sm mb-10">
              Reserve your treatment online or reach us directly. Our concierge team responds within 2 hours.
            </p>

            <div className="space-y-5">
              {[
                { label: 'Location', val: 'Dubai Marina Walk, Tower 3\nLevel 4, Suite 401, Dubai, UAE' },
                { label: 'Hours', val: 'Monday – Saturday: 9am – 9pm\nSunday: 10am – 7pm' },
                { label: 'Phone', val: '+971 4 555 0199' },
                { label: 'WhatsApp', val: '+971 55 555 0199' },
                { label: 'Email', val: 'hello@lumierewellness.ae' },
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/60 w-20 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-[#F5F0E8]/65 text-sm leading-relaxed whitespace-pre-line">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Formspree booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-white/5 bg-[#0D0A07] p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-8">Book Your Treatment</h3>

            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              target="_blank"
              className="space-y-5"
            >
              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-[#F5F0E8]/80 text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E]/40 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+971 50 000 0000"
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-[#F5F0E8]/80 text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E]/40 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">
                  Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full border border-white/10 bg-[#0D0A07] px-4 py-3 text-[#F5F0E8]/80 text-sm focus:outline-none focus:border-[#C9A96E]/40 transition-colors appearance-none"
                >
                  <option value="" disabled selected>Select a treatment</option>
                  <option value="Signature Facial">Signature Facial — from AED 580</option>
                  <option value="Holistic Massage">Holistic Massage — from AED 420</option>
                  <option value="Gold Body Ritual">Gold Body Ritual — from AED 950</option>
                  <option value="Nail Atelier">Nail Atelier — from AED 180</option>
                  <option value="Hammam Journey">Hammam Journey — from AED 680</option>
                  <option value="Couple's Retreat">Couple&apos;s Retreat — from AED 1,400</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any special requests or notes..."
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-[#F5F0E8]/80 text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E]/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full justify-center mt-2"
              >
                Send Reservation Request
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
