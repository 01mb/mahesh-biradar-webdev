import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/common/Toast';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import ProjectModal from './components/modals/ProjectModal';
import ResumeModal from './components/modals/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Toast message={toast} />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-indigo-600/15' : 'bg-indigo-400/15'
          }`}
        />
        <div
          className={`absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-violet-600/10' : 'bg-violet-400/10'
          }`}
        />
        <div
          className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-emerald-600/10' : 'bg-emerald-400/10'
          }`}
        />
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24">
        <HeroSection
          darkMode={darkMode}
          copiedField={copiedField}
          onCopy={handleCopy}
          onNavigate={scrollToSection}
        />
        <SkillsSection darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectsSection
          darkMode={darkMode}
          onSelectProject={setActiveProjectModal}
        />
        <EducationSection darkMode={darkMode} />
        <ContactSection
          darkMode={darkMode}
          onCopy={handleCopy}
          onToast={showToast}
        />
      </main>

      <ProjectModal
        project={activeProjectModal}
        darkMode={darkMode}
        onClose={() => setActiveProjectModal(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        darkMode={darkMode}
        onCopy={handleCopy}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
}
