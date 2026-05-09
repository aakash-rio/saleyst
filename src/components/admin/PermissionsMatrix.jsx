import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Users, Briefcase, Download, Palette, 
  CheckCircle2, XCircle, Info, Lock, Settings, LayoutDashboard, Cloud
} from 'lucide-react';

const PermissionsMatrix = () => {
  const roles = ['Admin', 'Manager', 'Staff'];
  const permissions = [
    { id: 'create_workspace', label: 'Create workspace', icon: LayoutDashboard, values: { Admin: 'Yes', Manager: 'No', Staff: 'No' } },
    { id: 'edit_branding', label: 'Edit branding', icon: Palette, values: { Admin: 'Yes', Manager: 'No', Staff: 'No' } },
    { id: 'add_team_members', label: 'Add team members', icon: Users, values: { Admin: 'Yes', Manager: 'Optional', Staff: 'No' } },
    { id: 'create_project', label: 'Create project', icon: Briefcase, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'No' } },
    { id: 'clone_project', label: 'Clone project', icon: Briefcase, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'No' } },
    { id: 'create_stages', label: 'Create stages', icon: Briefcase, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'No' } },
    { id: 'create_tasks', label: 'Create tasks', icon: CheckCircle2, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'Limited' } },
    { id: 'assign_tasks', label: 'Assign tasks', icon: Users, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'No' } },
    { id: 'move_task_stages', label: 'Move task stages', icon: CheckCircle2, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'Assigned only' } },
    { id: 'view_all_projects', label: 'View all projects', icon: Briefcase, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'Assigned only' } },
    { id: 'export_data', label: 'Export data', icon: Download, values: { Admin: 'Yes', Manager: 'Yes', Staff: 'No' } },
    { id: 'google_sync', label: 'Google sync settings', icon: Cloud, values: { Admin: 'Yes', Manager: 'No', Staff: 'No' } },
  ];

  const renderBadge = (value) => {
    switch (value) {
      case 'Yes':
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-emerald-100">Yes</span>;
      case 'No':
        return <span className="px-3 py-1 bg-rose-50 text-rose-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-rose-100">No</span>;
      case 'Optional':
        return <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-amber-100">Optional</span>;
      case 'Limited':
        return <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-blue-100">Limited</span>;
      case 'Assigned only':
        return <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-purple-100">Assigned Only</span>;
      default:
        return <span className="px-3 py-1 bg-gray-50 text-gray-600 text-[11px] uppercase tracking-wider font-bold rounded-md border border-gray-100">{value}</span>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">User Roles and Access Rules</h2>
          <p className="text-gray-500 text-sm">Define capabilities and restrictions across your organization's role hierarchy</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Feature</th>
                {roles.map(role => (
                  <th key={role} className="p-5 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">{role}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {permissions.map((perm) => (
                <tr key={perm.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-500 transition-colors">
                        <perm.icon size={16} />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{perm.label}</span>
                    </div>
                  </td>
                  {roles.map(role => (
                    <td key={role} className="p-5 text-center">
                      {renderBadge(perm.values[role])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-1">Access Guidelines</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Role modifications require Admin privileges. "Optional" or "Limited" rules depend on individual user settings.</p>
          </div>
        </div>

        <div className="col-span-2 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex justify-between items-center">
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-1">Global Access Control</h4>
            <p className="text-xs text-gray-500">Lock down all non-admin access in case of an emergency.</p>
          </div>
          <button className="bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 font-bold px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 text-sm shadow-sm">
            <Lock size={16} /> Initiate Lockdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsMatrix;
