import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TemplateLibrary from './TemplateLibrary';
import TemplateBuilder from './TemplateBuilder';

const TemplateManager = () => {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleCreateTemplate = () => {
    setSelectedTemplate(null);
    setIsBuilderOpen(true);
  };

  const handleSelectTemplate = (tpl) => {
    setSelectedTemplate(tpl);
    setIsBuilderOpen(true);
  };

  const handleSaveTemplate = (data) => {
    console.log('Saving Blueprint:', data);
    setIsBuilderOpen(false);
  };

  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        {!isBuilderOpen ? (
          <motion.div 
            key="library"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TemplateLibrary 
              onSelectTemplate={handleSelectTemplate}
              onCreateTemplate={handleCreateTemplate}
            />
          </motion.div>
        ) : (
          <motion.div 
            key="builder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TemplateBuilder 
              onClose={() => setIsBuilderOpen(false)}
              onSave={handleSaveTemplate}
              initialData={selectedTemplate}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplateManager;
