import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Layers, Briefcase, Columns, CheckSquare, Users,
  PieChart, Table, Settings, Bell, Search, Shield, UserCheck,
  RefreshCcw, Upload, CheckCircle2, Calendar, Info, LogOut,
  Palette, UserPlus, ShieldCheck, Activity, Lock, Key, Plus,
  Command, Download, Cloud, ShieldAlert, Cpu, Settings2,
  Box, Terminal, GitBranch, Zap, Code2, Rocket, Bug,
  TrendingUp, TrendingDown, ArrowRight
} from 'lucide-react';

// Common Components
import CommandPalette from './components/common/CommandPalette';

// Auth Components
import LoginPage from './components/auth/LoginPage';
import AuthErrorPage from './components/auth/AuthErrorPage';
import AuthLoading from './components/auth/AuthLoading';

// Team & Workspace Components
import TeamManagement from './components/team/TeamManagement';
import WorkspaceSettings from './components/workspace/WorkspaceSettings';
import TeamAnalytics from './components/team/TeamAnalytics';

// Project Components
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';
import CreateProject from './components/projects/CreateProject';
import CloneProjectModal from './components/projects/CloneProjectModal';
import CloneProcessScreen from './components/projects/CloneProcessScreen';
import QuickActionWidget from './components/dashboard/QuickActionWidget';

// Kanban Components
import KanbanBoard from './components/kanban/KanbanBoard';

// Export & Sync Components
import ExportCenter from './components/export/ExportCenter';
import ExportProcess from './components/export/ExportProcess';

// Admin Components
import AdminDashboard from './components/admin/AdminDashboard';
import PermissionsMatrix from './components/admin/PermissionsMatrix';
import TemplateManager from './components/admin/TemplateManager';

// Roadmap Components
import RoadmapDashboard from './components/roadmap/RoadmapDashboard';
import SprintBoard from './components/roadmap/SprintBoard';
import SprintRoadmap from './components/roadmap/SprintRoadmap';

// Engineering Components
import EngineeringDashboard from './components/engineering/EngineeringDashboard';
import QAModule from './components/engineering/QAModule';
import DeploymentCenter from './components/engineering/DeploymentCenter';
import CodingStandards from './components/engineering/CodingStandards';

