import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, Palette, Layout, Globe, Save, Info, 
  Settings as SettingsIcon, Check, MousePointer2 
} from 'lucide-react';

const WorkspaceSettings = () => {
  const [workspaceName, setWorkspaceName] = useState('Nichekala Studio');
  const [selectedColor, setSelectedColor] = useState('#10b981'); // Match emerald default
  const [logoPreview, setLogoPreview] = useState(null);

  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoPreview(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Workspace & Branding</h2>
        <p className="text-gray-500 text-sm">Customize your environment, logo, and visual identity.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Settings Panel */}
        <div className="col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <SettingsIcon size={20} className="text-gray-400" />
              General Identity
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Workspace Name</label>
                <input 
                  type="text" 
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm font-medium text-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Workspace Logo</label>
                <div className="flex items-center gap-6 mt-2">
                  <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden group">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <Upload className="text-gray-400 mb-1" size={24} />
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Upload</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    <p className="font-bold text-gray-800 mb-1">Upload new logo</p>
                    <p className="text-xs mb-2">Recommended size: 256x256px.</p>
                    <p className="text-xs">Max file size: 2MB (JPG, PNG, SVG).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Palette size={20} className="text-gray-400" />
              Theme Customization
            </h3>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Primary Brand Color</p>
                <div className="flex gap-4">
                  {['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#1f2937'].map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-10 h-10 rounded-xl transition-all hover:scale-110 flex items-center justify-center shadow-sm ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    >
                      {selectedColor === color && <Check className="text-white" size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
            <Save size={18} />
            Save Workspace Settings
          </button>
        </div>

        {/* Preview Panel */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-10">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Live Interface Preview</h3>
            
            <div className="space-y-6">
              {/* Mock Dashboard Preview */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                   </div>
                   <div className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">Nexus CRM</div>
                </div>
                <div className="p-4 flex gap-4 h-48">
                  {/* Sidebar Mock */}
                  <div className="w-16 h-full bg-[#1e1e2d] rounded-lg p-2 flex flex-col items-center">
                     {logoPreview ? (
                       <img src={logoPreview} className="w-6 h-6 rounded mb-4" />
                     ) : (
                       <div className="w-6 h-6 bg-white/20 rounded mb-4" />
                     )}
                     <div className="w-8 h-2 bg-white/20 rounded mb-2" />
                     <div className="w-8 h-2 bg-white/10 rounded mb-2" />
                     <div className="w-8 h-2 bg-white/10 rounded mb-2" />
                  </div>
                  {/* Content Mock */}
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-full h-10 bg-white rounded-lg border border-gray-200 flex items-center px-2 shadow-sm">
                        <div className="w-16 h-2 rounded bg-gray-200" />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                         <div className="w-5 h-5 rounded-full" style={{ backgroundColor: selectedColor }} />
                      </div>
                    </div>
                    <div className="w-full h-20 bg-white rounded-lg border border-gray-200 p-2 shadow-sm relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 opacity-20" style={{ backgroundColor: selectedColor }} />
                       <div className="w-12 h-2 rounded bg-gray-200 mb-2 mt-1" />
                       <div className="w-24 h-4 rounded" style={{ backgroundColor: selectedColor, opacity: 0.8 }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3 border border-blue-100">
                <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700 leading-relaxed font-medium">
                  Workspace name, logo, and colors are applied globally. All users will see these brand changes instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSettings;
