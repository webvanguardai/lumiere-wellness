'use client'

import { motion } from 'framer-motion'

const pillars = [
  { icon: '✦', title: 'Expert Therapists', text: 'Every therapist holds international certifications from CIDESCO or ITEC, with minimum 5 years of luxury spa experience.' },
  { icon: '◈', title: 'Premium Products', text: 'Exclusively partnered with La Mer, Valmont, and ESPA. We never compromise on what touches your skin.' },
  { icon: '❋', title: 'Private Suites', text: 'Eight individually designed treatment suites, each a private sanctuary with its own atmosphere and ambiance.' },
  { icon: '◆', title: 'Bespoke Rituals', text: 'No two clients receive the same treatment. Your skin, your stress, your goals — your ritual.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0D0A07]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                alt="Lumière interior"
                className="w-full h-full object-cover filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07]/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-[#C9A96E] p-6 text-[#0A0806]"
            >
              <div className="font-serif text-4xl font-black leading-none">5+</div>
              <div className="text-[10px] uppercase tracking-widest mt-1 font-semibold">Years of<br />Excellence</div>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#C9A96E]/20" />
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Our Story</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F5F0E8] leading-tight mb-6">
              A sanctuary born<br />
              <span className="italic text-[#C9A96E]">from a vision</span>
            </h2>

            <p className="text-[#F5F0E8]/55 text-sm leading-relaxed mb-4">
              {"Lumière was founded in 2019 by Nadia Al Mansouri, a CIDESCO-certified aesthetician who spent a decade working in the world's finest spas — from Bali to Paris to the Maldives — before bringing her vision to Dubai Marina."}
            </p>
            <p className="text-[#F5F0E8]/55 text-sm leading-relaxed mb-10">
              The name says it all: <em className="text-[#C9A96E] not-italic font-medium">lumière</em> — light. We believe every client carries an inner radiance waiting to be revealed. Our role is simply to help it shine.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="text-[#C9A96E]/60 text-lg mt-0.5 flex-shrink-0">{pillar.icon}</span>
                  <div>
                    <h4 className="text-[#F5F0E8] font-semibold text-sm mb-1">{pillar.title}</h4>
                    <p className="text-[#F5F0E8]/40 text-xs leading-relaxed">{pillar.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
