import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  CheckCircle, 
  BookOpen, 
  ChevronRight, 
  Filter,
  GraduationCap,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Course, CourseCategory } from '../types';
import { EnrollmentModal } from '../components/EnrollmentModal';

export const CoursesPage: React.FC = () => {
  const { courses } = useData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);
  const [activeCourseDetails, setActiveCourseDetails] = useState<Course | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const categories = [
    'All',
    'Information Technology',
    'Engineering & CAD',
    'Project & Quality Management',
    'Digital Skills & Design',
    'Languages & Communication',
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnrollClick = (course: Course) => {
    setSelectedCourseForEnroll(course);
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekend & Evening Professional Programs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">
              Explore Our Professional Courses
            </h1>
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
              Equip yourself with practical, high-income engineering and tech skills supervised by senior faculty at UET Lahore. Every program includes hands-on labs and official UET certificate issuance.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <GraduationCap className="w-96 h-96 text-white" />
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search courses, e.g. Python, AutoCAD, BIM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-red-900 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Course Count indicator */}
            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredCourses.length}</span> of {courses.length} courses
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-red-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image banner */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <img
                  src={course.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-red-900/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md shadow-xs">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-medium text-amber-200 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    {course.deliveryMode}
                  </span>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-red-900 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Key specs */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-red-800" /> Duration:
                    </span>
                    <span className="font-semibold text-slate-800">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-red-800" /> Timings:
                    </span>
                    <span className="font-medium text-slate-800 text-[11px] truncate max-w-[180px] text-right">
                      {course.timings}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <User className="w-3.5 h-3.5 text-red-800" /> Instructor:
                    </span>
                    <span className="font-semibold text-slate-800">{course.instructor}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Course Fee</span>
                    <span className="text-base sm:text-lg font-extrabold text-red-950 font-sans">
                      PKR {course.fee.toLocaleString()}/-
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCourseDetails(course)}
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                      title="View Syllabus Outline"
                    >
                      Outline
                    </button>
                    <button
                      onClick={() => handleEnrollClick(course)}
                      className="px-4 py-2 bg-red-900 hover:bg-red-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1"
                    >
                      <span>Apply</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredCourses.length === 0 && (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No courses found matching your criteria</h3>
            <p className="text-xs text-slate-500">Try adjusting your keyword or reset the category filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-red-900 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Course Details Modal (Syllabus & Prerequisites) */}
      {activeCourseDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-900/40 px-2 py-0.5 rounded">
                    {activeCourseDetails.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    {activeCourseDetails.title}
                  </h3>
                  <p className="text-xs text-amber-100">
                    Instructor: {activeCourseDetails.instructor} ({activeCourseDetails.instructorTitle})
                  </p>
                </div>
                <button
                  onClick={() => setActiveCourseDetails(null)}
                  className="p-1 rounded-lg text-amber-200 hover:text-white hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">
                  Course Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {activeCourseDetails.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Duration</span>
                  <strong className="text-slate-900">{activeCourseDetails.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Timings</span>
                  <strong className="text-slate-900">{activeCourseDetails.timings}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Delivery</span>
                  <strong className="text-slate-900">{activeCourseDetails.deliveryMode}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Fee</span>
                  <strong className="text-red-900 font-bold">PKR {activeCourseDetails.fee.toLocaleString()}/-</strong>
                </div>
              </div>

              {/* Syllabus breakdown */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-red-900" />
                  <span>Module Syllabus Outline</span>
                </h4>
                <div className="space-y-2">
                  {activeCourseDetails.syllabus.map((item, idx) => (
                    <div key={idx} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-800 font-medium text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Prerequisites & Eligibility:</strong>
                <span>{activeCourseDetails.prerequisites}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setActiveCourseDetails(null)}
                className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700 font-semibold text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const c = activeCourseDetails;
                  setActiveCourseDetails(null);
                  handleEnrollClick(c);
                }}
                className="px-6 py-2 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5"
              >
                <span>Apply for this Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourseForEnroll}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </div>
  );
};
