import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  GraduationCap, 
  CreditCard, 
  Building2, 
  Calendar, 
  ArrowRight,
  Printer
} from 'lucide-react';
import { Course } from '../types';
import { useData } from '../context/DataContext';

interface EnrollmentModalProps {
  course?: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ course, isOpen, onClose }) => {
  const { courses, submitApplication, siteSettings } = useData();

  const [selectedCourseId, setSelectedCourseId] = useState<string>(course ? course.id : (courses[0]?.id || ''));
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('BSc / BS (In Progress / Completed)');
  const [city, setCity] = useState('Lahore');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const activeCourse = courses.find(c => c.id === (course ? course.id : selectedCourseId)) || courses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !cnic || !mobileNumber) {
      alert('Please fill out all required fields (Full Name, CNIC, and Mobile Number).');
      return;
    }

    const appId = submitApplication({
      fullName,
      fatherName: fatherName || 'Guardian',
      cnic,
      mobileNumber,
      email: email || `${mobileNumber}@student.uet`,
      courseId: activeCourse.id,
      courseTitle: activeCourse.title,
      education,
      city
    });

    setApplicationId(appId);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setFatherName('');
    setCnic('');
    setMobileNumber('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                UET Academy Online Admission
              </h3>
              <p className="text-xs text-amber-200">
                Official Application Form • Spring 2026 Batch
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-amber-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            /* Success State with Challan Preview */
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Application Received Successfully
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                  Welcome to UET Academy, {fullName}!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your provisional admission voucher has been generated. Please note your application reference.
                </p>
              </div>

              {/* Reference Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Application ID:</span>
                  <span className="font-mono font-bold text-red-900 text-sm">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Selected Course:</span>
                  <span className="font-semibold text-slate-900 text-right">{activeCourse.title}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Course Fee:</span>
                  <span className="font-bold text-emerald-700">PKR {activeCourse.fee.toLocaleString()}/-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Class Timing:</span>
                  <span className="text-slate-700 font-medium">{activeCourse.timings}</span>
                </div>
              </div>

              {/* Bank Challan Instructions */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-left space-y-1.5 text-xs text-amber-950">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <CreditCard className="w-4 h-4 text-amber-700" />
                  Fee Payment via HBL Challan / Online Transfer:
                </p>
                <p>• Bank: <strong>{siteSettings.bankInfo.bankName} ({siteSettings.bankInfo.branch})</strong></p>
                <p>• Title: <strong>{siteSettings.bankInfo.accountTitle}</strong></p>
                <p>• A/C No: <strong className="font-mono">{siteSettings.bankInfo.accountNo}</strong></p>
                <p>• IBAN: <strong className="font-mono text-[11px]">{siteSettings.bankInfo.iban}</strong></p>
                <p className="text-[11px] text-amber-800 pt-1">
                  Send proof of deposit/challan receipt with Application ID <strong>{applicationId}</strong> via WhatsApp to <strong>{siteSettings.mobileWhatsApp}</strong>.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-slate-300"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="flex-1 py-2.5 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wide"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Admission Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Selected Course Display or Selector */}
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Enrolling Course <span className="text-red-600">*</span>
                </label>
                {!course ? (
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none text-xs font-medium"
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.title} — PKR {c.fee.toLocaleString()} ({c.duration})
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">{activeCourse.title}</div>
                      <div className="text-[11px] text-slate-600">{activeCourse.duration} • {activeCourse.timings}</div>
                    </div>
                    <span className="font-bold text-xs text-red-900 bg-white px-2.5 py-1 rounded-lg border border-red-200">
                      PKR {activeCourse.fee.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Candidate Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none"
                  />
                </div>

                {/* Father Name */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Father / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Mehmood"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* CNIC */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    CNIC / B-Form Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="35202-1234567-1"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none font-mono"
                  />
                </div>

                {/* Mobile / WhatsApp */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Mobile / WhatsApp No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0300-1234567"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none"
                  />
                </div>

                {/* Education */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Qualification / Education
                  </label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none text-xs"
                  >
                    <option value="Matric / O-Levels">Matric / O-Levels</option>
                    <option value="Intermediate / FSc / ICS / A-Levels">Intermediate / FSc / ICS / A-Levels</option>
                    <option value="DAE (Civil / Mech / Elec)">DAE (Diploma of Associate Engineer)</option>
                    <option value="BSc / BS (In Progress / Completed)">BSc / BS / B.Arch</option>
                    <option value="Master / MS / Professional">Master / MS / Professional</option>
                  </select>
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  City of Residence
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lahore, Faisalabad, Islamabad"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:outline-none"
                />
              </div>

              {/* Notice snippet */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
                Note: Classes are held at the Department of Architectural Engineering & Design, UET Main Campus Lahore. After submitting, your application will be verified and you can deposit fees at HBL UET Branch.
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Admission Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
