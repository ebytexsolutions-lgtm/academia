import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Building, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Compass, 
  Target, 
  BookOpen
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const AboutPage: React.FC = () => {
  const { siteSettings } = useData();

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
              Institutional Heritage Since 1921
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
              About UET Academy Lahore
            </h1>
            <p className="text-xs sm:text-base text-amber-100 leading-relaxed">
              Continuing education and skill acceleration wing operating under the University of Engineering and Technology Lahore.
            </p>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
              A Legacy of Engineering Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {siteSettings.aboutHistory}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-red-900 block text-sm">Founded 1921</span>
                <span className="text-slate-500">Over 100 years of premier engineering training</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-red-900 block text-sm">Main Campus</span>
                <span className="text-slate-500">Dept. of Architectural Engineering & Design</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-amber-400/30">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="University Campus Architecture"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-900 text-white flex items-center justify-center">
              <Target className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-bold text-lg font-serif text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {siteSettings.aboutMission}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg font-serif text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {siteSettings.aboutVision}
            </p>
          </div>
        </div>

        {/* Training Facilities & Labs */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              State-of-the-Art Training Labs
            </h3>
            <p className="text-xs text-slate-500">
              Students at UET Academy enjoy hands-on access to advanced engineering suites and computing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">CAD / BIM Simulation Lab</h4>
              <p className="text-xs text-slate-600">
                High-performance graphics workstations equipped with licensed Autodesk AutoCAD, Revit Architecture, and 3ds Max.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">AI & Software Engineering Lab</h4>
              <p className="text-xs text-slate-600">
                Equipped for modern machine learning, deep neural network training with PyTorch/TensorFlow, and Full-Stack web development.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">Language & Audio-Visual Studio</h4>
              <p className="text-xs text-slate-600">
                Interactive multimedia booths for German language phonetics, spoken English, and international exam prep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
