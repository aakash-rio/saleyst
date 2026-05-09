import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Copy, Network, Building2, CheckCircle2, 
  ShieldCheck, Zap, ArrowRight, Settings, Lock, 
  Sparkles, Layers, FileText, Database, GitBranch
} from 'lucide-react';

const CloneProjectModal = ({ sourceProject, onClose, onClone }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [options, setOptions] = useState({
    stages: true,
    taskTitles: true,
    taskDescriptions: true,
    taskPriority: true,
    taskOrder: true,
    checklists: true,
    keepAssignees: false,
    keepDueDates: false
  });

  const [formData, setFormData] = useState({
    name: `${sourceProject.name} (Copy)`,
    client: sourceProject.client || '',
    location: sourceProject.location || 'San Francisco, CA',
    manager: sourceProject.manager || 'Nichekala'
  });

  const steps = [
    { id: 1, label: 'New Identity', icon: Building2 },
    { id: 2, label: 'Clone Settings', icon: Settings },
    { id: 3, label: 'Replication Preview', icon: Network },
  ];

  const toggleOption = (opt) => setOptions(prev => ({ ...prev, [opt]: !prev[opt] }));

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
              <Copy size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">Clone Project Architecture</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Source:</span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">{sourceProject.name}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-grow overflow-hidden">
          {/* Stepper Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-100 p-6 flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.id} className={`flex items-center gap-4 transition-all ${currentStep >= step.id ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentStep === step.id ? 'bg-blue-600 text-white shadow-sm' : currentStep > step.id ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Step 0{step.id}</p>
                  <p className={`text-sm font-bold ${currentStep === step.id ? 'text-blue-600' : 'text-gray-700'}`}>{step.label}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 space-y-2">
                <p className="text-xs font-bold uppercase text-rose-600 tracking-wider flex items-center gap-1.5">
                  <Lock size={14} /> Security Protocol
                </p>
                <p className="text-[11px] text-rose-800/80 leading-relaxed font-medium">Old comments, attachments, activity logs, and completed statuses are automatically stripped during cloning.</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-grow p-8 overflow-y-auto bg-white scrollbar-hide">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">New Project Identity</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-xl p-4 text-lg font-bold focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Client Association</label>
                      <input 
                        type="text" 
                        value={formData.client}
                        onChange={(e) => setFormData({...formData, client: e.target.value})}
                        className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm focus:border-blue-500 outline-none shadow-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Workspace Manager</label>
                      <select 
                        value={formData.manager}
                        onChange={(e) => setFormData({...formData, manager: e.target.value})}
                        className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm outline-none appearance-none cursor-pointer shadow-sm"
                      >
                        <option>{sourceProject.manager}</option>
                        <option>Sarah Chen</option>
                        <option>Marcus Lee</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Duplication Parameters</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'stages', label: 'Workflow Stages', desc: 'Copy all Kanban columns' },
                      { id: 'taskTitles', label: 'Task Taxonomy', desc: 'Clone all task titles & hierarchy' },
                      { id: 'taskDescriptions', label: 'Rich Content', desc: 'Copy detailed descriptions' },
                      { id: 'taskPriority', label: 'Priority Matrix', desc: 'Maintain urgency levels' },
                      { id: 'taskOrder', label: 'Structural Order', desc: 'Keep custom task positioning' },
                      { id: 'checklists', label: 'Checklist Templates', desc: 'Clone sub-task blueprints' },
                    ].map(opt => (
                      <div 
                        key={opt.id}
                        className={`p-4 rounded-xl border flex items-center justify-between ${options[opt.id] ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200 opacity-60'}`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className={`text-[11px] font-bold ${options[opt.id] ? 'text-blue-900' : 'text-gray-500'}`}>{opt.label}</span>
                          <span className={`text-[9px] uppercase tracking-wider ${options[opt.id] ? 'text-blue-700' : 'text-gray-400'}`}>{opt.desc}</span>
                        </div>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${options[opt.id] ? 'bg-blue-600 text-white' : 'bg-gray-200 text-transparent'}`}>
                          <CheckCircle2 size={12} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Optional Inheritance</h3>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleOption('keepAssignees')}
                          className={`w-10 h-5 rounded-full relative transition-all ${options.keepAssignees ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${options.keepAssignees ? 'right-1' : 'left-1 shadow-sm'}`} />
                        </button>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Inherit Old Assignees</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleOption('keepDueDates')}
                          className={`w-10 h-5 rounded-full relative transition-all ${options.keepDueDates ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${options.keepDueDates ? 'right-1' : 'left-1 shadow-sm'}`} />
                        </button>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Maintain Old Due Dates</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600"><GitBranch size={120} /></div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-6 flex items-center gap-2">
                      <Network size={16} /> Replication Algorithm Preview
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-6 relative z-10">
                        <div className="text-center bg-white p-4 rounded-xl border border-blue-100 shadow-sm min-w-[120px]">
                          <p className="text-2xl font-bold text-blue-900">1</p>
                          <p className="text-[9px] font-bold text-blue-500 uppercase tracking-wider mt-1">Source Fetch</p>
                        </div>
                        <ArrowRight className="text-blue-300" size={20} />
                        <div className="text-center bg-white p-4 rounded-xl border border-blue-100 shadow-sm min-w-[120px]">
                          <p className="text-2xl font-bold text-blue-900">06</p>
                          <p className="text-[9px] font-bold text-blue-500 uppercase tracking-wider mt-1">Map Stages</p>
                        </div>
                        <ArrowRight className="text-blue-300" size={20} />
                        <div className="text-center bg-white p-4 rounded-xl border border-blue-100 shadow-sm min-w-[120px]">
                          <p className="text-2xl font-bold text-blue-900">24</p>
                          <p className="text-[9px] font-bold text-blue-500 uppercase tracking-wider mt-1">Copy Tasks</p>
                        </div>
                      </div>

                      <div className="bg-white/80 p-5 rounded-2xl border border-blue-100 space-y-4 relative z-10">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Workflow Mapping Pipeline</p>
                        <div className="flex gap-2">
                          {['Create Project', 'Clone Stages', 'Map IDs', 'Copy Tasks', 'Reset Status', 'Log Activity'].map((s, i) => (
                            <div key={i} className="flex-grow h-2 rounded-full bg-blue-500 shadow-sm" title={s} />
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] font-bold text-blue-600 uppercase">
                          <span>Algorithm Sequential Execution</span>
                          <span>Auto-Redirect Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <ShieldCheck className="text-emerald-500" size={20} />
                    <p className="text-[10px] text-emerald-700 font-bold leading-relaxed uppercase tracking-widest">
                      Data integrity verified. System ready to fetch source components and generate replication logs.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
          <button 
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className={`text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            ← Back
          </button>
          <div className="flex gap-4">
            <button onClick={onClose} className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-50 transition-all shadow-sm">Cancel</button>
            <button 
              onClick={() => {
                if (currentStep < 3) setCurrentStep(prev => prev + 1);
                else onClone(formData);
              }}
              className="px-8 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2 group"
            >
              {currentStep === 3 ? 'Execute Algorithm' : 'Continue'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CloneProjectModal;
