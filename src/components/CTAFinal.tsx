import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone as SmartphoneIcon } from 'lucide-react';

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: '#0E1420' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,229,160,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
          >
            Tu grupo en el mapa.{' '}
            <span style={{ color: '#00E5A0' }}>Ya.</span>
          </h2>

          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: '#7A8CA8' }}>
            Disponible pronto para iOS y Android. Sin complicaciones,
            sin batería drenada, sin caos en el WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl border transition-all duration-200"
              style={{
                background: '#080C12',
                borderColor: 'rgba(255,255,255,0.12)',
                color: '#F0F4FF',
                fontFamily: 'DM Sans',
              }}
            >
              <SmartphoneIcon size={22} />
              <div className="text-left">
                <div className="text-xs" style={{ color: '#7A8CA8' }}>
                  Disponible en
                </div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
