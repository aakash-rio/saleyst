import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, MoreHorizontal, Calendar, Users, 
  CheckCircle2, Clock, Filter, Search, ChevronRight,
  MessageSquare, Paperclip, Zap,
  Layout, X, Send, History, 
  Hash, BarChart3, Sparkles, UserPlus
} from 'lucide-react';

// Priority Styles (Light Theme)
const priorityStyles = {
  Urgent: 'bg-rose-50 text-rose-600 border-rose-200 shadow-sm animate-pulse',
  High: 'bg-amber-50 text-amber-600 border-amber-200 shadow-sm',
  Medium: 'bg-blue-50 text-blue-600 border-blue-200',
  Low: 'bg-emerald-50 text-emerald-600 border-emerald-200'
};

const TaskCard = ({ task, onClick, onDragStart }) => (
  <motion.div 
    layoutId={`task-${task.id}`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -2 }}
    draggable
    onDragStart={(e) => onDragStart(e, task.id)}
    onClick={() => onClick(task)}
    className="bg-white border border-gray-200 rounded-2xl p-4 group cursor-pointer transition-all shadow-sm hover:shadow-md hover:border-blue-300 select-none relative"
  >
    <div className="flex justify-between items-start mb-3">
      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${priorityStyles[task.priority]}`}>
        {task.priority}
      </span>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
      </div>
    </div>

    <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{task.title}</h4>
    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{task.description}</p>
    
    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium">
      <div className="flex items-center gap-1"><MessageSquare size={14} /> {task.comments || 0}</div>
      <div className="flex items-center gap-1"><Paperclip size={14} /> {task.files || 0}</div>
    </div>

    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
      <div className="flex -space-x-1.5">
        {task.assignees.map((a, i) => (
          <img key={i} src={`https://ui-avatars.com/api/?name=${a}&background=f3f4f6&color=1f2937`} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" alt={a} />
        ))}
      </div>
      <span className={`text-[10px] flex items-center gap-1 font-bold px-2 py-1 rounded-md ${task.isOverdue ? 'bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-500'}`}>
        <Calendar size={12} /> {task.dueDate}
      </span>
    </div>
  </motion.div>
);

