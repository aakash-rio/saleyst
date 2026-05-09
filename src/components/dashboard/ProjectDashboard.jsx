import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, CheckCircle2, Clock, AlertCircle, 
  MoreHorizontal, ArrowUpRight, Users, Calendar
} from 'lucide-react';

const SolidCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-[#111111] border border-[#222222] rounded-xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const ProjectDashboard = ({ onCreateProject }) => {
  const projects = [
    { id: 1, name: 'Minimalist Villa', client: 'Hargrave Group', status: 'In Progress', progress: 65, dueDate: 'Oct 24', team: 4 },
    { id: 2, name: 'Urban Loft Renovation', client: 'Sarah Jenkins', status: 'Review', progress: 90, dueDate: 'Oct 15', team: 2 },
    { id: 3, name: 'Tech Hub Office', client: 'InnovaCorp', status: 'Planning', progress: 15, dueDate: 'Nov 30', team: 6 },
    { id: 4, name: 'Boutique Hotel', client: 'Grand Hospitality', status: 'In Progress', progress: 40, dueDate: 'Dec 12', team: 8 },
  ];

  const tasks = [
    { id: 1, title: 'Finalize Floor Plans', project: 'Minimalist Villa', priority: 'High', time: '2h ago' },
    { id: 2, title: 'Client Presentation', project: 'Urban Loft', priority: 'Medium', time: '4h ago' },
    { id: 3, title: 'Material Selection', project: 'Boutique Hotel', priority: 'High', time: '1d ago' },
    { id: 4, title: 'Review Structural Engineering', project: 'Tech Hub Office', priority: 'High', time: '1d ago' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Tasks Completed', value: '148', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Upcoming Deadlines', value: '5', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500/10' },
          { label: 'At Risk', value: '2', icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-500/10' }
        ].map((stat, i) => (
          <SolidCard key={i} className="flex items-center gap-5 hover:border-white/10 transition-colors">
            <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center border border-${stat.color.split('-')[1]}-500/20`}>
              <stat.icon size={22} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
            </div>
          </SolidCard>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Main Projects List */}
        <SolidCard className="col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white tracking-tight">Active Projects</h3>
            <button onClick={onCreateProject} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-pink)] text-white text-xs font-bold rounded-lg hover:bg-pink-600 transition-colors shadow-[0_0_15px_rgba(255,0,122,0.3)]">
              <Briefcase size={14} />
              New Project
            </button>
          </div>
          
          <div className="space-y-4 flex-grow">
            {projects.map(project => (
              <div key={project.id} className="flex items-center justify-between p-5 bg-[#161616] border border-[#2a2a2a] rounded-xl hover:border-[#444] transition-all group cursor-pointer">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 tracking-tight">{project.name}</h4>
                      <p className="text-xs text-[#888] font-medium">{project.client}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                      project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      project.status === 'Review' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                      'bg-[#222] text-[#aaa] border-[#333]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] text-[#888] mb-1.5 font-bold uppercase tracking-wider">
                        <span>Progress</span>
                        <span className={project.progress > 80 ? 'text-emerald-400' : 'text-white'}>{project.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[var(--accent-pink)] rounded-full relative" 
                          style={{ width: `${project.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 text-[#888] text-xs font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#666]" />
                        <span>{project.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-[#666]" />
                        <span>{project.team} members</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="ml-6 p-2 text-[#666] hover:text-white transition-colors opacity-0 group-hover:opacity-100 bg-[#222] rounded-lg">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </SolidCard>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <SolidCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-white tracking-tight">Priority Tasks</h3>
              <button className="text-[#666] hover:text-white"><MoreHorizontal size={18} /></button>
            </div>
            <div className="space-y-3">
              {tasks.map(task => (
                <div key={task.id} className="flex gap-4 p-3 rounded-xl hover:bg-[#161616] transition-colors cursor-pointer border border-transparent hover:border-[#2a2a2a]">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${task.priority === 'High' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`} />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{task.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] text-[#888] font-medium">
                      <span>{task.project}</span>
                      <span className="w-1 h-1 rounded-full bg-[#444]" />
                      <span>{task.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 bg-[#161616] text-[#888] text-xs font-bold rounded-lg border border-[#2a2a2a] hover:bg-[#222] hover:text-white transition-colors">
              View All Tasks
            </button>
          </SolidCard>

          <SolidCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-white tracking-tight">Team Workload</h3>
              <button className="text-[#666] hover:text-white"><MoreHorizontal size={18} /></button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Nichekala', load: 85, tasks: 12 },
                { name: 'Sarah Chen', load: 60, tasks: 8 },
                { name: 'Marcus Ray', load: 95, tasks: 15 },
              ].map((member, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff`} alt={member.name} className="w-7 h-7 rounded-lg shadow-md" />
                      <span className="text-xs font-semibold text-[#ddd]">{member.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#888] bg-[#222] px-2 py-0.5 rounded-md border border-[#333]">{member.tasks} tasks</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${member.load > 90 ? 'bg-rose-500' : member.load > 70 ? 'bg-[var(--accent-pink)]' : 'bg-blue-500'}`} style={{ width: `${member.load}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDashboard;
