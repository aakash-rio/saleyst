import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, UserCheck, Activity, TrendingUp, ArrowUpRight, BarChart3 } from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const TeamAnalytics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-heading mb-2">Team Insights</h2>
        <p className="text-[var(--text-secondary)]">Deep dive into your workspace productivity and composition</p>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Growth', value: '+24%', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'Retention', value: '98.2%', icon: Activity, color: 'text-violet-500' },
          { label: 'Activity Rate', value: '86%', icon: Users, color: 'text-[var(--accent-pink)]' },
          { label: 'Productivity', value: 'High', icon: BarChart3, color: 'text-blue-500' },
        ].map((stat, i) => (
          <GlassCard key={i} className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon size={48} className={stat.color} />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-2">{stat.label}</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold font-heading">{stat.value}</span>
                <div className={`flex items-center text-[10px] font-bold ${stat.color} mb-1.5`}>
                  <ArrowUpRight size={12} />
                  3.2%
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Workspace Composition */}
        <GlassCard className="col-span-8">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-lg font-bold font-heading">Composition Over Time</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-rose-500" /> Admin
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-violet-500" /> Manager
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Staff
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3 px-4">
            {[40, 55, 30, 80, 65, 45, 90, 70, 50, 85, 60, 75].map((h, i) => (
              <div key={i} className="flex-grow flex flex-col-reverse h-full group">
                <div className="h-full w-full bg-white/5 rounded-lg overflow-hidden flex flex-col-reverse">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 0.6}%` }}
                    className="bg-blue-500/40 w-full"
                  />
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 0.3}%` }}
                    className="bg-violet-500/60 w-full"
                  />
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 0.1}%` }}
                    className="bg-rose-500 w-full"
                  />
                </div>
                <span className="text-[8px] text-[var(--text-secondary)] font-bold uppercase tracking-tighter mt-3 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                  M{i+1}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Role Distribution Ring (Mockup) */}
        <GlassCard className="col-span-4 flex flex-col">
          <h3 className="text-lg font-bold font-heading mb-8 text-center">Role Distribution</h3>
          <div className="flex-grow flex items-center justify-center relative">
            {/* SVG Ring Simulation */}
            <div className="w-48 h-48 rounded-full border-[16px] border-white/5 relative flex items-center justify-center">
              <div className="absolute inset-[-16px] rounded-full border-[16px] border-rose-500 border-t-transparent border-l-transparent rotate-[30deg]" />
              <div className="absolute inset-[-16px] rounded-full border-[16px] border-violet-500 border-b-transparent border-r-transparent rotate-[-45deg]" />
              <div className="text-center">
                <p className="text-2xl font-bold font-heading leading-none">24</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest mt-1">Users</p>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {[
              { label: 'Admins', count: 2, color: 'bg-rose-500' },
              { label: 'Managers', count: 5, color: 'bg-violet-500' },
              { label: 'Staff', count: 17, color: 'bg-blue-500' },
            ].map((role, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${role.color}`} />
                  <span className="font-medium text-[var(--text-secondary)]">{role.label}</span>
                </div>
                <span className="font-bold">{role.count}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Activity Heatmap Mockup */}
      <GlassCard>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold font-heading">Workspace Activity Heatmap</h3>
          <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">Last 30 Days</p>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div 
              key={i} 
              className="h-10 rounded-md border border-white/5 transition-all cursor-pointer hover:scale-105"
              style={{ 
                backgroundColor: `rgba(255, 0, 122, ${Math.random() * 0.4})`,
                borderColor: Math.random() > 0.8 ? 'rgba(255, 0, 122, 0.4)' : 'transparent'
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-6 px-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <span key={day} className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">{day}</span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default TeamAnalytics;
