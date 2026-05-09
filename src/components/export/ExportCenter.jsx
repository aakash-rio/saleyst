import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileJson, Table, Share2, RefreshCw, Database, 
  History, Download, CheckCircle2, ChevronRight, 
  Settings, Lock, Key, Layout, Mail, ExternalLink,
  Zap, Cloud, Activity, ArrowRight, X, FileText,
  AlertCircle, ShieldCheck
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

const ExportCenter = ({ onExport }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState(null); // 'csv' or 'sheets'
  const [authMethod, setAuthMethod] = useState('oauth');

  const stats = [
    { label: 'Total Exports', value: '128', icon: Download, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Data Row Sync', value: '14.2k', icon: Database, color: 'text-violet-500', bg: 'bg-violet-50' },
    { label: 'Cloud Status', value: 'Ready', icon: Cloud, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Avg Export Time', value: '1.2s', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Data & Sync Center</h2>
          <p className="text-sm text-gray-500">Manage workspace exports and Google Sheets integration</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => { setExportType('csv'); setIsExporting(true); }}
            className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 text-sm"
          >
            <FileText size={16} className="text-blue-600" />
            CSV Export
          </button>
          <button 
            onClick={() => { setExportType('sheets'); setIsExporting(true); }}
            className="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-emerald-700 transition-all flex items-center gap-2 text-sm"
          >
            <Table size={16} />
            Google Sheets Sync
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <SolidCard key={i} className="flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={16} />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
          </SolidCard>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Sync Controls */}
        <div className="col-span-8 space-y-6">
          <SolidCard>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Cloud size={20} className="text-emerald-500" />
              Google Sheets Configuration
            </h3>
            
            <div className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-2xl relative overflow-hidden group mb-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-200">
                  <Table size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Google Sheets API</h4>
                  <p className="text-xs text-gray-500 mt-1">Status: <span className="text-emerald-600 font-bold">Ready for Manual Export</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">Authentication Method</h4>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setAuthMethod('oauth')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${authMethod === 'oauth' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 hover:border-blue-100'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Key size={16} className={authMethod === 'oauth' ? 'text-blue-600' : 'text-gray-400'} />
                      <span className={`text-sm font-bold ${authMethod === 'oauth' ? 'text-blue-900' : 'text-gray-700'}`}>OAuth (Personal Drive)</span>
                    </div>
                    {authMethod === 'oauth' && <CheckCircle2 size={16} className="text-blue-600" />}
                  </div>
                  <p className={`text-xs ${authMethod === 'oauth' ? 'text-blue-700' : 'text-gray-500'}`}>Export/sync directly into the client's own Google Drive account.</p>
                </div>

                <div 
                  onClick={() => setAuthMethod('service')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${authMethod === 'service' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 hover:border-blue-100'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Database size={16} className={authMethod === 'service' ? 'text-blue-600' : 'text-gray-400'} />
                      <span className={`text-sm font-bold ${authMethod === 'service' ? 'text-blue-900' : 'text-gray-700'}`}>Service Account</span>
                    </div>
                    {authMethod === 'service' && <CheckCircle2 size={16} className="text-blue-600" />}
                  </div>
                  <p className={`text-xs ${authMethod === 'service' ? 'text-blue-700' : 'text-gray-500'}`}>Use if the client accepts one fixed, centrally shared spreadsheet.</p>
                </div>
              </div>
            </div>
          </SolidCard>

          {/* Export History */}
          <SolidCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <History size={20} className="text-blue-500" />
                Recent Manual Exports
              </h3>
              <button className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800">View Full Log</button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Projects_Export.csv', type: 'CSV', status: 'Completed', size: '2.4 MB', date: 'Oct 12, 2024 • 14:20' },
                { name: 'Nichekala_Master_Sheet', type: 'SHEETS', status: 'Exported', size: 'Live Sheet', date: 'Oct 11, 2024 • 09:15' },
              ].map((exp, i) => (
                <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between group hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-gray-200 shadow-sm ${exp.type === 'CSV' ? 'text-blue-600' : 'text-emerald-600'}`}>
                      {exp.type === 'CSV' ? <FileText size={18} /> : <Table size={18} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{exp.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-0.5">{exp.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">{exp.status}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{exp.size}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded-md text-gray-500 transition-all"><Download size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>
        </div>

        {/* Sidebar Controls */}
        <div className="col-span-4 space-y-6">
          <SolidCard className="bg-gray-50/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Data Mapping Schema</h3>
            <div className="space-y-4">
              {[
                { label: 'Projects', status: 'Mapped', color: 'text-emerald-600' },
                { label: 'Tasks', status: 'Mapped', color: 'text-emerald-600' },
                { label: 'Clients', status: 'Mapped', color: 'text-emerald-600' },
                { label: 'Team Members', status: 'Mapped', color: 'text-emerald-600' },
                { label: 'Activity Logs', status: 'Mapped', color: 'text-emerald-600' },
              ].map((map, i) => (
                <div key={i} className="flex items-center justify-between bg-white px-3 py-2.5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-xs font-bold text-gray-700">{map.label} Tab</span>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${map.color}`}>{map.status}</span>
                </div>
              ))}
            </div>
          </SolidCard>

          {/* Auto Sync Coming Soon */}
          <SolidCard className="border-dashed border-gray-300 bg-gray-50/50">
            <div className="flex flex-col items-center justify-center text-center p-2 opacity-60">
              <RefreshCw className="text-gray-400 mb-4" size={32} />
              <h3 className="text-sm font-bold text-gray-800 mb-2">Automated Sync</h3>
              <p className="text-xs text-gray-500 mb-4">Real-time two-way sync is delayed until the core dashboard architecture is fully stabilized.</p>
              <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Coming Soon (V2)
              </div>
            </div>
          </SolidCard>
        </div>
      </div>

      {/* Export Modal Simulation */}
      <AnimatePresence>
        {isExporting && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsExporting(false)} className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 10 }} 
              className="w-full max-w-xl bg-white border border-gray-100 rounded-3xl p-8 relative z-10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border ${exportType === 'csv' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                    {exportType === 'csv' ? <FileText size={20} /> : <Table size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exportType === 'csv' ? 'Generate CSV Export' : 'Manual Google Sheets Export'}</h3>
                    <p className="text-xs text-gray-500 font-medium">Select the tabs/datasets to include</p>
                  </div>
                </div>
                <button onClick={() => setIsExporting(false)} className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-all"><X size={20} /></button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Projects', key: 'projects' },
                    { label: 'Tasks', key: 'tasks' },
                    { label: 'Clients', key: 'clients' },
                    { label: 'Team Members', key: 'team' },
                    { label: 'Activity Logs', key: 'logs' }
                  ].map(opt => (
                    <div key={opt.key} className="p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between group cursor-pointer hover:border-blue-300 hover:bg-white transition-all shadow-sm">
                      <span className="text-xs font-bold text-gray-700">{opt.label}</span>
                      <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-white shadow-sm"><CheckCircle2 size={10} /></div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold text-gray-600 mb-1.5 block">File / Sheet Name</label>
                  <input type="text" placeholder={`Nichekala_Export_${new Date().toLocaleDateString()}`} className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm focus:border-blue-500 outline-none shadow-sm" />
                </div>

                {exportType === 'sheets' && (
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start gap-3 mt-4">
                    <Info size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                      This will manually create a new spreadsheet (or update an existing one) using the selected <strong>{authMethod === 'oauth' ? 'OAuth' : 'Service Account'}</strong> authentication method.
                    </p>
                  </div>
                )}

                <button 
                  onClick={() => { setIsExporting(false); onExport(exportType); }}
                  className={`w-full text-white font-bold py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 mt-4 text-sm ${exportType === 'csv' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                >
                  {exportType === 'csv' ? 'Download CSV Files' : 'Push to Google Sheets'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExportCenter;
