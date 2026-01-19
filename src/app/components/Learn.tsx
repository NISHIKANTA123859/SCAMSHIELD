import { motion } from 'motion/react';
import { Shield, AlertTriangle, Eye, Lock, Smartphone, Mail, Link as LinkIcon, MessageSquare } from 'lucide-react';

export function Learn() {
  const scamTypes = [
    {
      icon: Mail,
      title: 'Phishing Emails',
      description: 'Fraudulent emails pretending to be from legitimate companies to steal personal information.',
      warning: 'Never click suspicious links or provide personal info via email.',
      color: '#ff3b3b',
    },
    {
      icon: MessageSquare,
      title: 'SMS Scams',
      description: 'Text messages claiming urgent issues with your bank, delivery, or account requiring immediate action.',
      warning: 'Verify directly with the company through official channels.',
      color: '#ffd93d',
    },
    {
      icon: LinkIcon,
      title: 'Malicious Links',
      description: 'URLs that lead to fake websites designed to steal credentials or install malware.',
      warning: 'Check URLs carefully and use ScamShield to verify before clicking.',
      color: '#00d9ff',
    },
    {
      icon: Smartphone,
      title: 'Phone Scams',
      description: 'Calls impersonating government agencies, tech support, or banks requesting money or information.',
      warning: 'Government agencies never ask for payment over the phone.',
      color: '#00ff41',
    },
  ];

  const protectionTips = [
    {
      icon: Eye,
      title: 'Verify Before You Trust',
      tips: [
        'Check sender email addresses for slight misspellings',
        'Look for generic greetings like "Dear Customer"',
        'Verify unexpected requests through official channels',
        'Be wary of urgent or threatening language',
      ],
    },
    {
      icon: Lock,
      title: 'Protect Your Information',
      tips: [
        'Never share passwords, OTPs, or CVV codes',
        'Use strong, unique passwords for each account',
        'Enable two-factor authentication everywhere',
        'Regularly monitor your accounts for suspicious activity',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Red Flags to Watch For',
      tips: [
        'Too good to be true offers or prizes',
        'Requests for immediate action or payment',
        'Poor grammar or spelling errors',
        'Suspicious URLs or sender addresses',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Learn to <span className="text-[#00d9ff]">Protect</span> Yourself
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay informed about common scams and learn how to identify and avoid them
            </p>
          </div>

          {/* Common Scam Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-[#ff3b3b]" />
              Common Scam Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scamTypes.map((scam, index) => {
                const Icon = scam.icon;
                return (
                  <motion.div
                    key={scam.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-[#1a1f3a]/50 border border-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
                  >
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{ 
                        backgroundColor: `${scam.color}20`, 
                        border: `1px solid ${scam.color}40`,
                        boxShadow: `0 0 20px ${scam.color}30`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: scam.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{scam.title}</h3>
                    <p className="text-gray-400 mb-4">{scam.description}</p>
                    <div 
                      className="p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: `${scam.color}10`,
                        borderColor: `${scam.color}40`
                      }}
                    >
                      <p className="text-sm font-semibold" style={{ color: scam.color }}>
                        ⚠️ {scam.warning}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Protection Tips */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#00ff41]" />
              How to Stay Protected
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {protectionTips.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-[#1a1f3a]/50 border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-all"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#00ff41]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3 text-gray-400">
                          <span className="text-[#00ff41] mt-1">✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#00d9ff]/10 to-[#00ff41]/10 border border-[#00d9ff]/30"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Think You've Received a Scam?
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Use our AI-powered tools to analyze suspicious messages and links instantly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/message-analyzer"
                  className="px-8 py-3 bg-gradient-to-r from-[#00d9ff] to-[#00a3cc] text-[#0a0e27] rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                >
                  Analyze Message
                </a>
                <a
                  href="/link-checker"
                  className="px-8 py-3 bg-gradient-to-r from-[#00ff41] to-[#00cc34] text-[#0a0e27] rounded-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                >
                  Check Link
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
