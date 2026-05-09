import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, RefreshCw, Layers, CheckCircle2, 
  Cpu, Zap, ShieldCheck, Activity, Search,
  Network, Table, FileText
} from 'lucide-react';

const ExportProcess = ({ type = 'csv', onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const processSteps = [
    { id: 1, label: 'Aggregating Workspace Datasets', icon: Database },
    { id: 2, label: 'Normalizing Project Metadata', icon: Layers },
    { id: 3, label: 'Validating Task Taxonomy Mapping', icon: Network },
    { id: 4, label: 'Parsing Client & Team Records', icon: Search },
    { id: 5, label: 'Generating Cryptographic Audit Logs', icon: ShieldCheck },
    { id: 6, label: type === 'csv' ? 'Compiling CSV Data Stream' : 'Pushing to Google Cloud Cluster', icon: type === 'csv' ? FileText : Table },
    { id: 7, label: 'Finalizing Storage Permissions', icon: Zap },
    { id: 8, label: 'Export Artifact Ready', icon: CheckCircle2 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev === processSteps.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 1200);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[400] bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Data Pipeline Core */}
        <div className="relative w-48 h-48 mb-16 mt-8">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-emerald-400/50 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-blue-400/30 rounded-full"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-24 h-24 rounded-3xl shadow-xl flex items-center justify-center z-10 ${type === 'csv' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {type === 'csv' ? <FileText className="text-white" size={40} /> : <Table className="text-white" size={40} />}
              </motion.div>
            </div>
          </div>

          {/* Connected Data Nodes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 2 * Math.PI) / 8;
            return (
              <motion.div
                key={i}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                className={`absolute w-3 h-3 rounded-full shadow-sm z-20 ${type === 'csv' ? 'bg-blue-500' : 'bg-emerald-500'}`}
                style={{
                  top: `${50 + 65 * Math.sin(angle)}%`,
                  left: `${50 + 65 * Math.cos(angle)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}
        </div>

        {/* Process Log */}
        <div className="w-full max-w-xl space-y-4 relative z-30">
          <div className="flex justify-between items-end mb-2 px-2">
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900">Data Pipeline Execution</h2>
            <span className={`text-[10px] font-bold uppercase tracking-widest animate-pulse px-2 py-1 rounded-md ${type === 'csv' ? 'text-blue-600 bg-blue-50' : 'text-emerald-600 bg-emerald-50'}`}>Processing Stream...</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden h-72 overflow-y-auto">
            <AnimatePresence>
              {processSteps.map((step, i) => (
                currentStep >= i && (
                  <motion.div 
                    key={step.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 ${currentStep === i ? (type === 'csv' ? 'bg-blue-50 scale-100' : 'bg-emerald-50 scale-100') : 'opacity-50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${currentStep === i ? (type === 'csv' ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-emerald-600 border-emerald-600 text-white shadow-sm') : 'bg-gray-100 border-gray-200 text-gray-400'}`}>
                        {currentStep > i ? <CheckCircle2 size={16} /> : <step.icon size={16} />}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === i ? 'text-gray-900' : 'text-gray-600'}`}>{step.label}</span>
                    </div>
                    {currentStep === i && (
                      <div className={`text-[10px] font-mono font-bold animate-pulse ${type === 'csv' ? 'text-blue-600' : 'text-emerald-600'}`}>RUNNING</div>
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Global Progress */}
          <div className="mt-6 px-2 text-center">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-3">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                className={`h-full transition-all duration-500 ${type === 'csv' ? 'bg-blue-600' : 'bg-emerald-600'}`}
              />
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enterprise Layer Secure Data Processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProcess;
