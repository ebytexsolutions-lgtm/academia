import React, { useState } from 'react';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { AboutPage } from './pages/AboutPage';
import { NoticesPage } from './pages/NoticesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isQuickApplyOpen, setIsQuickApplyOpen] = useState(false);

  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-200 selection:text-red-950">
        {/* Navigation Bar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenQuickApply={() => setIsQuickApplyOpen(true)}
        />

        {/* Dynamic Page Views */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage 
              setActiveTab={setActiveTab} 
              onOpenQuickApply={() => setIsQuickApplyOpen(true)}
            />
          )}

          {activeTab === 'courses' && (
            <CoursesPage />
          )}

          {activeTab === 'verify' && (
            <VerifyCertificatePage 
              onGoToCourses={() => {
                setActiveTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'admissions' && (
            <AdmissionsPage 
              onOpenApplyModal={() => setIsQuickApplyOpen(true)}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage />
          )}

          {activeTab === 'notices' && (
            <NoticesPage />
          )}

          {activeTab === 'contact' && (
            <ContactPage />
          )}

          {activeTab === 'admin' && (
            <AdminPage />
          )}
        </main>

        {/* Global Quick Apply Modal */}
        <EnrollmentModal
          isOpen={isQuickApplyOpen}
          onClose={() => setIsQuickApplyOpen(false)}
        />

        {/* Institutional Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </DataProvider>
  );
}
