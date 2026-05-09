import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, GitPullRequest, GitCommit, GitMerge, 
  Code2, ShieldCheck, ShieldAlert, Terminal, 
  CheckSquare, Lock, Key, Activity, Info,
  TrendingUp, BarChart3, ArrowRight, UserCheck
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

const CodingStandards = () => {
  const standards = [
    { id: 1, label: 'Feature Branching', desc: 'One feature = one branch.', status: 'Strict', icon: GitBranch },
    { id: 2, label: 'Pull Request Protocol', desc: 'One branch = one pull request. No direct push to main.', status: 'Enforced', icon: GitPullRequest },
    { id: 3, label: 'AI Review Policy', desc: 'No unreviewed AI code allowed in production.', status: 'Strict', icon: Code2 },
    { id: 4, label: 'Secret Governance', desc: 'No secret keys in GitHub. Zero tolerance policy.', status: 'Critical', icon: Lock },
    { id: 5, label: 'Data Validation', desc: 'Every form must have validation.', status: 'Enforced', icon: CheckSquare },
    { id: 6, label: 'Security Protocols', desc: 'Every database action must have role check.', status: 'Critical', icon: UserCheck },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Critical': return 'bg-rose-50 text-rose-600 border-rose-200';
      case 'Strict': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Enforced': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Standards Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Coding Standards & Governance</h2>
          <p className="text-sm text-gray-500">Architectural guidelines, security protocols, and Git workflows</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 text-sm">
            <Info size={16} className="text-blue-600" /> Engineering Handbook
          </button>
          <button className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2 text-sm">
            <ShieldCheck size={16} /> Run Compliance Audit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Rules Matrix */}
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-6">
            {standards.map((rule, i) => (
              <SolidCard key={i} className="group hover:border-blue-300 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-all">
                    <rule.icon size={24} />
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getStatusStyle(rule.status)}`}>
                    {rule.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{rule.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={12} /> Compliant
                  </span>
                  <button className="text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:text-blue-800">View Policy</button>
                </div>
              </SolidCard>
            ))}
          </div>
        </div>

        {/* Git Workflow Visualization */}
        <div className="col-span-4 space-y-6">
          <SolidCard className="relative overflow-hidden group bg-gray-50/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">Git Workflow Architecture</h3>
            <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
              {[
                { label: 'Feature Branch', status: 'One Feature = One Branch', icon: GitBranch, color: 'text-blue-600' },
                { label: 'Pull Request', status: 'Required for all merges', icon: GitPullRequest, color: 'text-amber-600' },
                { label: 'Code Review', status: 'No unreviewed AI code', icon: Code2, color: 'text-violet-600' },
                { label: 'Main Merge', status: 'No direct pushes', icon: GitMerge, color: 'text-emerald-600' },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className={`w-6 h-6 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center ${step.color}`}>
                    <step.icon size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{step.label}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-0.5">{step.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>

          <SolidCard className="bg-emerald-50 border-emerald-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-6 flex items-center gap-2">
              <CheckSquare size={16} className="text-emerald-600" /> Form Validation Score
            </h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-3xl font-bold text-gray-900">100%</span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">Global Coverage</span>
            </div>
            <p className="text-xs text-emerald-700 leading-relaxed font-medium">Every input form across the workspace is protected by strict validation logic.</p>
          </SolidCard>
        </div>
      </div>
    </div>
  );
};

export default CodingStandards;
