import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Github, Chrome, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth flow
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs & Grid */}
      <div className="bg-overlay">
        <div className="grid-bg animate-[grid-move_20s_linear_infinite]" />
        <div className="orb orb-1 opacity-20" />
        <div className="orb orb-2 opacity-20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[var(--bg-card)] backdrop-blur-2xl border border-[var(--glass-border)] rounded-3xl p-10 shadow-2xl relative">
          {/* Logo Area */}
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] shadow-[0_0_30px_rgba(255,0,122,0.4)] flex items-center justify-center mb-4"
            >
              <ShieldCheck className="text-white" size={32} />
            </motion.div>
            <h1 className="text-2xl font-bold font-heading tracking-tight">Nichekala Auth</h1>
            <p className="text-[var(--text-secondary)] text-sm mt-2">Secure Enterprise Workspace</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-[var(--accent-pink)] transition-colors" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-[var(--border-color)] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[var(--accent-pink)] focus:ring-1 focus:ring-[var(--accent-pink)] transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs text-[var(--accent-pink)] hover:underline font-semibold">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-[var(--accent-pink)] transition-colors" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-[var(--border-color)] rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:border-[var(--accent-pink)] focus:ring-1 focus:ring-[var(--accent-pink)] transition-all text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded bg-white/5 border-[var(--border-color)] accent-[var(--accent-pink)]" />
              <label htmlFor="remember" className="text-xs text-[var(--text-secondary)] font-medium">Keep me logged in for 30 days</label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-violet)] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-5px_rgba(255,0,122,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(255,0,122,0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter Workspace
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-color)]"></div>
              </div>
              <span className="relative bg-[#161616] px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white/5 border border-[var(--border-color)] hover:bg-white/10 hover:border-white/20 py-3 rounded-xl transition-all">
                <Chrome size={18} />
                <span className="text-xs font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/5 border border-[var(--border-color)] hover:bg-white/10 hover:border-white/20 py-3 rounded-xl transition-all">
                <Github size={18} />
                <span className="text-xs font-semibold">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-[var(--text-secondary)]">
          Don't have access? <a href="#" className="text-white font-bold hover:text-[var(--accent-pink)] transition-colors">Contact Administrator</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
