import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ShieldAlert, CheckCircle2, XCircle, 
  Users, Lock, RefreshCw, Copy, Search, 
  Activity, AlertCircle, Info, Zap, Terminal,
  Layout, Database, Download, CheckSquare
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

const QAModule = () => {
  const [activeTab, setActiveTab] = useState('all');

  const qaChecklist = [
    { id: 1, category: 'Access', rule: 'User cannot access dashboard without login.', status: 'Passed' },
    { id: 2, category: 'Access', rule: 'Staff cannot access admin page.', status: 'Passed' },
    { id: 3, category: 'Access', rule: 'Manager cannot edit workspace branding.', status: 'Passed' },
    { id: 4, category: 'Permissions', rule: 'Admin/Manager can create projects.', status: 'Passed' },
    { id: 5, category: 'Permissions', rule: 'Staff cannot create projects.', status: 'Passed' },
    { id: 6, category: 'Permissions', rule: 'Admin/Manager can export data.', status: 'Passed' },
    { id: 7, category: 'Permissions', rule: 'Staff cannot export data.', status: 'Passed' },
    { id: 8, category: 'Workflow', rule: 'Task drag-and-drop updates stage correctly.', status: 'Passed' },
    { id: 9, category: 'Cloning', rule: 'Project clone creates a new project with stages and tasks.', status: 'Passed' },
    { id: 10, category: 'Cloning', rule: 'Comments and old activity logs are not cloned.', status: 'Passed' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Passed': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Failed': return 'text-rose-600 bg-rose-50 border-rose-200';
      default: return 'text-amber-600 bg-amber-50 border-amber-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">QA Validation Tracker</h2>
          <p className="text-sm text-gray-500">Testing role-based accessibility, cloning logic, and workflow integrity</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-1.5 flex gap-1 shadow-sm">
            {['all', 'access', 'workflow', 'cloning'].map(tab => (
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
            <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-700" /> 
            Run Full Suite
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <SolidCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <CheckSquare size={20} className="text-emerald-500" />
                Comprehensive QA Checklist
              </h3>
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">All Systems Verified</span>
              </div>
            </div>
            <div className="space-y-3">
              {qaChecklist.filter(item => activeTab === 'all' || item.category.toLowerCase() === activeTab).map((qa) => (
                <div key={qa.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-200 text-gray-400 group-hover:text-blue-500 shadow-sm">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{qa.rule}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-0.5">{qa.category} Rule</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${getStatusColor(qa.status)}`}>
                    {qa.status === 'Passed' && <CheckCircle2 size={12} />}
                    {qa.status}
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>
        </div>

        <div className="col-span-4 space-y-6">
          <SolidCard className="bg-emerald-50 border-emerald-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 text-emerald-600"><ShieldCheck size={100} /></div>
             <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-6 relative z-10">Quality Score</h4>
             <div className="flex justify-center py-4 relative z-10">
               <div className="relative w-32 h-32">
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="8" />
                   <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset="0" className="text-emerald-500 transition-all duration-1000" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-emerald-700">100</div>
               </div>
             </div>
             <p className="text-center text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-2 relative z-10">Enterprise Compliance Verified</p>
          </SolidCard>

          <SolidCard>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-500" /> Automated Test Logs
            </h4>
            <div className="space-y-4">
              {[
                { module: 'Authentication Core', time: '12m ago', status: 'OK' },
                { module: 'Role Based Access Control', time: '45m ago', status: 'OK' },
                { module: 'Cloning Algorithm Engine', time: '2h ago', status: 'OK' },
              ].map((log, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 h-8 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">{log.module}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{log.time}</p>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Passed</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>
        </div>
      </div>
    </div>
  );
};

export default QAModule;
