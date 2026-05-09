import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldX, Lock, ArrowLeft, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthErrorPage = ({ type = 'denied' }) => {
  const navigate = useNavigate();
  
  const isForbidden = type === 'forbidden';
  
  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="bg-overlay">
        <div className="grid-bg animate-[grid-move_20s_linear_infinite]" />
        <div className={`orb orb-1 opacity-20 ${isForbidden ? 'bg-rose-600' : 'bg-amber-600'}`} />
        <div className="orb orb-2 opacity-20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg text-center relative z-10"
      >
        <div className="bg-[var(--bg-card)] backdrop-blur-3xl border border-[var(--glass-border)] rounded-[40px] p-12 shadow-2xl overflow-hidden relative">
          {/* Animated Background Pulse */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-20 rounded-full ${isForbidden ? 'bg-rose-500' : 'bg-amber-500'}`} />

          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative ${isForbidden ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}
          >
            {isForbidden ? <Lock size={48} /> : <ShieldX size={48} />}
          </motion.div>

          <h2 className="text-3xl font-bold font-heading mb-4 tracking-tight">
            {isForbidden ? "Forbidden Access" : "Access Denied"}
          </h2>
          <p className="text-[var(--text-secondary)] mb-10 text-lg leading-relaxed max-w-sm mx-auto">
            {isForbidden 
              ? "You've reached an administrative zone. This area is restricted to system administrators only."
              : "We couldn't verify your membership for this workspace. Please check your credentials or contact support."}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-2xl font-bold transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            <button className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 ${isForbidden ? 'bg-rose-500 text-white shadow-rose-500/20' : 'bg-amber-500 text-white shadow-amber-500/20'}`}>
              <Headphones size={18} />
              Support
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--text-secondary)]">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-widest">Security ID</p>
                <p className="text-xs font-mono text-white/40">ERR_AUTH_RESTR_403_X24</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthErrorPage;
