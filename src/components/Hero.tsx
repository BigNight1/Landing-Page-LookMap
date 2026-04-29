import { motion, Variants } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: "10–15s", label: "actualización" },
  { value: "6 miembros", label: "en plan Pro" },
  { value: "100%", label: "batería optimizada" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,229,160,0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(61,155,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left col */}
          <div className="flex-1 max-w-xl">
            {/* H1 */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6"
              style={{
                fontFamily: "Plus Jakarta Sans",
                letterSpacing: "-0.04em",
                color: "#F0F4FF",
              }}
            >
              Ubica, coordina y llega.{" "}
              <span style={{ color: "#00E5A0" }}>Todo en un solo mapa</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "#7A8CA8" }}
            >
              Comparte ubicación, marca destinos, invita a tu grupo y todos
              llegan al mismo punto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#planes"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "#00E5A0",
                  color: "#080C12",
                  fontFamily: "Inter",
                }}
              >
                <ArrowDown size={16} />
                Descargar gratis
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "#F0F4FF",
                  background: "rgba(255,255,255,0.04)",
                  fontFamily: "Inter",
                }}
              >
                <Play size={14} />
                Ver demo
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-6"
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#00E5A0", fontFamily: "Syne" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs mt-0.5" style={{ color: "#7A8CA8" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right col — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto relative"
          >
            {/* Subtle glow effect behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-[#00E5A0] opacity-20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-[320px] sm:w-[380px] lg:w-[440px] xl:w-[480px] z-10 flex items-center justify-center">
              <img
                src="/Hero.webp"
                alt="LookMap App Interface"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,229,160,0.15))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
