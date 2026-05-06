import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TerminosCondiciones() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl rounded-3xl border p-8 sm:p-12 shadow-2xl"
        style={{ 
          background: '#0E1420', 
          borderColor: 'rgba(255,255,255,0.07)',
          color: '#F0F4FF'
        }}
      >
        <div className="mb-8 border-b pb-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Términos y condiciones
          </h1>
        </div>
        
        <div 
          style={{ 
            color: '#A0B1C0', 
            fontFamily: 'Inter', 
            fontSize: '1rem', 
            lineHeight: '1.7' 
          }}
        >
          <h2 className="text-xl font-semibold text-white mb-4 mt-8 first:mt-0" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Uso de Datos y Privacidad
          </h2>
          <p className="mb-4">
            LookMap está diseñada para permitir a los usuarios compartir su ubicación en tiempo real con personas de confianza, como amigos, familiares o miembros de un grupo.
          </p>
          <p className="mb-6">
            Al utilizar la aplicación, el usuario acepta que ciertos datos serán recolectados, almacenados y utilizados con el único propósito de brindar las funcionalidades principales del servicio.
          </p>

          <h2 className="text-xl font-semibold text-white mb-4 mt-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Datos que recopilamos
          </h2>
          <p className="mb-4">
            La aplicación puede recopilar y procesar la siguiente información:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ubicación en tiempo real del dispositivo</li>
            <li>Información de la batería del dispositivo</li>
            <li>Identificadores del usuario (como correo electrónico o ID de usuario)</li>
            <li>Información básica del dispositivo</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mb-4 mt-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Uso de la información
          </h2>
          <p className="mb-4">
            Los datos recopilados se utilizan exclusivamente para:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Mostrar la ubicación en tiempo real dentro de los grupos a los que pertenece el usuario</li>
            <li>Permitir compartir información con amigos o familiares autorizados</li>
            <li>Brindar mayor seguridad en actividades como viajes, trabajo, salidas o negocios</li>
            <li>Mostrar el estado de la batería del dispositivo para ayudar a otros usuarios a entender si una desconexión se debe a falta de energía u otra situación</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mb-4 mt-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Almacenamiento y seguridad
          </h2>
          <p className="mb-4">
            Toda la información recolectada es almacenada de forma segura. No vendemos, compartimos ni distribuimos los datos personales a terceros con fines comerciales.
          </p>
          <p className="mb-6">
            El objetivo de LookMap es ofrecer una herramienta confiable que permita a los usuarios mantenerse conectados con sus seres cercanos, priorizando siempre la seguridad y privacidad.
          </p>

          <h2 className="text-xl font-semibold text-white mb-4 mt-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Consentimiento del usuario
          </h2>
          <p className="mb-4">
            Al utilizar la aplicación, el usuario acepta compartir su información, incluyendo su ubicación, únicamente con los miembros de los grupos en los que participe.
          </p>
          <p className="mb-6">
            El usuario tiene el control total sobre con quién comparte su información y puede abandonar grupos en cualquier momento.
          </p>

          <h2 className="text-xl font-semibold text-white mb-4 mt-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Compromiso
          </h2>
          <p className="mb-6">
            LookMap no busca recolectar datos innecesarios ni hacer un uso indebido de la información. Nuestro compromiso es ofrecer un servicio seguro, transparente y enfocado en el bienestar del usuario.
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t flex justify-end" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              to="/"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all inline-block"
              style={{ 
                background: '#00E5A0', 
                color: '#080C12', 
                fontFamily: 'Inter' 
              }}
            >
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
