import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const AuthLoading = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="bg-overlay">
        <div className="grid-bg animate-[grid-move_20s_linear_infinite]" />
        <div className="orb orb-1 opacity-10" />
        <div className="orb orb-2 opacity-10" />
      </div>

      <div className="relative">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border-4 border-dashed border-white/10 rounded-full absolute -top-12 -left-12"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 border border-white/5 rounded-full absolute -top-20 -left-20"
        />

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] shadow-[0_0_50px_rgba(255,0,122,0.3)] flex items-center justify-center mb-8">
            <ShieldCheck className="text-white animate-pulse" size={48} />
          </div>
          
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-bold font-heading tracking-widest uppercase">Verifying Session</h2>
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-[var(--accent-pink)]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-20 w-full max-w-xs px-6">
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent"
          />
        </div>
        <p className="text-[10px] text-[var(--text-secondary)] text-center mt-4 uppercase tracking-[0.3em] font-bold">Secure Protocol 2.4.0 active</p>
      </div>
    </div>
  );
};

export default AuthLoading;
