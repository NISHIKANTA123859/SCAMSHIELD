import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { MatrixBackground } from '@/app/components/MatrixBackground';

export function AnimatedIntro() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2800),
      setTimeout(() => navigate('/dashboard'), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      <MatrixBackground />

      <div className="relative z-10 text-center">
        {/* Shield Logo with Scan Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: step >= 0 ? 1 : 0,
            rotate: step >= 0 ? 0 : -180
          }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
          className="relative inline-block mb-12"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 w-32 h-32"
          >
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00d9ff] border-r-[#00ff41]" />
          </motion.div>

          {/* Shield icon with glow */}
          <div 
            className="relative w-32 h-32 flex items-center justify-center"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.6))'
            }}
          >
            <Shield className="w-20 h-20 text-[#00d9ff]" strokeWidth={1.5} />
            
            {/* Glitch effect overlay */}
            {step >= 1 && (
              <>
                <motion.div
                  animate={{
                    x: [0, -2, 2, -1, 1, 0],
                    opacity: [0, 1, 0, 1, 0]
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: 2,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Shield className="w-20 h-20 text-[#00ff41]" strokeWidth={1.5} />
                </motion.div>
              </>
            )}
          </div>

          {/* Scanning line effect */}
          {step >= 1 && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 50, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: 2,
                ease: 'linear'
              }}
              className="absolute left-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent -translate-x-1/2"
              style={{
                boxShadow: '0 0 10px rgba(0, 217, 255, 0.8)'
              }}
            />
          )}
        </motion.div>

        {/* Loading Text */}
        <div className="space-y-6 h-24">
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h2 className="text-2xl font-bold text-[#00d9ff] font-mono">
                Analyzing threats
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  ...
                </motion.span>
              </h2>
              
              {/* Progress bar */}
              <motion.div
                className="mt-4 h-1 bg-[#1a1f3a] rounded-full overflow-hidden mx-auto max-w-md"
              >
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#00d9ff] to-[#00ff41]"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)'
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#00ff41] font-mono">
                Protecting your identity
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  ...
                </motion.span>
              </h2>

              <motion.div
                className="mt-4 h-1 bg-[#1a1f3a] rounded-full overflow-hidden mx-auto max-w-md"
              >
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#00ff41] to-[#00d9ff]"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00d9ff] via-[#00ff41] to-[#00d9ff] bg-clip-text text-transparent">
                  Welcome to ScamShield
                </span>
              </h1>
            </motion.div>
          )}
        </div>

        {/* Digital grid effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff]/30 to-transparent"
              style={{ top: `${30 + i * 20}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