const TaskDrawer = ({ task, isOpen, onClose, onAddComment }) => {
  const [comment, setComment] = useState("");

  if (!task) return null;

  const handleSendComment = () => {
    if (comment.trim()) {
      onAddComment(task.id, comment);
      setComment("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[200] bg-gray-900/40 backdrop-blur-sm" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-screen w-full max-w-2xl bg-white border-l border-gray-200 z-[201] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Hash size={20} /></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Task Details</p>
                  <h3 className="text-lg font-bold text-gray-900">NK-{task.id}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-all"><History size={20} /></button>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-all"><X size={20} /></button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto scrollbar-hide p-8 flex gap-8">
              <div className="flex-grow space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{task.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-md border uppercase tracking-wider ${priorityStyles[task.priority]}`}>{task.priority} Priority</span>
                    <div className="h-4 w-[1px] bg-gray-200" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5"><Clock size={12} /> Created recently</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Description</h4>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <p className="text-sm text-gray-700 leading-relaxed">{task.description}</p>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Timeline & Activity</h4>
                  <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                    {task.activity && task.activity.map((act, i) => (
                      <div key={i} className="flex gap-4 relative z-10">
                        <div className={`w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm ${act.type === 'comment' ? 'text-blue-500' : 'text-emerald-500'}`}>
                          {act.type === 'comment' ? <MessageSquare size={12} /> : <Zap size={12} />}
                        </div>
                        <div className="pt-1">
                          <p className="text-xs font-semibold text-gray-900">{act.user} <span className="text-gray-500 font-normal">{act.action}</span></p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Input Area */}
                  <div className="relative mt-6 group">
                    <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-wider text-blue-600">Add Comment</div>
                    <textarea 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Type a message..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 pr-20 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none h-32 transition-all shadow-sm" 
                    />
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-all"><Paperclip size={18} /></button>
                      <button onClick={handleSendComment} className="bg-blue-600 p-2.5 rounded-xl text-white shadow-sm hover:bg-blue-700 transition-all"><Send size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-64 space-y-8 pl-8 border-l border-gray-100">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Assignees</h4>
                  <div className="space-y-3">
                    {task.assignees.map((a, i) => (
                      <div key={i} className="flex items-center gap-3 group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-all">
                        <img src={`https://ui-avatars.com/api/?name=${a}&background=f3f4f6&color=1f2937`} className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" alt={a} />
                        <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{a}</span>
                      </div>
                    ))}
                    <button className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-dashed border-gray-300 rounded-xl transition-all shadow-sm">
                      <UserPlus size={14} /> Assign Staff
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Task Metadata</h4>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Due Date</p>
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-900"><Calendar size={14} className="text-gray-400" /> {task.dueDate}</div>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Stage</p>
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600"><Layout size={14} /> {task.stage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const KanbanBoard = ({ template = 'Standard' }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskStage, setNewTaskStage] = useState('To Do');
  
  const [newTaskData, setNewTaskData] = useState({
    title: '', description: '', priority: 'Medium', dueDate: '', assignees: ['Nichekala']
  });

  const [tasks, setTasks] = useState([
    { id: 101, title: 'Structural Load Analysis', description: 'Reviewing the load-bearing requirements for the central atrium.', stage: 'In Progress', priority: 'Urgent', assignees: ['Sarah Chen', 'Marcus Lee'], dueDate: 'Oct 15', comments: 12, files: 4, progress: 65, isOverdue: false, order: 0, activity: [{user: 'Marcus Lee', action: 'moved task to In Progress', time: '2h ago', type: 'move'}] },
    { id: 102, title: 'Client Moodboard Approval', description: 'Gathering final feedback on material palettes.', stage: 'Review', priority: 'High', assignees: ['Elena Vogel'], dueDate: 'Oct 12', comments: 8, files: 2, progress: 90, isOverdue: true, order: 0, activity: [] },
    { id: 103, title: 'Site Survey Protocol', description: 'Establishing safety protocols for the next field visit.', stage: 'To Do', priority: 'Medium', assignees: ['Julian Thorne'], dueDate: 'Oct 20', comments: 0, files: 1, progress: 0, isOverdue: false, order: 0, activity: [] },
  ]);

  const stages = ['To Do', 'In Progress', 'Review', 'Approval', 'Completed'];

  // Drag and Drop Handlers
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleDrop = (e, targetStage) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (!taskId) return;

    setTasks(prev => prev.map(t => {
      if (t.id === parseInt(taskId) && t.stage !== targetStage) {
        return { 
          ...t, 
          stage: targetStage,
          activity: [{ user: 'Nichekala', action: `moved task to ${targetStage}`, time: 'just now', type: 'move' }, ...(t.activity || [])]
        };
      }
      return t;
    }));
  };

  const handleCreateTask = () => {
    if (!newTaskData.title) return;
    const newTask = {
      id: Date.now(),
      ...newTaskData,
      stage: newTaskStage,
      comments: 0, files: 0, progress: 0, isOverdue: false, order: tasks.length,
      activity: [{ user: 'Nichekala', action: `created task in ${newTaskStage}`, time: 'just now', type: 'move' }]
    };
    setTasks([newTask, ...tasks]);
    setIsAddingTask(false);
    setNewTaskData({ title: '', description: '', priority: 'Medium', dueDate: '', assignees: ['Nichekala'] });
  };

  const handleAddComment = (taskId, commentText) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          comments: (t.comments || 0) + 1,
          activity: [{ user: 'Nichekala', action: `commented: "${commentText}"`, time: 'just now', type: 'comment' }, ...(t.activity || [])]
        };
      }
      return t;
    }));
    // Also update selected task if open
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask(prev => ({
        ...prev,
        comments: (prev.comments || 0) + 1,
        activity: [{ user: 'Nichekala', action: `commented: "${commentText}"`, time: 'just now', type: 'comment' }, ...(prev.activity || [])]
      }));
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500 relative overflow-hidden bg-[#f4f5f8]">
      {/* Board Header & Top Nav */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Kanban Board</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-2.5 py-1 shadow-sm">
              <Layout size={12} className="text-blue-500" />
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{template} Workflow</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => { setNewTaskStage('To Do'); setIsAddingTask(true); }} 
            className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
          >
            <Plus size={16} /> Create Task
          </button>
        </div>
      </div>

      <div className="flex-grow flex gap-6 overflow-x-auto pb-4 scrollbar-hide items-start">
        {stages.map((stage) => (
          <div 
            key={stage} 
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, stage)}
            className="min-w-[320px] max-w-[320px] flex flex-col bg-gray-100/50 rounded-3xl border border-gray-200/60 p-2 h-full max-h-[calc(100vh-200px)]"
          >
            <div className="flex justify-between items-center px-3 py-2 mb-2">
              <div className="flex items-center gap-2.5">
                <h3 className="text-sm font-bold text-gray-800">{stage}</h3>
                <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded-full text-gray-500 shadow-sm border border-gray-100">
                  {tasks.filter(t => t.stage === stage).length}
                </span>
              </div>
              <button 
                onClick={() => { setNewTaskStage(stage); setIsAddingTask(true); }}
                className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto scrollbar-hide flex flex-col gap-3 pb-2 px-1">
              <AnimatePresence>
                {tasks
                  .filter(t => t.stage === stage)
                  .map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onClick={setSelectedTask} 
                      onDragStart={handleDragStart} 
                    />
                  ))}
              </AnimatePresence>
              {tasks.filter(t => t.stage === stage).length === 0 && (
                 <div className="h-24 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                   Drop Tasks Here
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Overlays & Drawers */}
      <TaskDrawer task={selectedTask} isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} onAddComment={handleAddComment} />
      
      {/* Create Task Modal */}
      <AnimatePresence>
        {isAddingTask && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAddingTask(false)} className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="w-full max-w-xl bg-white border border-gray-100 rounded-3xl p-8 relative z-10 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-gray-900">Create New Task</h3>
                 <button onClick={() => setIsAddingTask(false)} className="text-gray-400 hover:text-gray-700"><X size={20} /></button>
              </div>
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">Task Title</label>
                  <input value={newTaskData.title} onChange={e => setNewTaskData({...newTaskData, title: e.target.value})} type="text" placeholder="e.g. Facade Geometry Optimization" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:bg-white focus:border-blue-500 outline-none shadow-sm transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">Description</label>
                  <textarea value={newTaskData.description} onChange={e => setNewTaskData({...newTaskData, description: e.target.value})} placeholder="Add details..." rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:bg-white focus:border-blue-500 outline-none shadow-sm transition-colors resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">Stage</label>
                    <select value={newTaskStage} onChange={e => setNewTaskStage(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none cursor-pointer">
                      {stages.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">Priority</label>
                    <select value={newTaskData.priority} onChange={e => setNewTaskData({...newTaskData, priority: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none cursor-pointer">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">Due Date</label>
                    <input value={newTaskData.dueDate} onChange={e => setNewTaskData({...newTaskData, dueDate: e.target.value})} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none cursor-pointer text-gray-700" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">Assign To</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none cursor-pointer">
                      <option>Nichekala (Me)</option>
                      <option>Sarah Chen</option>
                      <option>Marcus Lee</option>
                    </select>
                  </div>
                </div>
                <button onClick={handleCreateTask} disabled={!newTaskData.title} className="w-full bg-blue-600 disabled:bg-blue-300 text-white font-bold py-3.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors mt-2 text-sm">
                  Add Task
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KanbanBoard;
