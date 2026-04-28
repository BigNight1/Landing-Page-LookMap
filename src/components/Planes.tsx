import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    per: '/mes',
    desc: 'Para empezar a coordinar sin costo.',
    features: ['2 grupos activos', 'Hasta 3 miembros', 'Actualizaciones estándar', 'Chat integrado'],
  },
  {
    name: 'Basic',
    price: '$3',
    per: '/mes',
    desc: 'Para empezar a coordinar con tu equipo.',
    features: ['2 grupos activos', 'Hasta 3 miembros', 'Actualizaciones cada 20–30s', 'Soporte estándar'],
  },
  {
    name: 'Pro',
    price: '$5',
    per: '/mes',
    desc: 'El plan ideal para grupos activos.',
    features: ['Hasta 6 miembros por grupo', 'Modo seguimiento activo', 'Colores personalizados', 'Destinos ilimitados'],
    featured: true,
    badge: 'Más popular',
  },
  {
    name: 'VIP',
    price: '$7',
    per: '/mes',
    desc: 'Para grupos grandes y eventos.',
    features: ['Grupos de 10+ miembros', 'Soporte prioritario', 'Estadísticas de grupo', 'Todo lo de Pro'],
  },
];

export default function Planes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="planes"
      className="py-24 lg:py-32"
      style={{ background: '#080C12' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-block">Precios</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
          >
            Empieza gratis. Escala con tu grupo.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: plan.featured
                  ? '0 0 0 1px #00E5A0, 0 24px 48px rgba(0,229,160,0.12)'
                  : '0 0 0 1px rgba(255,255,255,0.12), 0 24px 48px rgba(0,0,0,0.4)',
              }}
              className="rounded-2xl border p-7 flex flex-col relative transition-all duration-300 cursor-pointer"
              style={{
                background: plan.featured ? 'rgba(0,229,160,0.04)' : '#0E1420',
                borderColor: plan.featured ? '#00E5A0' : 'rgba(255,255,255,0.07)',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
                  style={{ background: '#00E5A0', color: '#080C12', fontFamily: 'DM Sans' }}
                >
                  <Zap size={10} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: plan.featured ? '#00E5A0' : '#7A8CA8', fontFamily: 'Syne' }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ fontFamily: 'Syne', color: '#F0F4FF' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: '#7A8CA8' }}>
                    {plan.per}
                  </span>
                </div>
                <p className="text-sm leading-snug" style={{ color: '#7A8CA8' }}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{
                        background: plan.featured
                          ? 'rgba(0,229,160,0.15)'
                          : 'rgba(255,255,255,0.07)',
                      }}
                    >
                      <Check
                        size={9}
                        style={{ color: plan.featured ? '#00E5A0' : '#7A8CA8' }}
                      />
                    </div>
                    <span className="text-sm" style={{ color: '#F0F4FF' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  plan.featured
                    ? { background: '#00E5A0', color: '#080C12', fontFamily: 'DM Sans' }
                    : {
                        background: 'rgba(255,255,255,0.06)',
                        color: '#F0F4FF',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'DM Sans',
                      }
                }
              >
                {plan.price === '$0' ? 'Empezar gratis' : 'Elegir plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Extra Group Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne', color: '#F0F4FF' }}>
              ¿Necesitas más grupos?
            </h3>
            <p className="text-sm max-w-xl leading-relaxed" style={{ color: '#7A8CA8' }}>
              Te brindamos 2 grupos gratis en tu cuenta. Si requieres más capacidad sin cambiar de plan, puedes agregar un grupo adicional por solo <strong style={{ color: '#00E5A0', fontWeight: 600 }}>$2 /mes</strong>.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#F0F4FF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'DM Sans',
            }}
          >
            Agregar grupo extra
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
