import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Layout, Palette, RefreshCw, 
  Settings, History, Activity, TrendingUp,
  BarChart3, UserCheck, ShieldAlert, Zap,
  Layers, Lock, Database, Briefcase
} from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Seats', value: '48 / 50', icon: Users, color: 'text-blue-500' },
    { label: 'Active Projects', value: '24', icon: Briefcase, color: 'text-[var(--accent-pink)]' },
    { label: 'Cloud Sync', value: 'Operational', icon: RefreshCw, color: 'text-emerald-500' },
    { label: 'Security Score', value: '98%', icon: Shield, color: 'text-amber-500' },
  ];

  const alerts = [
    { type: 'warning', msg: 'Unauthorized export attempt detected from IP: 192.168.1.4', time: '2m ago' },
    { type: 'info', msg: 'Global template "Construction_V2" updated by Sarah Chen', time: '1h ago' },
    { type: 'success', msg: 'Weekly security audit completed successfully', time: '4h ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Admin Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold font-heading mb-2">Admin Control Center</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em]">Enterprise Instance • Alpha-01</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <History size={16} /> Audit Trail
          </button>
          <button className="bg-[var(--accent-pink)] text-white font-bold px-8 py-3 rounded-xl text-xs shadow-[var(--glow-pink)] hover:scale-105 transition-all">
            System Snapshot
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[40px] translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">{stat.label}</span>
              <stat.icon size={16} className={stat.color} />
            </div>
            <span className="text-2xl font-bold font-heading">{stat.value}</span>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Analytics */}
        <div className="col-span-8 space-y-8">
          <GlassCard>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-bold font-heading flex items-center gap-2">
                <BarChart3 size={20} className="text-[var(--accent-pink)]" />
                Workspace Growth & Productivity
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white/5 rounded-lg text-[8px] font-bold uppercase tracking-widest">7 Days</button>
                <button className="px-3 py-1.5 hover:bg-white/5 rounded-lg text-[8px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">30 Days</button>
              </div>
            </div>
            <div className="h-64 flex items-end gap-3 px-4">
              {[45, 60, 30, 85, 40, 95, 70, 55, 80, 45, 65, 90].map((h, i) => (
                <div key={i} className="flex-grow flex flex-col gap-2 items-center">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                    className={`w-full rounded-t-lg transition-all ${i === 5 ? 'bg-gradient-to-t from-[var(--accent-pink)] to-[var(--accent-violet)] shadow-[var(--glow-pink)]' : 'bg-white/5'}`}
                  />
                  <span className="text-[8px] text-[var(--text-secondary)] font-bold">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-8">
            <GlassCard>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <ShieldAlert size={14} className="text-rose-500" /> Security Alerts
              </h4>
              <div className="space-y-4">
                {alerts.map((alert, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-4 items-start group hover:border-white/20 transition-all">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${alert.type === 'warning' ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]' : alert.type === 'info' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                    <div>
                      <p className="text-[11px] font-medium leading-relaxed">{alert.msg}</p>
                      <p className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <Activity size={14} className="text-emerald-500" /> Real-time Activity
              </h4>
              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
                {[
                  { user: 'Sarah Chen', action: 'added a new team member', time: '12m ago' },
                  { user: 'Marcus Lee', action: 'changed workspace logo', time: '45m ago' },
                  { user: 'Elena Vogel', action: 'exported Q3 financial report', time: '1h ago' },
                ].map((act, i) => (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[var(--bg-card)] border border-white/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[11px]"><span className="font-bold text-white">{act.user}</span> <span className="text-[var(--text-secondary)]">{act.action}</span></p>
                      <p className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="col-span-4 space-y-8">
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-8">System Health</h3>
            <div className="space-y-6">
              {[
                { label: 'Compute Engine', value: '94%', color: 'text-emerald-500' },
                { label: 'Database I/O', value: 'Stable', color: 'text-emerald-500' },
                { label: 'API Latency', value: '42ms', color: 'text-emerald-500' },
                { label: 'Backup Status', value: 'Running', color: 'text-amber-500' },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/80">{s.label}</span>
                  <span className={`text-xs font-bold ${s.color}`}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                />
              </div>
              <div className="flex justify-between mt-2 text-[8px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                <span>Memory usage</span>
                <span>92%</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="bg-gradient-to-br from-rose-500/10 to-violet-500/10 border-rose-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Threat Monitor</h4>
                <p className="text-[10px] text-rose-500/60 font-bold uppercase tracking-widest">Active Protection</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[var(--text-secondary)] uppercase tracking-widest">Blocked IPs</span>
                <span className="text-white">1,420</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[var(--text-secondary)] uppercase tracking-widest">DDoS Scrubbing</span>
                <span className="text-emerald-500">Active</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
