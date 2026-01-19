import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Lock, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/app/components/ui/input-otp';
import { MatrixBackground } from '@/app/components/MatrixBackground';

export function Login() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Mock authentication - store in localStorage
      localStorage.setItem('scamshield_auth', 'true');
      localStorage.setItem('scamshield_phone', phoneNumber);
      navigate('/intro');
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <MatrixBackground />
      
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-[#0a0e27]/90 backdrop-blur-xl border border-[#00d9ff]/30 rounded-2xl p-8 shadow-2xl">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00d9ff]/20 to-[#00ff41]/20 border border-[#00d9ff]/50 mb-4 relative"
              style={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)'
              }}
            >
              <Shield className="w-10 h-10 text-[#00d9ff]" />
              <Lock className="absolute bottom-2 right-2 w-5 h-5 text-[#00ff41]" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] bg-clip-text text-transparent"
            >
              Welcome to ScamShield
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400"
            >
              Secure yourself from scams & fraud
            </motion.p>
          </div>

          {/* Phone Number Step */}
          {step === 'phone' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00d9ff]" />
                  Mobile Number
                </label>
                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full bg-[#1a1f3a]/50 border-[#00d9ff]/30 focus:border-[#00d9ff] text-white placeholder:text-gray-500 pl-4 h-12"
                    style={{
                      boxShadow: '0 0 15px rgba(0, 217, 255, 0.1)'
                    }}
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={phoneNumber.length !== 10}
                className="w-full h-12 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] text-[#0a0e27] font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send OTP
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Lock className="w-3 h-3" />
                <span>Your number is safe & encrypted</span>
              </div>
            </motion.div>
          )}

          {/* OTP Verification Step */}
          {step === 'otp' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-4">
                    Enter the 6-digit OTP sent to
                  </p>
                  <p className="text-[#00d9ff] font-mono">+91 {phoneNumber}</p>
                </div>

                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                  >
                    <InputOTPGroup>
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="w-12 h-12 border-[#00d9ff]/30 bg-[#1a1f3a]/50 text-white text-xl"
                          style={{
                            boxShadow: '0 0 10px rgba(0, 217, 255, 0.1)'
                          }}
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6}
                className="w-full h-12 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] text-[#0a0e27] font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify & Continue
              </Button>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-sm text-[#00d9ff] hover:text-[#00ff41] transition-colors"
              >
                Change number
              </button>
            </motion.div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#00d9ff]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00ff41]/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}
