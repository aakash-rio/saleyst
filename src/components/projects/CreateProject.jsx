import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Save, FileText, User, Building2, MapPin, 
  DollarSign, Calendar, Users, Info, ChevronDown, 
  CheckCircle2, Clock, Layers, Layout, ArrowRight,
  Sparkles, ShieldCheck, Zap
} from 'lucide-react';
import AIProcessScreen from '../auth/AIProcessScreen';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`bg-[var(--bg-card)] backdrop-blur-2xl border border-[var(--glass-border)] rounded-3xl p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const CreateProject = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('Standard');
  
  const templates = [
    { id: 'Standard', name: 'Standard Workflow', stages: 5, icon: Layout, desc: 'Ideal for general project tracking' },
    { id: 'Construction', name: 'Construction Pipeline', stages: 8, icon: Building2, desc: 'Advanced structural & site milestones' },
    { id: 'Interior', name: 'Interior Design', stages: 6, icon: PaletteIcon, desc: 'Aesthetic focused material workflows' },
    { id: 'Custom', name: 'Custom Architecture', stages: 10, icon: Sparkles, desc: 'Full lifecycle with client review nodes' },
  ];

  const steps = [
    { id: 1, label: 'Core Identity', icon: FileText },
    { id: 2, label: 'Stage Templates', icon: Layers },
    { id: 3, label: 'Financials & Team', icon: Users },
    { id: 4, label: 'Review & Build', icon: ShieldCheck },
  ];

  const handleFinish = () => {
    setIsProcessing(true);
  };

  const handleAIComplete = () => {
    setIsProcessing(false);
    setShowSuccess(true);
  };

  if (isProcessing) return <AIProcessScreen onComplete={handleAIComplete} />;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      <AnimatePresence mode="wait">
        {!showSuccess ? (
          <motion.div 
            key="form"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="w-full max-w-6xl relative z-10"
          >
            <GlassCard className="!p-0 overflow-hidden flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] shadow-[var(--glow-pink)] flex items-center justify-center text-white">
                    <PlusIcon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading">Initiate Project</h2>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> AI Engine Ready
                    </p>
                  </div>
                </div>
                <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-white transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-grow overflow-hidden">
                {/* Stepper Sidebar */}
                <div className="w-72 bg-black/20 border-r border-white/5 p-8 space-y-6">
                  {steps.map((step) => (
                    <div key={step.id} className={`flex items-center gap-4 group transition-all ${currentStep >= step.id ? 'opacity-100' : 'opacity-40'}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${currentStep === step.id ? 'bg-[var(--accent-pink)] border-[var(--accent-pink)] text-white shadow-[var(--glow-pink)]' : currentStep > step.id ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-white/20'}`}>
                        {currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                      </div>
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Step 0{step.id}</p>
                        <p className="text-xs font-bold text-white whitespace-nowrap">{step.label}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-8 mt-8 border-t border-white/5">
                    <div className="bg-white/5 rounded-2xl p-4 space-y-3">
                      <p className="text-[10px] font-bold uppercase text-[var(--accent-pink)] tracking-widest flex items-center gap-2">
                        <Zap size={12} /> Auto-Generate
                      </p>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">System will auto-create Kanban stages based on your template.</p>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="flex-grow p-12 overflow-y-auto space-y-10 scrollbar-hide">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Project Name</label>
                          <input type="text" placeholder="Skyline Luxury Residence" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-xl font-bold focus:border-[var(--accent-pink)] outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Client Name</label>
                            <input type="text" placeholder="Aether Developments" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-[var(--accent-pink)] outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Primary Location</label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                              <input type="text" placeholder="San Francisco, CA" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-sm focus:border-[var(--accent-pink)] outline-none" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                          {templates.map(t => (
                            <button 
                              key={t.id}
                              onClick={() => setSelectedTemplate(t.id)}
                              className={`p-6 rounded-3xl border text-left transition-all relative overflow-hidden group ${selectedTemplate === t.id ? 'bg-[var(--accent-pink)]/10 border-[var(--accent-pink)] shadow-[var(--glow-pink)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                            >
                              {selectedTemplate === t.id && <div className="absolute top-4 right-4 text-[var(--accent-pink)]"><CheckCircle2 size={24} /></div>}
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all ${selectedTemplate === t.id ? 'bg-[var(--accent-pink)] text-white' : 'bg-white/5 text-[var(--text-secondary)]'}`}>
                                <t.icon size={24} />
                              </div>
                              <h4 className="font-bold text-lg mb-1">{t.name}</h4>
                              <p className="text-xs text-[var(--text-secondary)] mb-4">{t.desc}</p>
                              <div className="flex gap-1.5">
                                {Array.from({ length: t.stages }).map((_, i) => (
                                  <div key={i} className={`h-1 flex-grow rounded-full ${selectedTemplate === t.id ? 'bg-[var(--accent-pink)]' : 'bg-white/10'}`} />
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Assigned Manager</label>
                            <div className="relative group">
                              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 appearance-none focus:border-[var(--accent-pink)] outline-none">
                                <option>Sarah Chen (Senior Architect)</option>
                                <option>Marcus Lee (Lead Engineer)</option>
                                <option>Elena Vogel (Project Lead)</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Estimated Budget</label>
                            <div className="relative">
                              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                              <input type="number" placeholder="240,000" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-sm focus:border-[var(--accent-pink)] outline-none" />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Target Deadline</label>
                            <input type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 [color-scheme:dark] outline-none" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
                <button 
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  className={`text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                  Back to {steps[currentStep-2]?.label}
                </button>
                <div className="flex gap-4">
                  <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Save Draft</button>
                  <button 
                    onClick={() => {
                      if (currentStep < 4) setCurrentStep(prev => prev + 1);
                      else handleFinish();
                    }}
                    className="px-10 py-4 rounded-2xl bg-[var(--accent-pink)] text-white text-xs font-bold uppercase tracking-widest shadow-[var(--glow-pink)] hover:scale-105 transition-all flex items-center gap-2 group"
                  >
                    {currentStep === 4 ? 'Build Workspace' : 'Continue'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-lg text-center relative z-10"
          >
            <GlassCard className="p-12">
              <div className="w-24 h-24 rounded-[32px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} className="animate-bounce" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Workspace Created!</h2>
              <p className="text-[var(--text-secondary)] mb-10">Skyline Luxury Residence has been successfully architected with the <strong>{selectedTemplate}</strong> workflow.</p>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-10 text-left space-y-4">
                <p className="text-[10px] font-bold uppercase text-[var(--text-secondary)] tracking-widest">Auto-Generated Stages</p>
                <div className="flex flex-wrap gap-2">
                  {['Planning', 'Requirements', 'In Progress', 'Review', 'Approval', 'Completed'].map(s => (
                    <span key={s} className="text-[9px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 uppercase tracking-wider">{s}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onComplete(selectedTemplate)}
                className="w-full bg-white text-black font-bold py-5 rounded-2xl shadow-xl hover:bg-[var(--accent-pink)] hover:text-white transition-all flex items-center justify-center gap-3"
              >
                Launch Kanban Board
                <ArrowRight size={20} />
              </button>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mock Icons
const PlusIcon = (props) => <Plus {...props} />;
const PaletteIcon = (props) => <Sparkles {...props} />;

export default CreateProject;
