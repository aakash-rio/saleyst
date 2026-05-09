import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Network, CheckCircle2 } from 'lucide-react';

const AIProcessScreen = ({ message = "Building Workspace...", onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-gray-50 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="relative flex flex-col items-center">
        {/* Central Core Animation */}
        <div className="relative w-48 h-48 mb-12">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-emerald-500/20 rounded-full"
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center z-10">
              <Cpu className="text-white animate-pulse" size={48} />
            </div>
          </motion.div>

          {/* Floating Data Nodes */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -10, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-2 h-2 rounded-full bg-blue-600 shadow-sm"
              style={{
                top: `${20 + i * 20}%`,
                left: `${i % 2 === 0 ? -40 : 120}%`
              }}
            />
          ))}
        </div>

        {/* Status Messages */}
        <div className="text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold uppercase tracking-widest text-gray-800"
          >
            {message}
          </motion.h2>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[0, 1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  animate={{ 
                    height: [8, 24, 8],
                    backgroundColor: ['rgba(59,130,246,0.2)', '#3b82f6', 'rgba(59,130,246,0.2)']
                  }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1.5 rounded-full"
                />
              ))}
            </div>
            
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Database size={14} className="text-blue-500" />
                <span>Initializing Project Database</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Network size={14} className="text-emerald-500" />
                <span>Generating Workflow Templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar Footer */}
      <div className="absolute bottom-20 w-full max-w-md px-10">
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="h-full bg-blue-600"
          />
        </div>
        <p className="text-[10px] text-center mt-4 text-gray-400 font-bold uppercase tracking-widest">System Automation Active</p>
      </div>
    </div>
  );
};

export default AIProcessScreen;
