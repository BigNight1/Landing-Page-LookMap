import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Navigation } from 'lucide-react';

export default function RealTime() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const modes = [
    {
      dot: '#00E5A0',
      dotBg: 'rgba(0,229,160,0.12)',
      icon: Navigation,
      label: 'Modo normal',
      detail: 'Cada 20–30s · Ahorro de batería',
      desc: 'Actualización inteligente cuando estás en espera o cerca de tu destino.',
    },
    {
      dot: '#FF5E5E',
      dotBg: 'rgba(255,94,94,0.12)',
      icon: Zap,
      label: 'Modo seguimiento activo',
      detail: 'Cada 5–10s · Alta precisión',
      desc: 'Se activa automáticamente al ir a un destino. Precisión máxima cuando importa.',
    },
  ];

  return (
    <section
      ref={ref}
      id="realtime"
      className="py-24 lg:py-32"
      style={{ background: '#0E1420' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="section-label mb-6 block w-fit">
              Tiempo real inteligente
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
            >
              Rápido cuando importa.
              <br />
              Eficiente siempre.
            </h2>

            <p className="text-base leading-relaxed mb-10" style={{ color: '#7A8CA8' }}>
              LookMap no envía ubicación constantemente. Usa un sistema
              inteligente que detecta cuándo realmente necesitas actualizar y
              cuándo puedes ahorrar batería.
            </p>

            {/* Highlight box */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: 'rgba(0,229,160,0.04)',
                borderColor: 'rgba(0,229,160,0.15)',
              }}
            >
              <div
                className="text-xs font-semibold mb-3 uppercase tracking-widest"
                style={{ color: '#00E5A0' }}
              >
                Lógica inteligente
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#F0F4FF' }}>
                La ubicación se envía si el usuario se movió más de{' '}
                <span style={{ color: '#00E5A0', fontWeight: 600 }}>10 metros</span>{' '}
                o pasaron{' '}
                <span style={{ color: '#00E5A0', fontWeight: 600 }}>30 segundos</span>{' '}
                desde el último envío.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full flex flex-col gap-4"
          >
            {modes.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl p-6 border flex gap-5"
                style={{
                  background: '#080C12',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: m.dotBg }}
                >
                  <m.icon size={20} style={{ color: m.dot }} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="text-base font-bold"
                      style={{ fontFamily: 'Syne', color: '#F0F4FF' }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: m.dotBg,
                        color: m.dot,
                        border: `1px solid ${m.dot}33`,
                      }}
                    >
                      {m.detail}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A8CA8' }}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
