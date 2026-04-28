import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, MapPin, Battery } from 'lucide-react';

const problems = [
  {
    icon: MessageCircle,
    iconColor: '#FF5E5E',
    iconBg: 'rgba(255,94,94,0.1)',
    title: 'WhatsApp caótico',
    desc: '40 mensajes de ¿dónde estás? antes de que alguien responda con una ubicación desactualizada.',
  },
  {
    icon: MapPin,
    iconColor: '#3D9BFF',
    iconBg: 'rgba(61,155,255,0.1)',
    title: 'Sin punto de encuentro',
    desc: 'Cada uno llega por su ruta y nadie sabe exactamente dónde está el resto del grupo.',
  },
  {
    icon: Battery,
    iconColor: '#00E5A0',
    iconBg: 'rgba(0,229,160,0.1)',
    title: 'Apps que matan la batería',
    desc: 'Tracking continuo sin ninguna optimización. Tu teléfono muere justo cuando más lo necesitas.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#0E1420' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, letterSpacing: '-0.02em', color: '#F0F4FF' }}
          >
            Coordinar con tu grupo no debería{' '}
            <br className="hidden sm:block" />
            ser una guerra
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl p-7 border relative overflow-hidden group"
              style={{
                background: '#080C12',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Hover top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.iconColor }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: p.iconBg }}
              >
                <p.icon size={22} style={{ color: p.iconColor }} />
              </div>

              <h3
                className="text-lg mb-3 tracking-tight"
                style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, letterSpacing: '-0.01em', color: '#F0F4FF' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7A8CA8' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
