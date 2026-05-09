import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Command, Plus, Users, Layout, 
  Settings, Zap, Shield, HelpCircle, X
} from 'lucide-react';

const CommandPalette = ({ isOpen, onClose, onAction }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape') onClose(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    { id: 'new-project', name: 'Create New Project', icon: Plus, shortcut: 'P', category: 'General' },
    { id: 'add-member', name: 'Invite Team Member', icon: Users, shortcut: 'T', category: 'General' },
    { id: 'go-kanban', name: 'Open Kanban Board', icon: Layout, shortcut: 'K', category: 'Navigation' },
    { id: 'settings', name: 'Workspace Settings', icon: Settings, shortcut: 'S', category: 'Navigation' },
    { id: 'security', name: 'Security Audit', icon: Shield, shortcut: 'A', category: 'Admin' },
  ].filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh] p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClose(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-[var(--bg-card)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
      >
        <div className="p-4 border-b border-white/5 flex items-center gap-4">
          <Search className="text-[var(--text-secondary)]" size={20} />
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-white placeholder:text-white/20 text-lg"
          />
          <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold text-[var(--text-secondary)]">
            <Command size={10} /> <span>K</span>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
          {actions.length > 0 ? (
            <div className="space-y-4">
              {['General', 'Navigation', 'Admin'].map(category => {
                const catActions = actions.filter(a => a.category === category);
                if (catActions.length === 0) return null;
                return (
                  <div key={category}>
                    <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">{category}</p>
                    <div className="space-y-1">
                      {catActions.map(action => (
                        <button 
                          key={action.id}
                          onClick={() => onAction(action.id)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 group transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-pink)] group-hover:bg-[var(--accent-pink)]/10 transition-all">
                              <action.icon size={16} />
                            </div>
                            <span className="text-sm font-medium">{action.name}</span>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded border border-white/10">Alt + {action.shortcut}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <Zap className="mx-auto text-[var(--text-secondary)] mb-4 opacity-20" size={48} />
              <p className="text-[var(--text-secondary)] text-sm">No commands found for "{search}"</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">↑↓</span> to navigate</span>
            <span className="flex items-center gap-1"><span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">↵</span> to select</span>
          </div>
          <div className="flex items-center gap-1">
            <HelpCircle size={12} /> Help
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommandPalette;
