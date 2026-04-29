import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer
        className="py-3 border-t"
        style={{ background: "#080C12", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-white/5">
              <img src="/IconLookMap.webp" alt="Logo" className="w-full h-full object-cover" />
            </div>

            <span className="text-sm ml-2" style={{ color: "#7A8CA8" }}>
              © 2026 LookMap.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {["Privacidad", "Términos y condiciones"].map((l) => (
              <a
                key={l}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (l === "Términos y condiciones") {
                    setShowTerms(true);
                  } else if (l === "Privacidad") {
                    setShowPrivacy(true);
                  }
                }}
                className="text-sm transition-colors duration-200"
                style={{ color: "#7A8CA8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F4FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8CA8")}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {/* Modal de Términos */}
      <AnimatePresence>
        {showTerms && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTerms(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border overflow-hidden shadow-2xl"
              style={{
                background: "#080C12",
                borderColor: "rgba(255,255,255,0.1)",
                color: "#F0F4FF",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Términos y condiciones
                </h3>
                <button
                  onClick={() => setShowTerms(false)}
                  className="p-2 rounded-lg transition-colors hover:bg-white/10"
                  style={{ color: "#7A8CA8" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div
                className="p-6 overflow-y-auto"
                style={{
                  color: "#A0B1C0",
                  fontFamily: "Inter",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                <h4
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Uso de Datos y Privacidad
                </h4>
                <p className="mb-4">
                  LookMap está diseñada para permitir a los usuarios compartir
                  su ubicación en tiempo real con personas de confianza, como
                  amigos, familiares o miembros de un grupo.
                </p>
                <p className="mb-6">
                  Al utilizar la aplicación, el usuario acepta que ciertos datos
                  serán recolectados, almacenados y utilizados con el único
                  propósito de brindar las funcionalidades principales del
                  servicio.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Datos que recopilamos
                </h4>
                <p className="mb-3">
                  La aplicación puede recopilar y procesar la siguiente
                  información:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Ubicación en tiempo real del dispositivo</li>
                  <li>Información de la batería del dispositivo</li>
                  <li>
                    Identificadores del usuario (como correo electrónico o ID de
                    usuario)
                  </li>
                  <li>Información básica del dispositivo</li>
                </ul>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Uso de la información
                </h4>
                <p className="mb-3">
                  Los datos recopilados se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>
                    Mostrar la ubicación en tiempo real dentro de los grupos a
                    los que pertenece el usuario
                  </li>
                  <li>
                    Permitir compartir información con amigos o familiares
                    autorizados
                  </li>
                  <li>
                    Brindar mayor seguridad en actividades como viajes, trabajo,
                    salidas o negocios
                  </li>
                  <li>
                    Mostrar el estado de la batería del dispositivo para ayudar
                    a otros usuarios a entender si una desconexión se debe a
                    falta de energía u otra situación
                  </li>
                </ul>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Almacenamiento y seguridad
                </h4>
                <p className="mb-4">
                  Toda la información recolectada es almacenada de forma segura.
                  No vendemos, compartimos ni distribuimos los datos personales
                  a terceros con fines comerciales.
                </p>
                <p className="mb-6">
                  El objetivo de LookMap es ofrecer una herramienta confiable
                  que permita a los usuarios mantenerse conectados con sus seres
                  cercanos, priorizando siempre la seguridad y privacidad.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Consentimiento del usuario
                </h4>
                <p className="mb-4">
                  Al utilizar la aplicación, el usuario acepta compartir su
                  información, incluyendo su ubicación, únicamente con los
                  miembros de los grupos en los que participe.
                </p>
                <p className="mb-6">
                  El usuario tiene el control total sobre con quién comparte su
                  información y puede abandonar grupos en cualquier momento.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Compromiso
                </h4>
                <p className="mb-2">
                  LookMap no busca recolectar datos innecesarios ni hacer un uso
                  indebido de la información. Nuestro compromiso es ofrecer un
                  servicio seguro, transparente y enfocado en el bienestar del
                  usuario.
                </p>
              </div>

              {/* Footer / Button */}
              <div
                className="p-6 border-t flex justify-end"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowTerms(false)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "#00E5A0",
                    color: "#080C12",
                    fontFamily: "Inter",
                  }}
                >
                  Entendido
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal de Privacidad */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border overflow-hidden shadow-2xl"
              style={{
                background: "#080C12",
                borderColor: "rgba(255,255,255,0.1)",
                color: "#F0F4FF",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Política de Privacidad
                </h3>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="p-2 rounded-lg transition-colors hover:bg-white/10"
                  style={{ color: "#7A8CA8" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div
                className="p-6 overflow-y-auto"
                style={{
                  color: "#A0B1C0",
                  fontFamily: "Inter",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                <p className="mb-6">
                  Esta política de privacidad aplica para la aplicación LookMap
                  (la "Aplicación"), desarrollada por BigNight (el "Proveedor
                  del Servicio"). La Aplicación es un servicio freemium enfocado
                  en compartir ubicación en tiempo real.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Información que recopilamos
                </h4>
                <p className="mb-3">
                  La Aplicación recopila la siguiente información:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Ubicación en tiempo real del dispositivo</li>
                  <li>Información del estado de la batería</li>
                  <li>Identificadores del usuario (correo electrónico o ID)</li>
                  <li>Información básica del dispositivo</li>
                </ul>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Uso de la información
                </h4>
                <p className="mb-3">
                  La información recopilada se utiliza exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>
                    Mostrar la ubicación en tiempo real dentro de los grupos
                  </li>
                  <li>
                    Permitir que los usuarios compartan su ubicación con amigos
                    o familiares
                  </li>
                  <li>
                    Brindar mayor seguridad en actividades como viajes, trabajo
                    o salidas
                  </li>
                  <li>
                    Mostrar el estado de la batería para ayudar a entender
                    desconexiones
                  </li>
                  <li>Mejorar el funcionamiento general de la Aplicación</li>
                </ul>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Compartición de datos
                </h4>
                <p className="mb-3">Los datos recopilados:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Se almacenan de forma segura</li>
                  <li>
                    Solo se comparten con los usuarios dentro de los grupos en
                    los que participas
                  </li>
                  <li>
                    No se venden ni se distribuyen a terceros con fines
                    comerciales
                  </li>
                </ul>
                <p className="mb-6">
                  El Proveedor del Servicio no comparte información personal con
                  empresas externas para publicidad o marketing.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Uso de la ubicación
                </h4>
                <p className="mb-4">
                  LookMap recopila y utiliza datos de ubicación en tiempo real
                  con el consentimiento del usuario. Esta información se
                  comparte únicamente con los miembros de los grupos en los que
                  el usuario participa.
                </p>
                <p className="mb-6">
                  El usuario tiene control total sobre con quién comparte su
                  ubicación y puede abandonar los grupos en cualquier momento.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Servicios de terceros
                </h4>
                <p className="mb-3">
                  La Aplicación puede utilizar servicios de terceros como:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Google Play Services</li>
                </ul>
                <p className="mb-6">
                  Estos servicios pueden recopilar cierta información de manera
                  automática según sus propias políticas de privacidad.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Retención de datos y Seguridad
                </h4>
                <p className="mb-6">
                  Los datos se conservarán mientras el usuario utilice la
                  Aplicación. El Proveedor del Servicio implementa medidas de
                  seguridad técnicas para proteger la información. El usuario
                  puede solicitar la eliminación de su información contactando
                  al correo:{" "}
                  <a
                    href="mailto:edu_armas11@hotmail.com"
                    className="text-white hover:underline"
                  >
                    edu_armas11@hotmail.com
                  </a>
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Privacidad de menores
                </h4>
                <p className="mb-6">
                  La Aplicación no está dirigida a menores de 13 años y no
                  recopila información de manera intencional de menores.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Cambios y Consentimiento
                </h4>
                <p className="mb-6">
                  Esta política puede actualizarse en cualquier momento. Al
                  utilizar la Aplicación, el usuario acepta la recopilación y
                  uso de su información conforme a esta política.
                </p>

                <h4
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Contacto
                </h4>
                <p className="mb-2">
                  Si tienes dudas sobre esta política, puedes escribir a:{" "}
                  <a
                    href="mailto:edu_armas11@hotmail.com"
                    className="text-white hover:underline"
                  >
                    edu_armas11@hotmail.com
                  </a>
                </p>
              </div>

              {/* Footer / Button */}
              <div
                className="p-6 border-t flex justify-end"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPrivacy(false)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "#00E5A0",
                    color: "#080C12",
                    fontFamily: "Inter",
                  }}
                >
                  Entendido
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
