import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, CheckCircle2, Layout, 
  Layers, Users, Clock, Zap, Plus, 
  Trash2, Move, Briefcase, Construction,
  Home, Rocket, Sparkles, Network, ShieldCheck
} from 'lucide-react';

const TemplateBuilder = ({ onClose, onSave, initialData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData || {
    name: '',
    category: 'Residential',
    description: '',
    stages: [
      { id: 1, name: 'Planning & Discovery', duration: '2 Weeks', role: 'Manager', color: 'bg-blue-500' },
      { id: 2, name: 'Design Phase', duration: '4 Weeks', role: 'Manager', color: 'bg-violet-500' },
      { id: 3, name: 'Execution Phase', duration: '12 Weeks', role: 'Staff', color: 'bg-emerald-500' },
    ],
    checklists: [
      { id: 1, name: 'Initial Client Pack', tasks: 5, defaultRole: 'Manager' },
      { id: 2, name: 'Site Audit', tasks: 3, defaultRole: 'Staff' },
    ]
  });

  const steps = [
    { id: 1, label: 'Identity', icon: Layout },
    { id: 2, label: 'Default Stages', icon: Network },
    { id: 3, label: 'Task Checklists', icon: Layers },
    { id: 4, label: 'Review', icon: ShieldCheck },
  ];

  const categories = [
    { name: 'Residential', icon: Home },
    { name: 'Interior', icon: Layout },
    { name: 'Commercial', icon: Briefcase },
    { name: 'Heritage', icon: Construction },
    { name: 'Software', icon: Rocket },
  ];

  const handleStageChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      stages: prev.stages.map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  };

  const addStage = () => {
    setFormData(prev => ({
      ...prev,
      stages: [...prev.stages, { id: Date.now(), name: 'New Stage', duration: '1 Week', role: 'Staff', color: 'bg-blue-500' }]
    }));
  };

  const removeStage = (id) => {
    setFormData(prev => ({
      ...prev,
      stages: prev.stages.filter(s => s.id !== id)
    }));
  };

  return (
    <div className="fixed inset-0 z-[500] bg-gray-50 flex flex-col overflow-hidden animate-in fade-in duration-300">
      {/* Builder Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white relative z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Project Template Builder</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">Configure default stages and tasks</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <div className={`flex items-center gap-1.5 ${step >= s.id ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${step === s.id ? 'bg-blue-600 text-white shadow-sm' : step > s.id ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > s.id ? <CheckCircle2 size={10} /> : s.id}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700 hidden lg:block">{s.label}</span>
                </div>
                {i < steps.length - 1 && <div className="w-6 h-[2px] bg-gray-200 rounded-full" />}
              </React.Fragment>
            ))}
          </div>
          <button onClick={onClose} className="p-2.5 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-all ml-2">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-grow flex overflow-hidden relative justify-center bg-gray-50">
        {/* Content Area */}
        <div className="flex-grow p-10 overflow-y-auto scrollbar-hide flex justify-center">
          <div className="w-full max-w-3xl space-y-8 pb-20">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Template Identity</h3>
                    <p className="text-gray-500 text-sm">Define the foundational name and category for this project template.</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Template Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Standard Construction Workflow" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-lg font-bold focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Primary Category</label>
                      <div className="grid grid-cols-5 gap-4">
                        {categories.map(cat => (
                          <div 
                            key={cat.name}
                            onClick={() => setFormData({...formData, category: cat.name})}
                            className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col items-center gap-3 group ${formData.category === cat.name ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-gray-200 hover:border-blue-300'}`}
                          >
                            <cat.icon size={24} className={formData.category === cat.name ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'} />
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${formData.category === cat.name ? 'text-blue-900' : 'text-gray-500'}`}>{cat.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-4 border-t border-gray-100">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Template Description</label>
                      <textarea 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Describe the scope and intent of this template..." 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all h-28 resize-none shadow-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Default Project Stages</h3>
                    <p className="text-gray-500 text-sm">Define the Kanban columns (stages) that will be generated for new projects using this template.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                      {formData.stages.map((stage, i) => (
                        <div key={stage.id} className="flex items-center gap-4 group bg-gray-50 p-3 rounded-xl border border-gray-200">
                          <div className="w-6 text-gray-400 font-bold text-xs text-center">{i+1}</div>
                          <div className={`w-2 h-10 rounded-full ${stage.color}`} />
                          <div className="flex-grow grid grid-cols-12 gap-4">
                            <input 
                              type="text" 
                              value={stage.name} 
                              onChange={(e) => handleStageChange(stage.id, 'name', e.target.value)}
                              className="col-span-5 bg-transparent border-b border-gray-300 py-1.5 font-bold text-sm focus:border-blue-500 outline-none text-gray-900"
                            />
                            <div className="col-span-3 flex items-center gap-2">
                              <Clock size={14} className="text-gray-400 shrink-0" />
                              <input 
                                type="text" 
                                value={stage.duration} 
                                onChange={(e) => handleStageChange(stage.id, 'duration', e.target.value)}
                                className="w-full bg-transparent border-b border-gray-300 py-1.5 text-xs text-gray-600 focus:border-blue-500 outline-none"
                                placeholder="Duration"
                              />
                            </div>
                            <div className="col-span-4 flex items-center gap-2">
                              <Users size={14} className="text-gray-400 shrink-0" />
                              <select 
                                value={stage.role}
                                onChange={(e) => handleStageChange(stage.id, 'role', e.target.value)}
                                className="w-full bg-transparent border-b border-gray-300 py-1.5 text-xs text-gray-600 focus:border-blue-500 outline-none cursor-pointer appearance-none"
                              >
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Staff">Staff</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-2 cursor-grab text-gray-400 hover:text-gray-700"><Move size={16} /></div>
                            <button onClick={() => removeStage(stage.id)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                          </div>
                        </div>
                      ))}
                      
                      <button onClick={addStage} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 mt-2">
                        <Plus size={16} /> Add Default Stage
                      </button>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-4">
                      <Zap className="text-emerald-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Stages Automatically Sync</h4>
                        <p className="text-xs text-emerald-600/80 mt-0.5">When cloned or generated, these stages map perfectly to the Kanban board.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Task Checklists</h3>
                    <p className="text-gray-500 text-sm">Create reusable checklist templates that team members can append to tasks.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {formData.checklists.map(list => (
                      <div key={list.id} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-300 transition-all group">
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Layers size={20} />
                          </div>
                          <button className="p-1.5 text-rose-500 opacity-0 group-hover:opacity-100 bg-rose-50 rounded-md transition-all"><Trash2 size={14} /></button>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{list.name}</h4>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">{list.tasks} Task Items</p>
                        <div className="flex items-center gap-2 mb-4">
                           <Users size={12} className="text-gray-400" />
                           <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Default Role: {list.defaultRole}</span>
                        </div>
                        <button className="w-full py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[10px] font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100 transition-all">Edit Items</button>
                      </div>
                    ))}
                    <button className="border-2 border-dashed border-gray-300 bg-gray-50/50 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all group p-6 h-full min-h-[160px]">
                      <Plus size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Create Checklist</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8 text-center pt-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-blue-400/50 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <CheckCircle2 size={40} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 max-w-xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900">Template Ready for Deployment</h3>
                    <p className="text-gray-500 text-sm">This standardized architecture is now ready. It will be available when creating or cloning projects.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm grid grid-cols-3 gap-6 max-w-xl mx-auto mt-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 mb-0.5">{formData.stages.length}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Default Stages</p>
                    </div>
                    <div className="text-center border-x border-gray-100">
                      <p className="text-2xl font-bold text-gray-900 mb-0.5">{formData.checklists.length}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Checklists</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 mb-0.5">{formData.category}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Category</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Builder Footer */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-200 bg-white flex justify-between items-center z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <button 
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            className={`text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            ← Back
          </button>
          <div className="flex gap-4">
            <button onClick={onClose} className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100 transition-all">Cancel</button>
            <button 
              onClick={() => {
                if (step < 4) setStep(prev => prev + 1);
                else onSave(formData);
              }}
              className="px-8 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2 group"
            >
              {step === 4 ? 'Save Template' : 'Continue'}
              {step < 4 && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateBuilder;
