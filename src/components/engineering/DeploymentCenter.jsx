import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Server, Globe, Cpu, Database, 
  Cloud, RefreshCw, Activity, Terminal,
  CheckCircle2, AlertCircle, ShieldCheck,
  Zap, ArrowRight, ExternalLink, Box,
  GitBranch, Link, Settings, CheckSquare
} from 'lucide-react';

const SolidCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white border border-gray-200 rounded-3xl p-6 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

const DeploymentCenter = () => {
  const [activeTab, setActiveTab] = useState('checklist');

  const deploymentChecklist = [
    { id: 1, category: 'Database', task: 'Create production Supabase project.', status: 'Completed' },
    { id: 2, category: 'Infrastructure', task: 'Set environment variables in Vercel.', status: 'Completed' },
    { id: 3, category: 'Authentication', task: 'Configure Supabase Auth URLs.', status: 'Completed' },
    { id: 4, category: 'Infrastructure', task: 'Add production domain.', status: 'Completed' },
    { id: 5, category: 'Testing', task: 'Test login, project creation, task movement and export.', status: 'Completed' },
    { id: 6, category: 'Security', task: 'Create admin user.', status: 'Completed' },
    { id: 7, category: 'Security', task: 'Share credentials securely.', status: 'Pending' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Pending': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Infrastructure Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Deployment Control Center</h2>
          <p className="text-sm text-gray-500">Manage launch checklists, infrastructure config, and environment tracking</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-1.5 flex gap-1 shadow-sm">
            {['checklist', 'infrastructure'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-xl shadow-sm hover:bg-emerald-700 transition-all flex items-center gap-2 group text-sm">
            <Rocket size={16} className="group-hover:-translate-y-1 transition-transform" /> 
            Deploy Production
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'checklist' && (
          <motion.div key="checklist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <SolidCard>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CheckSquare size={20} className="text-blue-500" />
                    Launch Protocol Checklist
                  </h3>
                  <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">6 of 7 Completed</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {deploymentChecklist.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-emerald-200 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shadow-sm ${item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-white border-gray-200 text-gray-400'}`}>
                          {item.status === 'Completed' ? <CheckCircle2 size={16} /> : <Box size={16} />}
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${item.status === 'Completed' ? 'text-gray-900' : 'text-gray-700'}`}>{item.task}</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-0.5">{item.category}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${getStatusColor(item.status)}`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </SolidCard>
            </div>

            <div className="col-span-4 space-y-6">
              <SolidCard className="bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-6 flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" /> Environment Targets
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <div>
                      <p className="text-sm font-bold text-gray-900">nichekala.app</p>
                      <p className="text-[9px] text-emerald-600 uppercase font-bold tracking-wider">Production</p>
                    </div>
                    <ShieldCheck className="text-emerald-500" size={20} />
                  </div>
                  <div className="flex justify-between items-center bg-white/60 p-3 rounded-lg border border-gray-200 border-dashed">
                    <div>
                      <p className="text-sm font-bold text-gray-600">dev.nichekala.app</p>
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Staging</p>
                    </div>
                    <AlertCircle className="text-gray-400" size={20} />
                  </div>
                </div>
              </SolidCard>

              <SolidCard>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                  <Activity size={16} className="text-emerald-500" /> Pipeline Status
                </h4>
                <div className="flex justify-center py-6">
                  <div className="w-32 h-32 rounded-full border-8 border-emerald-100 flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="289" strokeDashoffset="41" className="text-emerald-500" />
                    </svg>
                    <div className="text-center relative z-10">
                      <p className="text-2xl font-bold text-gray-900">85%</p>
                      <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Ready</p>
                    </div>
                  </div>
                </div>
              </SolidCard>
            </div>
          </motion.div>
        )}

        {activeTab === 'infrastructure' && (
          <motion.div key="infrastructure" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-12 gap-8">
            <div className="col-span-8 space-y-6">
              <SolidCard>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Cloud size={20} className="text-blue-500" /> Vercel Hosting
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Operational</span>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 font-mono text-[11px] leading-relaxed border border-gray-800 shadow-inner h-48 overflow-y-auto">
                   <div className="flex gap-4 mb-2 text-gray-400">
                     <span>14:20:01</span><span className="text-emerald-400">[✓] Running vite build...</span>
                   </div>
                   <div className="flex gap-4 mb-2 text-gray-400">
                     <span>14:20:04</span><span className="text-emerald-400">[✓] Transpiling modules...</span>
                   </div>
                   <div className="flex gap-4 mb-2 text-gray-400">
                     <span>14:20:13</span><span className="text-emerald-400">[✓] Build completed in 12.4s</span>
                   </div>
                   <div className="flex gap-4 mb-2 text-gray-400">
                     <span>14:20:15</span><span className="text-blue-400">[i] Deploying to Edge Network...</span>
                   </div>
                   <div className="flex gap-4 mb-2 text-gray-400">
                     <span>14:20:22</span><span className="text-emerald-400">[✓] Deployment live.</span>
                   </div>
                   <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-3 bg-gray-400 mt-2" />
                </div>
              </SolidCard>

              <SolidCard>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Database size={20} className="text-emerald-500" /> Supabase Database
                  </h3>
                  <button className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    Open Console <ExternalLink size={12} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 border border-emerald-200 shadow-sm">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">PostgreSQL Production</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">Project ID: <span className="font-mono bg-white px-1 border border-gray-200 rounded">nichekala-prod</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Connection Stable</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Latency: 12ms</p>
                  </div>
                </div>
              </SolidCard>
            </div>

            <div className="col-span-4">
               <SolidCard>
                 <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Environment Config</h3>
                 <div className="space-y-4">
                   {[
                     { key: 'VITE_SUPABASE_URL', status: 'Set', color: 'text-emerald-600' },
                     { key: 'VITE_SUPABASE_ANON_KEY', status: 'Set', color: 'text-emerald-600' },
                     { key: 'NEXT_PUBLIC_SITE_URL', status: 'Set', color: 'text-emerald-600' },
                   ].map((v, i) => (
                     <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                       <span className="text-[10px] font-mono text-gray-700 font-bold">{v.key}</span>
                       <span className={`text-[8px] font-bold uppercase tracking-wider ${v.color}`}>{v.status}</span>
                     </div>
                   ))}
                 </div>
               </SolidCard>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeploymentCenter;
