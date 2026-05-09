import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, Database, Layers, CheckCircle2, 
  Cpu, Zap, ShieldCheck, Search, Activity, GitBranch
} from 'lucide-react';

const CloneProcessScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const processSteps = [
    { id: 1, label: 'Fetch source project data', icon: Search },
    { id: 2, label: 'Create new project record', icon: Database },
    { id: 3, label: 'Fetch source stages ordered by order', icon: Layers },
    { id: 4, label: 'Create new stages under new project', icon: Network },
    { id: 5, label: 'Store oldStageId to newStageId mapping', icon: GitBranch },
    { id: 6, label: 'Fetch source tasks', icon: Search },
    { id: 7, label: 'Create copied tasks with mapped StageId', icon: Cpu },
    { id: 8, label: 'Reset status/order as needed', icon: ShieldCheck },
    { id: 9, label: 'Add activity log to new tasks', icon: Activity },
    { id: 10, label: 'Redirect to new project board', icon: CheckCircle2 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev === processSteps.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600); // Fast but readable execution
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[300] bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Core Algorithm Engine Graphic */}
        <div className="relative w-48 h-48 mb-16 mt-8">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-400/50 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-emerald-400/30 rounded-full"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-blue-600 shadow-xl flex items-center justify-center z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Cpu className="text-white" size={40} />
              </motion.div>
            </div>
          </div>

          {/* Connected Algorithm Nodes */}
          {processSteps.map((s, i) => {
            const angle = (i * 2 * Math.PI) / processSteps.length;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={currentStep >= i ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                className="absolute w-3 h-3 rounded-full bg-blue-500 shadow-sm z-20"
                style={{
                  top: `${50 + 65 * Math.sin(angle)}%`,
                  left: `${50 + 65 * Math.cos(angle)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {currentStep > i && (
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Status Activity Log */}
        <div className="w-full max-w-xl space-y-4 relative z-30">
          <div className="flex justify-between items-end mb-2 px-2">
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900">Execution Log</h2>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest animate-pulse bg-blue-50 px-2 py-1 rounded-md">Running Algorithm...</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden h-72 overflow-y-auto">
            {processSteps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ x: -20, opacity: 0 }}
                animate={currentStep >= i ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 ${currentStep === i ? 'bg-blue-50 scale-100' : currentStep > i ? 'opacity-50' : 'opacity-0'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${currentStep === i ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : currentStep > i ? 'bg-emerald-50 border-emerald-200 text-emerald-500' : 'border-gray-200 text-gray-400'}`}>
                    {currentStep > i ? <CheckCircle2 size={16} /> : <step.icon size={16} />}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === i ? 'text-blue-900' : 'text-gray-600'}`}>{step.label}</span>
                </div>
                {currentStep === i && (
                  <div className="flex gap-1">
                    {[1, 2, 3].map(j => (
                      <motion.div 
                        key={j}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.2 }}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 px-2 text-center">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-3">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                className="h-full bg-blue-600 transition-all duration-500"
              />
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Project Duplication Protocol Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneProcessScreen;
