'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    name: 'Signature Facials',
    tagline: 'Skin Transformation',
    description:
      "Bespoke facial treatments using La Mer and Valmont protocols. Our master aestheticians craft each session around your skin's unique needs, delivering visible radiance.",
    duration: 'From 60 min',
    price: 'From AED 580',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
  {
    id: '02',
    name: 'Holistic Massage',
    tagline: 'Deep Restoration',
    description:
      "From Swedish to deep tissue and Balinese rituals. Let our therapists melt away the tension of city life with techniques sourced from the world's most celebrated spas.",
    duration: 'From 60 min',
    price: 'From AED 450',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80',
  },
  {
    id: '03',
    name: 'Body Rituals',
    tagline: 'Total Renewal',
    description:
      'Exfoliating scrubs, mineral-rich wraps, and gold-infused body treatments. A full sensory journey that leaves skin luminous and the spirit recharged.',
    duration: 'From 90 min',
    price: 'From AED 680',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
  },
  {
    id: '04',
    name: 'Nail Atelier',
    tagline: 'Refined Elegance',
    description:
      'The finest manicure and pedicure experience in Dubai Marina. Gel, acrylic, nail art, and luxury pedicures performed with meticulous care and premium products.',
    duration: 'From 45 min',
    price: 'From AED 220',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  },
  {
    id: '05',
    name: 'Lash & Brow',
    tagline: 'Frame Your Beauty',
    description:
      'Lash lifts, tints, extensions, and precision brow design. Expert technicians reshape and define, creating effortless beauty that lasts weeks.',
    duration: 'From 45 min',
    price: 'From AED 280',
    image: 'https://images.unsplash.com/photo-1583001308071-63d66c99c38d?w=600&q=80',
  },
  {
    id: '06',
    name: 'Wellness Packages',
    tagline: 'Curated Escapes',
    description:
      'Half-day and full-day wellness journeys combining multiple treatments. Ideal as a personal retreat or a luxurious gift for someone special.',
    duration: '3h – Full Day',
    price: 'From AED 1,200',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Our Treatments</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F5F0E8] leading-tight">
              Treatments crafted<br />
              <span className="italic text-[#C9A96E]">for you, by masters</span>
            </h2>
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed max-w-sm">
              Each treatment is a conversation between our therapists and your wellbeing.
              No standard protocols — only bespoke care.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-[#0A0806] hover:bg-[#111009] transition-colors duration-500 p-8 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/60 to-transparent" />
                <span className="absolute top-4 right-4 font-serif text-4xl font-black text-[#C9A96E]/20 leading-none">
                  {service.id}
                </span>
              </div>

              <p className="text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mb-2">{service.tagline}</p>
              <h3 className="font-serif text-xl font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors duration-300 mb-3">
                {service.name}
              </h3>
              <p className="text-[#F5F0E8]/45 text-sm leading-relaxed flex-grow">{service.description}</p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-[#F5F0E8]/35 uppercase tracking-wider">{service.duration}</span>
                <span className="text-sm font-semibold text-[#C9A96E]">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-gold">
            View Full Menu
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
