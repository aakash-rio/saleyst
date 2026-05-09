import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, MoreHorizontal, Shield, UserCheck, UserX, 
  Mail, Clock, Filter, Search, CheckCircle2,
  Lock, Copy, X
} from 'lucide-react';

const RoleBadge = ({ role }) => {
  const styles = {
    Admin: 'bg-rose-50 text-rose-600 border-rose-100',
    Manager: 'bg-amber-50 text-amber-600 border-amber-100',
    Staff: 'bg-blue-50 text-blue-600 border-blue-100'
  };
  
  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border uppercase tracking-wider ${styles[role]}`}>
      {role}
    </span>
  );
};

const TeamManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [members, setMembers] = useState([
    { id: 1, name: 'Sarah Chen', email: 'sarah@nichekala.ai', role: 'Admin', status: 'Active', lastActive: '2m ago' },
    { id: 2, name: 'Marcus Lee', email: 'marcus@nichekala.ai', role: 'Manager', status: 'Active', lastActive: '1h ago' },
    { id: 3, name: 'Elena Vogel', email: 'elena@nichekala.ai', role: 'Staff', status: 'Deactivated', lastActive: '2d ago' },
    { id: 4, name: 'Julian Thorne', email: 'julian@nichekala.ai', role: 'Staff', status: 'Active', lastActive: '5m ago' },
  ]);

  const toggleStatus = (id) => {
    setMembers(members.map(m => {
      if (m.id === id) {
        return { ...m, status: m.status === 'Active' ? 'Deactivated' : 'Active' };
      }
      return m;
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Team Members</h2>
          <p className="text-gray-500 text-sm">Manage users, roles, and access credentials manually (V1)</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
        >
          <UserPlus size={16} />
          Add Member
        </button>
      </div>

      {/* Team Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search members..." 
              className="bg-white border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 transition-all shadow-sm"
            />
          </div>
          <div className="text-xs font-bold text-gray-500">
            Total Users: {members.length}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-[10px] uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-3 font-bold">Member Details</th>
                <th className="px-6 py-3 font-bold">Role</th>
                <th className="px-6 py-3 font-bold">Status</th>
                <th className="px-6 py-3 font-bold">Last Active</th>
                <th className="px-6 py-3 font-bold text-right">Access Control</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {members.map((member) => (
                <tr key={member.id} className={`hover:bg-gray-50/50 transition-colors ${member.status === 'Deactivated' ? 'opacity-60' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${member.name}&background=f3f4f6&color=1f2937`} className="w-9 h-9 rounded-full border border-gray-200" />
                      <div>
                        <p className="font-bold text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <RoleBadge role={member.role} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                      <span className={`text-xs font-bold ${member.status === 'Active' ? 'text-emerald-600' : 'text-gray-500'}`}>
                        {member.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">
                    {member.lastActive}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => toggleStatus(member.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${member.status === 'Active' ? 'text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100' : 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'}`}
                    >
                      {member.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Onboarding Context */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
               <UserPlus size={18} />
             </div>
             <h3 className="text-sm font-bold text-gray-900">V1 User Creation Flow</h3>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
             Currently, staff accounts must be created manually by an Admin. The system generates a secure temporary password which must be shared with the staff member securely outside the platform.
          </p>
          <div className="space-y-3">
             <div className="flex gap-3 items-center text-xs">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600">1</div>
                <span className="text-gray-700 font-medium">Admin enters details & selects role</span>
             </div>
             <div className="flex gap-3 items-center text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-emerald-600">2</div>
                <span className="text-gray-700 font-medium">System generates credentials</span>
             </div>
             <div className="flex gap-3 items-center text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-600">3</div>
                <span className="text-gray-700 font-medium">Admin hands over credentials manually</span>
             </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-300 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-gray-100 transition-colors">
          <Mail className="text-gray-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-sm font-bold text-gray-700 mb-1">Email Invitations (V2)</h3>
          <p className="text-xs text-gray-500 max-w-[200px]">Automated magic links and onboarding flows are planned for the next release.</p>
          <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-wider bg-gray-200 text-gray-500 px-2 py-1 rounded">Coming Soon</span>
        </div>
      </div>

      {/* Add Member Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl border border-gray-100"
            >
              <button onClick={() => setIsAddModalOpen(false)} className="absolute right-6 top-6 text-gray-400 hover:text-gray-700">
                <X size={20} />
              </button>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">Create Staff Account</h3>
              <p className="text-sm text-gray-500 mb-6">Manually generate credentials for a new member.</p>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 outline-none transition-colors" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">Email Address</label>
                  <input type="email" placeholder="john@nichekala.ai" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 outline-none transition-colors" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">Role</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 outline-none appearance-none cursor-pointer">
                    <option>Staff</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-2 relative z-10">
                    <span className="text-xs font-bold text-amber-700 flex items-center gap-1.5">
                      <Lock size={12} /> Auto-Generated Password
                    </span>
                    <button className="text-amber-600 hover:text-amber-800 transition-colors"><Copy size={14} /></button>
                  </div>
                  <p className="text-lg font-mono font-bold text-amber-900 relative z-10">nk-hq-7b9x2</p>
                  <p className="text-[10px] text-amber-700/80 mt-1 relative z-10">Copy and share securely before closing.</p>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors mt-2 shadow-sm text-sm">
                  Create Account
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamManagement;
