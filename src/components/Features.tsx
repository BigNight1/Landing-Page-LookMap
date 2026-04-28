import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, MessageSquare, Palette, Check } from 'lucide-react';

const checks = [
  'Invitación con un toque',
  'Ruta automática al aceptar',
  'Posición de todos en el trayecto',
];

function CardLarge({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-2 rounded-2xl border overflow-hidden group relative"
      style={{
        background: '#0E1420',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      {/* Hover top green line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: '#00E5A0' }}
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Text */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold mb-6 px-3 py-1.5 rounded-full w-fit"
            style={{
              background: 'rgba(0,229,160,0.08)',
              border: '1px solid rgba(0,229,160,0.2)',
              color: '#00E5A0',
            }}
          >
            <Star size={12} />
            Feature estrella
          </span>
          <h3
            className="text-2xl lg:text-3xl tracking-tight mb-4"
            style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
          >
            Marca un destino. Todos llegan.
          </h3>
          <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A8CA8' }}>
            Define el punto de encuentro desde el mapa y tu grupo recibe la
            invitación al instante. Sin copiar coordenadas ni explicar rutas.
          </p>
          <ul className="flex flex-col gap-3">
            {checks.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,229,160,0.12)' }}
                >
                  <Check size={11} style={{ color: '#00E5A0' }} />
                </div>
                <span className="text-sm font-medium" style={{ color: '#F0F4FF' }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 p-6 flex items-center justify-center min-h-64">
          <div
            className="img-placeholder w-full"
            style={{ aspectRatio: '16/9', maxWidth: 360 }}
          >
            [ Destination feature screenshot ]
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({
  inView,
  delay,
  icon: Icon,
  iconColor,
  iconBg,
  tag,
  title,
  placeholder,
}: {
  inView: boolean;
  delay: number;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  tag: string;
  title: string;
  placeholder: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border overflow-hidden group relative flex flex-col"
      style={{
        background: '#0E1420',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: '#00E5A0' }}
      />

      <div className="p-7 flex flex-col gap-5 flex-1">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
          style={{
            background: iconBg,
            border: `1px solid ${iconColor}33`,
            color: iconColor,
          }}
        >
          <Icon size={12} />
          {tag}
        </span>

        <h3
          className="text-xl tracking-tight"
          style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
        >
          {title}
        </h3>

        <div className="img-placeholder flex-1" style={{ aspectRatio: '1/1', minHeight: 180 }}>
          {placeholder}
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="features" className="py-24 lg:py-32" style={{ background: '#080C12' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="section-label mb-5 block w-fit">Funcionalidades</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'Syne', fontWeight: 800, color: '#F0F4FF' }}
          >
            Todo lo que tu grupo necesita
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardLarge inView={inView} />

          <SmallCard
            inView={inView}
            delay={0.15}
            icon={MessageSquare}
            iconColor="#3D9BFF"
            iconBg="rgba(61,155,255,0.1)"
            tag="Chat integrado"
            title="Coordina sin salir del mapa"
            placeholder="[ Group chat UI ]"
          />

          <SmallCard
            inView={inView}
            delay={0.25}
            icon={Palette}
            iconColor="#00E5A0"
            iconBg="rgba(0,229,160,0.1)"
            tag="Tu color en el mapa"
            title="Elige tu color. Todos te identifican."
            placeholder="[ Color picker UI ]"
          />
        </div>
      </div>
    </section>
  );
}
