import React, { useState } from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Calendar, 
  Search, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ChevronRight,
  TrendingUp,
  Briefcase,
  FileCheck2,
  Bell
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Course } from '../types';
import { EnrollmentModal } from '../components/EnrollmentModal';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenQuickApply: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenQuickApply }) => {
  const { siteSettings, courses, notices, verifyCertificate } = useData();

  const [heroCnic, setHeroCnic] = useState('');
  const [heroMobile, setHeroMobile] = useState('');
  const [quickVerifyError, setQuickVerifyError] = useState('');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);

  const featuredCourses = courses.filter(c => c.featured).slice(0, 4);

  const handleQuickVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroCnic.trim() || !heroMobile.trim()) {
      setQuickVerifyError('Please enter both CNIC and Mobile Number.');
      return;
    }
    // Navigate to verify page
    setActiveTab('verify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnrollCourse = (course: Course) => {
    setSelectedCourseForEnroll(course);
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-950 via-red-900 to-amber-950 text-white overflow-hidden pt-12 pb-20 lg:pb-28">
        {/* Architectural grid background styling */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              {/* Institution Emblem Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>University of Engineering & Technology Lahore (Est. 1921)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-serif text-white">
                {siteSettings.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-2xl">
                {siteSettings.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-red-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-red-950" />
                  <span>Browse All Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => { setActiveTab('verify'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3.5 bg-red-950/60 hover:bg-red-950 text-white border border-amber-400/40 font-bold text-xs sm:text-sm tracking-wide rounded-xl backdrop-blur-xs transition-all flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Verify Certificate</span>
                </button>
              </div>

              {/* Badges strip */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-amber-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Weekend & Evening Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>HBL Fee Challan Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Official UET Lahore Credential</span>
                </div>
              </div>
            </div>

            {/* Right Col: Instant Verification & Enrollment Quick Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 text-slate-900 space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 text-red-900 font-extrabold text-base uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                    <span>Instant Certificate Check</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Quickly verify candidate credentials with CNIC & Mobile
                  </p>
                </div>

                <form onSubmit={handleQuickVerifySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Student CNIC Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 35202-1234567-1"
                      value={heroCnic}
                      onChange={(e) => setHeroCnic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-red-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Registered Mobile Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 0300-1234567"
                      value={heroMobile}
                      onChange={(e) => setHeroMobile(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-red-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {quickVerifyError && (
                    <p className="text-[11px] text-red-600 font-medium">{quickVerifyError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Certificate Database</span>
                  </button>
                </form>

                {/* Admission Intake Notice in Widget */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block">
                      Admissions Open
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      Spring 2026 Batch Intake
                    </span>
                  </div>
                  <button
                    onClick={onOpenQuickApply}
                    className="px-3 py-1.5 bg-red-900 hover:bg-red-950 text-white rounded-lg text-xs font-bold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Counter Section */}
      <section className="bg-slate-900 text-white py-8 border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-amber-400 font-serif">100+</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Years Engineering Heritage</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-amber-400 font-serif">25,000+</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Alumni & Trainees Certified</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-amber-400 font-serif">{courses.length}+</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Industry-Ready Courses</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-amber-400 font-serif">100%</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Online Verifiable Credentials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Flagship Training Programs
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">
                Popular Courses for Professionals & Students
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Taught by university professors and leading industrial consultants at UET Lahore Main Campus.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-red-900 hover:text-red-950 flex items-center gap-1.5 transition-colors group"
            >
              <span>View All {courses.length} Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-red-900/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-red-900 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-800" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-red-800" />
                        <span className="truncate">{course.timings}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-semibold block">Fee</span>
                    <span className="font-extrabold text-sm text-red-950 font-sans">
                      PKR {course.fee.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnrollCourse(course)}
                    className="px-3 py-1.5 bg-red-900 hover:bg-red-950 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UET Academy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-red-900 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
              The UET Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Why Choose UET Academy Lahore?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Gain industry-recognized credentials backed by Pakistan’s top engineering institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-900 text-white flex items-center justify-center shadow-md">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Official UET Certificate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive verifiable credentials certified by the Director of UET Academy and Department Chairmen, recognized by local and international firms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-900 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Industry-Centric Syllabi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courses are curated according to real market demands in software, BIM modeling, AI engineering, project planning, and international tests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-900 text-white flex items-center justify-center shadow-md">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Weekend & Evening Classes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specially scheduled on Saturdays and Sundays to accommodate working professionals, engineering staff, and university undergraduate students.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-900 text-white flex items-center justify-center shadow-md">
                <FileCheck2 className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Online CNIC Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Employers worldwide can instantly authenticate the validity of your completed credential 24/7 via national CNIC and contact lookup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-red-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-amber-400/50 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Director UET Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-amber-500 text-red-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                  Director UET Academy
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Leadership Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                Message from the Director
              </h2>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed border-l-2 border-amber-400 pl-4">
                "{siteSettings.directorMessage}"
              </blockquote>
              <div className="pt-2">
                <h4 className="font-bold text-base text-amber-300">{siteSettings.directorName}</h4>
                <p className="text-xs text-slate-400">{siteSettings.directorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notices & Announcements Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Official Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif mt-1">
                Notice Board & Circulars
              </h2>
            </div>
            <button
              onClick={() => { setActiveTab('notices'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs font-bold text-red-900 hover:text-red-950 flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.map((n) => (
              <div
                key={n.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {n.category}
                    </span>
                    <span className="text-[11px] text-slate-400">{n.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {n.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3">
                    {n.content}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs flex justify-between items-center text-red-900 font-semibold">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-red-900 to-amber-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
            Ready to Accelerate Your Career at UET Academy?
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed">
            Apply online now for upcoming weekend batches or visit the Department of Architectural Engineering & Design at UET Lahore Main Campus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuickApply}
              className="px-6 py-3 bg-white text-red-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-amber-100 transition-all"
            >
              Apply Online Now
            </button>
            <a
              href="tel:04299029216"
              className="px-6 py-3 bg-red-950/70 hover:bg-red-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-amber-400/40 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Helpline: 042-99029216</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourseForEnroll}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </div>
  );
};
