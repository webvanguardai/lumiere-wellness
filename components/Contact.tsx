'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
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

          {/* Right — booking form (visual only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-white/5 bg-[#0D0A07] p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-8">Book Your Treatment</h3>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">First Name</label>
                  <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm">Sarah</div>
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Last Name</label>
                  <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm">Mitchell</div>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Email</label>
                <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm">sarah@example.com</div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Treatment</label>
                <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm flex items-center justify-between">
                  <span>Signature Facial — 90 min</span>
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-[#C9A96E]/30">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Date</label>
                  <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm">24 March 2026</div>
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Time</label>
                  <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/20 text-sm">2:00 PM</div>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 block mb-2">Notes (optional)</label>
                <div className="border border-white/10 bg-white/3 px-4 py-3 text-[#F5F0E8]/15 text-sm h-20">Sensitive skin, prefer light pressure...</div>
              </div>

              <button className="btn-gold w-full justify-center mt-2">
                Confirm Reservation
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
