import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  ExternalLink,
  Lock
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { siteSettings } = useData();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-800 to-red-950 p-1 flex items-center justify-center border border-amber-400/40">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg uppercase tracking-wide">
                  UET Academy
                </h3>
                <p className="text-xs text-amber-400 font-medium">UET Lahore Main Campus</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering engineers, IT professionals, and aspiring students with practical industrial competencies certified by the century-old University of Engineering and Technology, Lahore.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleNav('verify')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Instant Certificate Verification</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-red-900 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Short Courses Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('verify')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium text-amber-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" /> CNIC / Mobile Verification
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Admissions & Challan Form
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> About UET Academy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('notices')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Latest Announcements
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-red-900 pb-2 inline-block">
              Top Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>AI & Machine Learning (Python)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>AutoCAD 2D / 3D Civil & Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Autodesk Revit BIM Modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Primavera P6 Project Planning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>German Language (Goethe A1/A2)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-red-900 pb-2 inline-block">
              Campus Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {siteSettings.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteSettings.phonePrimary} / {siteSettings.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteSettings.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                  <p className="text-amber-300">Weekend Classes: Sat - Sun 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} UET Academy Lahore — University of Engineering and Technology. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin CMS Portal</span>
            </button>
            <span>•</span>
            <span className="text-slate-500">Official Portal Version 2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
