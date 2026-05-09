import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles, Layout, Zap, ArrowRight } from 'lucide-react';

const QuickActionWidget = ({ onCreateProject }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] rounded-[32px] p-8 text-white relative overflow-hidden group cursor-pointer"
      onClick={onCreateProject}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 blur-[60px] translate-y-1/2 -translate-x-1/2 rounded-full" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-4 max-w-[60%]">
          <h2 className="text-3xl font-bold font-heading tracking-tight">Architect your next workspace</h2>
          <p className="text-white/80 text-sm leading-relaxed">Use our AI-powered templates to generate custom Kanban workflows and project timelines in seconds.</p>
          <div className="pt-4">
            <button className="bg-white text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-2 group-hover:scale-105 transition-all shadow-2xl">
              <Plus size={20} />
              Start New Project
            </button>
          </div>
        </div>

        <div className="relative w-40 h-40 hidden md:flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
          />
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Layout size={40} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
        Quick Action <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

export default QuickActionWidget;
