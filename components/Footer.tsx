'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0806] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-bold text-[#E8D5B0] mb-1">Lumière</div>
            <div className="text-[9px] tracking-[0.4em] uppercase text-[#C9A96E]/60 mb-4">Wellness Studio</div>
            <p className="text-[#F5F0E8]/35 text-xs leading-relaxed max-w-xs">
              An elevated sanctuary of beauty and wellness in the heart of Dubai Marina. Where light meets serenity.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'TikTok', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/25 hover:text-[#C9A96E]/70 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {['Signature Facials', 'Holistic Massage', 'Body Rituals', 'Nail Atelier', 'Lash & Brow', 'Wellness Packages'].map((t) => (
                <li key={t}>
                  <a href="#services" className="text-xs text-[#F5F0E8]/35 hover:text-[#C9A96E]/70 transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-4">Visit Us</h4>
            <p className="text-xs text-[#F5F0E8]/35 leading-relaxed mb-4">
              Dubai Marina Walk<br />
              Tower 3, Level 4, Suite 401<br />
              Dubai, UAE
            </p>
            <p className="text-xs text-[#F5F0E8]/35 mb-1">+971 4 555 0199</p>
            <p className="text-xs text-[#F5F0E8]/35">hello@lumierewellness.ae</p>
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#F5F0E8]/20 tracking-wider">
            © 2026 Lumière Wellness Studio LLC · All Rights Reserved
          </p>
          <p className="text-[10px] text-[#F5F0E8]/15 tracking-wider">
            Design by{' '}
            <a href="https://webvanguard.vercel.app" className="text-[#C9A96E]/30 hover:text-[#C9A96E]/60 transition-colors">
              Web Vanguard
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
