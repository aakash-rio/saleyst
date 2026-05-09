import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Users, Clock, 
  CheckCircle2, AlertCircle, Calendar, 
  ArrowUpRight, ArrowDownRight, Target
} from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const BoardAnalytics = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Board Intelligence</h3>
        <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-white transition-all text-xs font-bold uppercase tracking-widest">Close</button>
      </div>

      <div className="space-y-4">
        {/* Core Stats */}
        <div className="grid grid-cols-2 gap-4">
          <GlassCard className="!p-4">
            <p className="text-[8px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Velocity</p>
            <div className="flex justify-between items-end">
              <span className="text-xl font-bold font-heading">14.2</span>
              <span className="text-[8px] text-emerald-500 font-bold flex items-center gap-0.5"><ArrowUpRight size={8} /> 12%</span>
            </div>
          </GlassCard>
          <GlassCard className="!p-4">
            <p className="text-[8px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Health</p>
            <div className="flex justify-between items-end">
              <span className="text-xl font-bold font-heading">98%</span>
              <span className="text-[8px] text-emerald-500 font-bold flex items-center gap-0.5"><ArrowUpRight size={8} /> 2%</span>
            </div>
          </GlassCard>
        </div>

        {/* Throughput Graph Mockup */}
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Weekly Throughput</p>
            <BarChart3 size={14} className="text-[var(--accent-pink)]" />
          </div>
          <div className="h-32 flex items-end gap-2">
            {[40, 65, 30, 85, 50, 75, 60].map((h, i) => (
              <div key={i} className="flex-grow flex flex-col items-center gap-2">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className={`w-full rounded-t-md transition-all ${i === 3 ? 'bg-[var(--accent-pink)] shadow-[var(--glow-pink)]' : 'bg-white/10'}`}
                />
                <span className="text-[8px] text-[var(--text-secondary)] font-bold">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Bottleneck Analysis */}
        <GlassCard>
          <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-6">Workflow Bottlenecks</p>
          <div className="space-y-4">
            {[
              { label: 'Review Stage', time: '4.2 Days', color: 'text-amber-500' },
              { label: 'Client Feedback', time: '2.1 Days', color: 'text-rose-500' },
              { label: 'Structural Review', time: '1.5 Days', color: 'text-violet-500' },
            ].map((b, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${b.color.replace('text-', 'bg-')}`} />
                  <span className="text-[10px] font-bold text-white/80">{b.label}</span>
                </div>
                <span className={`text-[10px] font-bold ${b.color}`}>{b.time}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Team Performance */}
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Leaderboard</p>
            <Target size={14} className="text-emerald-500" />
          </div>
          <div className="space-y-4">
            {[
              { name: 'Sarah Chen', tasks: 14, efficiency: '98%' },
              { name: 'Marcus Lee', tasks: 12, efficiency: '94%' },
              { name: 'Elena Vogel', tasks: 10, efficiency: '91%' },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`https://ui-avatars.com/api/?name=${p.name}&background=333&color=fff`} className="w-8 h-8 rounded-lg" />
                  <div>
                    <p className="text-[10px] font-bold text-white">{p.name}</p>
                    <p className="text-[8px] text-[var(--text-secondary)] uppercase">{p.tasks} Tasks Closed</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-500">{p.efficiency}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <button className="w-full mt-auto py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--accent-pink)] hover:text-white transition-all group">
        Download Full Audit <ArrowRight size={14} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

// Mock Icons
const ArrowRight = (props) => <CheckCircle2 {...props} />;

export default BoardAnalytics;