// Reusable Components
const SolidCard = ({ children, className = "", isDark = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className={`${isDark ? 'bg-[#1e1e2d] text-white' : 'bg-white text-gray-800 border border-gray-100'} shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-2xl p-6 transition-all duration-300 relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({ label, value, trend, trendUp, isDark, icon: Icon }) => (
  <SolidCard isDark={isDark} className="flex flex-col">
    <div className="flex justify-between items-start mb-6">
       <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-50'}`}>
         {Icon && <Icon size={20} className={isDark ? 'text-white' : 'text-gray-600'} />}
       </div>
       <ArrowRight size={18} className={`${isDark ? 'text-white/50 group-hover:text-white' : 'text-gray-300 group-hover:text-gray-600'} transition-colors cursor-pointer`} />
    </div>
    <p className={`${isDark ? 'text-white/70' : 'text-gray-500'} text-sm font-medium mb-1`}>{label}</p>
    <h3 className={`text-[32px] leading-tight font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{value}</h3>
    <p className={`${trendUp ? 'text-emerald-500' : 'text-rose-500'} text-sm font-medium flex items-center gap-1`}>
      {trendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />} {trend}
    </p>
  </SolidCard>
);

// Protected Route Simulation
const ProtectedRoute = ({ children, user }) => {
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVerifying(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isVerifying) return <AuthLoading />;
  if (!user) return <Navigate to="/login" />;

  return children;
};

const DashboardContent = ({ user, logout }) => {
  const [toasts, setToasts] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [cloningProject, setCloningProject] = useState(null);
  const [isCloning, setIsCloning] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState('Standard');
  const [isExportProcessActive, setIsExportProcessActive] = useState(false);
  const [exportProcessType, setExportProcessType] = useState('csv');

  const navigate = useNavigate();
  const location = useLocation();

  const addToast = (msg) => {
    const id = Date.now();
    setToasts([...toasts, { id, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  };

  const handlePaletteAction = (actionId) => {
    setIsPaletteOpen(false);
    switch (actionId) {
      case 'new-project': setIsCreatingProject(true); break;
      case 'go-kanban': navigate('/kanban'); break;
      case 'settings': navigate('/branding'); break;
      case 'add-member': navigate('/team'); break;
      case 'go-roadmap': navigate('/roadmap'); break;
      default: break;
    }
  };

  const navGroups = [
    {
      title: 'Workspace',
      items: [
        { id: 'Workspace Dashboard', icon: LayoutDashboard, path: '/' },
        { id: 'Project Management', icon: Briefcase, path: '/projects' },
        { id: 'Kanban Board', icon: Columns, path: '/kanban' },
        { id: 'Task Management', icon: CheckSquare, path: '/tasks' },
      ]
    },
    {
      title: 'Data & Sync',
      items: [
        { id: 'Data Export', icon: Download, path: '/export' },
        { id: 'Google Sheet Sync', icon: Cloud, path: '/sync' },
      ]
    },
    {
      title: 'Administration',
      items: [
        { id: 'Workspace Settings', icon: Palette, path: '/admin/workspace' },
        { id: 'Team & Roles', icon: Users, path: '/admin/team' },
        { id: 'Project Templates', icon: Layers, path: '/admin/project-templates' },
        { id: 'Export & Sync', icon: Cloud, path: '/admin/google-sync' },
        { id: 'Access Control', icon: ShieldCheck, path: '/admin/permissions' },
      ]
    }
  ];

  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-[#f4f5f8] text-gray-800 font-main flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#1e1e2d] text-[#9899ac] flex flex-col z-50">
        <div className="flex items-center gap-3 h-20 px-8 mb-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1e1e2d]">
            <Code2 size={16} className="text-[#1e1e2d]" />
          </div>
          <span className="font-heading font-bold text-lg text-white tracking-tighter">Nichekala</span>
        </div>

        <nav className="flex-grow overflow-y-auto scrollbar-hide pb-8">
          {navGroups.map((group, idx) => (
            <div key={group.title} className={idx !== 0 ? 'mt-8' : ''}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 px-8 mb-3">{group.title}</h3>
              <div className="space-y-1 px-4">
                {group.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'Projects') setSelectedProject(null);
                      navigate(item.path);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentPath === item.path || (currentPath === '/' && item.id === 'Dashboard')
                        ? 'bg-[#2b2b40] text-white' 
                        : 'hover:bg-[#2b2b40] hover:text-white'
                    }`}
                  >
                    <item.icon size={18} className={currentPath === item.path || (currentPath === '/' && item.id === 'Dashboard') ? 'text-white' : 'opacity-70'} />
                    <span className="font-medium text-sm">{item.id}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2b2b40] hover:text-white transition-all text-sm font-medium">
            <Settings2 size={18} className="opacity-70" />
            Workspace Settings
          </button>
          <button onClick={logout} className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-all text-sm font-medium mt-1">
            <LogOut size={18} className="opacity-70" />
            Logout Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-24 bg-[#f4f5f8] flex items-center justify-between px-8 z-40">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}</h1>
            <p className="text-gray-500 text-sm mt-1">Here is the overview of your workspace today.</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search or run command..." 
                onClick={() => setIsPaletteOpen(true)}
                readOnly
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none cursor-pointer hover:border-gray-300 transition-colors w-64 shadow-sm"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded-md border border-gray-200 text-[10px] font-bold text-gray-400">
                <Command size={10} /> <span>K</span>
              </div>
            </div>
            
            <button onClick={() => addToast('No new notifications')} className="relative text-gray-500 hover:text-gray-800 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </button>
            
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800 leading-tight">{user.name}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{user.role}</p>
              </div>
              <img src={`https://ui-avatars.com/api/?name=${user.name}&background=10b981&color=fff`} className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" alt="User" />
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="p-8 pt-4 flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<DashboardOverview onCreateProject={() => setIsCreatingProject(true)} />} />
              <Route
                path="/projects"
                element={
                  selectedProject ? (
                    <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
                  ) : (
                    <ProjectList
                      onProjectSelect={(p) => setSelectedProject(p)}
                      onCreateProject={() => setIsCreatingProject(true)}
                      onClone={(p) => setCloningProject(p)}
                    />
                  )
                }
              />
              <Route path="/kanban" element={<KanbanBoard template={activeWorkflow} />} />
              <Route path="/team" element={<TeamManagement />} />
              <Route path="/analytics" element={<TeamAnalytics />} />
              <Route
                path="/export"
                element={
                  <ExportCenter
                    onExport={(type) => {
                      setExportProcessType(type);
                      setIsExportProcessActive(true);
                    }}
                  />
                }
              />
              <Route
                path="/sync"
                element={
                  <ExportCenter
                    onExport={(type) => {
                      setExportProcessType(type);
                      setIsExportProcessActive(true);
                    }}
                  />
                }
              />

              {/* Admin Routes */}
              <Route path="/admin" element={<Navigate to="/admin/workspace" />} />
              <Route path="/admin/workspace" element={<WorkspaceSettings />} />
              <Route path="/admin/team" element={<TeamManagement />} />
              <Route path="/admin/project-templates" element={<TemplateManager />} />
              <Route path="/admin/google-sync" element={<ExportCenter onExport={(type) => { setExportProcessType(type); setIsExportProcessActive(true); }} />} />
              <Route path="/admin/permissions" element={<PermissionsMatrix />} />

              {/* Engineering Routes */}
              <Route path="/roadmap" element={<RoadmapDashboard />} />
              <Route path="/roadmap/planning" element={<SprintRoadmap />} />
              <Route path="/roadmap/qa" element={<QAModule />} />
              <Route path="/roadmap/deployment" element={<DeploymentCenter />} />
              <Route path="/roadmap/standards" element={<CodingStandards />} />

              <Route path="*" element={<PlaceholderContent />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>



      {/* Overlays & Modals */}
      <AnimatePresence>
        {isCreatingProject && (
          <CreateProject
            onClose={() => setIsCreatingProject(false)}
            onComplete={(template) => {
              setActiveWorkflow(template);
              setIsCreatingProject(false);
              navigate('/kanban');
              addToast('Project Workspace Generated Successfully!');
            }}
          />
        )}

        {cloningProject && (
          <CloneProjectModal
            sourceProject={cloningProject}
            onClose={() => setCloningProject(null)}
            onClone={(formData) => {
              setCloningProject(null);
              setIsCloning(true);
            }}
          />
        )}

        {isCloning && (
          <CloneProcessScreen
            onComplete={() => {
              setIsCloning(false);
              navigate('/kanban');
              addToast('Project Cloned & Reset Successfully!');
            }}
          />
        )}

        {isExportProcessActive && (
          <ExportProcess
            type={exportProcessType}
            onComplete={() => {
              setIsExportProcessActive(false);
              addToast(`${exportProcessType === 'csv' ? 'CSV Artifact' : 'Google Sheet'} generated successfully!`);
            }}
          />
        )}

        {isPaletteOpen && (
          <CommandPalette
            isOpen={isPaletteOpen}
            onClose={setIsPaletteOpen}
            onAction={handlePaletteAction}
          />
        )}
      </AnimatePresence>

      {/* Toasts */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[150]">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div key={toast.id} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }} className="bg-white border border-gray-100 p-4 rounded-xl shadow-xl flex items-center gap-3 min-w-[300px]">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-sm font-medium text-gray-800">{toast.msg}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const DashboardOverview = ({ onCreateProject }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

    <div className="grid grid-cols-4 gap-6 mb-8">
      <StatCard label="Total Projects" value="24" trend="+12% this month" trendUp={true} isDark={true} icon={Briefcase} />
      <StatCard label="Active Tasks" value="142" trend="5 new today" trendUp={true} isDark={false} icon={CheckSquare} />
      <StatCard label="Milestones" value="89%" trend="Target: 95%" trendUp={true} isDark={false} icon={Layers} />
      <StatCard label="Productivity" value="9.4" trend="Top 1% industry" trendUp={true} isDark={false} icon={Activity} />
    </div>

    <div className="grid grid-cols-3 gap-6 mb-8">
      <SolidCard className="col-span-2 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-8">System Health & Traffic</h3>
        <div className="flex-1 flex items-end gap-5">
          {[60, 85, 45, 70, 90, 30, 50, 75, 40, 80, 55, 65].map((h, i) => (
            <div key={i} className="flex-grow flex flex-col items-center gap-4">
              <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-emerald-400 to-emerald-200 rounded-t-md shadow-sm opacity-80 hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
            </div>
          ))}
        </div>
      </SolidCard>

      <SolidCard>
        <h3 className="text-lg font-bold text-gray-800 mb-6">Security Monitoring</h3>
        <div className="space-y-4">
          {[
            { event: 'New device login', time: '2m ago', icon: Shield, color: 'text-blue-500', bg: 'bg-blue-50' },
            { event: 'API Key Rotate', time: '1h ago', icon: Key, color: 'text-amber-500', bg: 'bg-amber-50' },
            { event: 'Admin Session', time: '3h ago', icon: Lock, color: 'text-emerald-500', bg: 'bg-emerald-50' }
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group border border-transparent hover:border-gray-100">
              <div className={`w-10 h-10 rounded-xl ${log.bg} flex items-center justify-center ${log.color} group-hover:scale-110 transition-transform`}>
                <log.icon size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">{log.event}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all">Audit Full Logs</button>
      </SolidCard>
    </div>
  </motion.div>
);

const PlaceholderContent = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <SolidCard className="h-96 flex flex-col items-center justify-center text-center">
      <LayoutDashboard size={48} className="text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-gray-800 mb-2">Module Offline</h2>
      <p className="text-gray-500 text-sm">Architecting this segment for the next rollout.</p>
    </SolidCard>
  </motion.div>
);

const App = () => {
  const [user, setUser] = useState({ name: 'Nichekala', role: 'Admin' });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/denied" element={<AuthErrorPage type="denied" />} />
        <Route path="/forbidden" element={<AuthErrorPage type="forbidden" />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute user={user}>
              <DashboardContent user={user} logout={() => setUser(null)} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
