import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function Verify() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const email = params.get('email');
        const code = params.get('code');

        if (!email || !code) {
          window.location.href = '/';
          return;
        }

        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        
        const response = await fetch(`${apiUrl}/auth/verify-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, code }),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          const data = await response.json().catch(() => ({}));
          setStatus('error');
          setErrorMessage(data.message || 'El código expiró o es inválido.');
        }
      } catch (error) {
        setStatus('error');
        setErrorMessage('Ocurrió un error de red al intentar verificar la cuenta.');
      }
    };

    verifyAccount();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full rounded-3xl border p-8 sm:p-10 text-center"
        style={{ background: '#0E1420', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {status === 'loading' && (
          <div className="flex flex-col items-center">
            <Loader2 size={48} className="animate-spin mb-6" style={{ color: '#00E5A0' }} />
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne', color: '#F0F4FF' }}>
              Activando tu cuenta...
            </h2>
            <p style={{ color: '#7A8CA8' }}>
              Por favor espera un momento mientras validamos tu información.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(0,229,160,0.1)' }}>
              <CheckCircle2 size={32} style={{ color: '#00E5A0' }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne', color: '#F0F4FF' }}>
              ¡Cuenta activada!
            </h2>
            <p className="mb-8" style={{ color: '#7A8CA8' }}>
              Tu cuenta ha sido activada correctamente. Ya puedes abrir LookMap e iniciar sesión.
            </p>
            
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(255,94,94,0.1)' }}>
              <XCircle size={32} style={{ color: '#FF5E5E' }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne', color: '#F0F4FF' }}>
              Error de activación
            </h2>
            <p className="mb-8" style={{ color: '#7A8CA8' }}>
              {errorMessage}
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl text-sm font-semibold border inline-flex items-center justify-center"
              style={{ 
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#F0F4FF',
                background: 'rgba(255,255,255,0.04)',
                fontFamily: 'DM Sans' 
              }}
            >
              Volver al inicio
            </motion.a>
          </div>
        )}
      </motion.div>
    </section>
  );
}
