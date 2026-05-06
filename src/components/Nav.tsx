import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Funciones", href: "/#features" },
    { label: "Tiempo real", href: "/#realtime" },
    { label: "Precios", href: "/#planes" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${scrolled ? 'border-b' : 'border-b-0'}`}
      style={{
        backgroundColor: scrolled ? "rgba(8,12,18,0.85)" : "rgba(255,255,255,0.04)",
        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-300 group-hover:border-[#00E5A0]/40">
            <img src="/IconLookMap.webp" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#F0F4FF]" style={{ fontFamily: "Plus Jakarta Sans" }}>
            LookMap
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "Inter", color: "#7A8CA8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F4FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8CA8")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/#planes"
              className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "#00E5A0",
                color: "#080C12",
                fontFamily: "Inter",
              }}
            >
              Descargar gratis
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#7A8CA8" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
            style={{
              backgroundColor: "rgba(8,12,18,0.97)",
              borderColor: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium py-1"
                style={{ fontFamily: "Inter", color: "#7A8CA8" }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#planes"
              className="mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-center block"
              style={{ background: "#00E5A0", color: "#080C12" }}
              onClick={() => setMobileOpen(false)}
            >
              Descargar gratis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
