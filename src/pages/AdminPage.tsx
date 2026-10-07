import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  BookOpen, 
  ShieldCheck, 
  FileText, 
  Settings, 
  Users, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  AlertCircle, 
  Eye, 
  Download, 
  Upload, 
  RefreshCw, 
  Save, 
  X,
  Phone,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Course, CertificateRecord, Notice, CourseCategory, StudentApplication } from '../types';
import { CertificateView } from '../components/CertificateView';

export const AdminPage: React.FC = () => {
  const { 
    courses, 
    addCourse, 
    updateCourse, 
    deleteCourse,
    certificates, 
    addCertificate, 
    updateCertificate, 
    deleteCertificate, 
    bulkImportCertificates,
    siteSettings, 
    updateSiteSettings,
    notices, 
    addNotice, 
    updateNotice, 
    deleteNotice,
    applications,
    updateApplicationStatus,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    resetToDefaultData
  } = useData();

  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates' | 'content' | 'notices' | 'applications'>('certificates');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Course Form States
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState<CourseCategory>('Engineering & CAD');
  const [courseDuration, setCourseDuration] = useState('8 Weeks (Weekend)');
  const [courseFee, setCourseFee] = useState<number>(20000);
  const [courseTimings, setCourseTimings] = useState('Saturday & Sunday (10:00 AM - 1:00 PM)');
  const [courseDelivery, setCourseDelivery] = useState<Course['deliveryMode']>('On-Campus');
  const [courseInstructor, setCourseInstructor] = useState('');
  const [courseInstructorTitle, setCourseInstructorTitle] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [coursePrereq, setCoursePrereq] = useState('');
  const [courseSyllabusText, setCourseSyllabusText] = useState('');
  const [courseFeatured, setCourseFeatured] = useState(false);
  const [courseBadge, setCourseBadge] = useState('New Batch');
  const [courseImage, setCourseImage] = useState('');

  // Certificate Form States
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [previewCert, setPreviewCert] = useState<CertificateRecord | null>(null);
  const [certStudentName, setCertStudentName] = useState('');
  const [certFatherName, setCertFatherName] = useState('');
  const [certCnic, setCertCnic] = useState('');
  const [certMobile, setCertMobile] = useState('');
  const [certRegNo, setCertRegNo] = useState('');
  const [certCourseTitle, setCertCourseTitle] = useState(courses[0]?.title || 'AutoCAD 2D & 3D for Civil & Architectural Engineering');
  const [certBatchSession, setCertBatchSession] = useState('Batch-44 (Spring 2026)');
  const [certIssueDate, setCertIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [certDuration, setCertDuration] = useState('8 Weeks');
  const [certGrade, setCertGrade] = useState<CertificateRecord['grade']>('A+');
  const [certMarks, setCertMarks] = useState<number>(90);
  const [certStatus, setCertStatus] = useState<CertificateRecord['status']>('Verified & Active');

  // Page Content Form States (Local copy to edit and save)
  const [contentForm, setContentForm] = useState(siteSettings);

  // Notice Form States
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState<Notice['category']>('Admissions');
  const [noticeDate, setNoticeDate] = useState('April 2026');
  const [noticeUrgent, setNoticeUrgent] = useState(false);
  const [noticeContent, setNoticeContent] = useState('');

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pinInput)) {
      setLoginError('');
      setPinInput('');
    } else {
      setLoginError('Invalid PIN! (Use default PIN: 1234 or "admin")');
    }
  };

  const showToast = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 4000);
  };

  // ---------------- COURSE HANDLERS ----------------
  const handleOpenCourseModal = (courseToEdit?: Course) => {
    if (courseToEdit) {
      setEditingCourseId(courseToEdit.id);
      setCourseTitle(courseToEdit.title);
      setCourseCategory(courseToEdit.category);
      setCourseDuration(courseToEdit.duration);
      setCourseFee(courseToEdit.fee);
      setCourseTimings(courseToEdit.timings);
      setCourseDelivery(courseToEdit.deliveryMode);
      setCourseInstructor(courseToEdit.instructor);
      setCourseInstructorTitle(courseToEdit.instructorTitle);
      setCourseDesc(courseToEdit.description);
      setCoursePrereq(courseToEdit.prerequisites);
      setCourseSyllabusText(courseToEdit.syllabus.join('\n'));
      setCourseFeatured(!!courseToEdit.featured);
      setCourseBadge(courseToEdit.badge || '');
      setCourseImage(courseToEdit.image || '');
    } else {
      setEditingCourseId(null);
      setCourseTitle('');
      setCourseCategory('Engineering & CAD');
      setCourseDuration('8 Weeks (Weekend)');
      setCourseFee(20000);
      setCourseTimings('Saturday & Sunday (10:00 AM - 1:00 PM)');
      setCourseDelivery('On-Campus');
      setCourseInstructor('Engr. Faculty Member');
      setCourseInstructorTitle('Department Lecturer / Industry Specialist');
      setCourseDesc('');
      setCoursePrereq('Open for students and professionals');
      setCourseSyllabusText('Module 1: Fundamentals & Workspace\nModule 2: Intermediate Design & Drafting\nModule 3: Advanced Projects & Case Study');
      setCourseFeatured(false);
      setCourseBadge('New Batch');
      setCourseImage('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80');
    }
    setIsCourseModalOpen(true);
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseTitle.trim()) {
      alert('Please enter course title');
      return;
    }

    const syllabusArray = courseSyllabusText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      title: courseTitle,
      category: courseCategory,
      duration: courseDuration,
      fee: Number(courseFee),
      timings: courseTimings,
      deliveryMode: courseDelivery,
      instructor: courseInstructor,
      instructorTitle: courseInstructorTitle,
      description: courseDesc,
      prerequisites: coursePrereq,
      syllabus: syllabusArray.length > 0 ? syllabusArray : ['Practical Hands-on Lab Sessions', 'Capstone Project'],
      featured: courseFeatured,
      badge: courseBadge,
      image: courseImage || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    };

    if (editingCourseId) {
      updateCourse(editingCourseId, payload);
      showToast('Course updated successfully!');
    } else {
      addCourse(payload);
      showToast('New course uploaded successfully!');
    }
    setIsCourseModalOpen(false);
  };

  // ---------------- CERTIFICATE HANDLERS ----------------
  const handleOpenCertModal = (certToEdit?: CertificateRecord) => {
    if (certToEdit) {
      setEditingCertId(certToEdit.id);
      setCertStudentName(certToEdit.studentName);
      setCertFatherName(certToEdit.fatherName);
      setCertCnic(certToEdit.cnic);
      setCertMobile(certToEdit.mobileNumber);
      setCertRegNo(certToEdit.registrationNo);
      setCertCourseTitle(certToEdit.courseTitle);
      setCertBatchSession(certToEdit.batchSession);
      setCertIssueDate(certToEdit.issueDate);
      setCertDuration(certToEdit.duration);
      setCertGrade(certToEdit.grade);
      setCertMarks(certToEdit.marksPercentage || 90);
      setCertStatus(certToEdit.status);
    } else {
      setEditingCertId(null);
      setCertStudentName('');
      setCertFatherName('');
      setCertCnic('');
      setCertMobile('');
      setCertRegNo(`2026-UETA-${Math.floor(1000 + Math.random() * 9000)}`);
      setCertCourseTitle(courses[0]?.title || 'AutoCAD 2D & 3D for Civil & Architectural Engineering');
      setCertBatchSession('Batch-44 (Spring 2026)');
      setCertIssueDate(new Date().toISOString().split('T')[0]);
      setCertDuration('8 Weeks');
      setCertGrade('A+');
      setCertMarks(92);
      setCertStatus('Verified & Active');
    }
    setIsCertModalOpen(true);
  };

  const handleSaveCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certStudentName || !certCnic || !certMobile) {
      alert('Please fill out Student Name, CNIC, and Mobile Number.');
      return;
    }

    const payload = {
      certificateNo: `UETA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      studentName: certStudentName,
      fatherName: certFatherName || 'Guardian',
      cnic: certCnic,
      mobileNumber: certMobile,
      registrationNo: certRegNo,
      courseTitle: certCourseTitle,
      batchSession: certBatchSession,
      issueDate: certIssueDate,
      completionDate: certIssueDate,
      duration: certDuration,
      grade: certGrade,
      marksPercentage: Number(certMarks),
      status: certStatus,
      issuingAuthority: 'Director UET Academy Lahore',
      qrCodeToken: `VERIFIED_${certCnic.replace(/[^0-9]/g, '')}`
    };

    if (editingCertId) {
      updateCertificate(editingCertId, payload);
      showToast('Certificate record updated successfully!');
    } else {
      addCertificate(payload);
      showToast(`Certificate issued for ${certStudentName}! Can now be verified with CNIC: ${certCnic} & Mobile: ${certMobile}`);
    }
    setIsCertModalOpen(false);
  };

  // ---------------- PAGE CONTENT HANDLERS ----------------
  const handleSavePageContent = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(contentForm);
    showToast('Website content updated across all pages!');
  };

  // ---------------- NOTICE HANDLERS ----------------
  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle || !noticeContent) {
      alert('Please fill out notice title and content.');
      return;
    }
    addNotice({
      title: noticeTitle,
      category: noticeCategory,
      date: noticeDate,
      isUrgent: noticeUrgent,
      content: noticeContent,
      attachmentName: 'Official_Notice.pdf'
    });
    setNoticeTitle('');
    setNoticeContent('');
    setIsNoticeModalOpen(false);
    showToast('Notice posted to the official board!');
  };

  // If NOT logged in, show clean admin login prompt
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-red-950 text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-md border border-amber-500/30">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              UET Academy Admin CMS
            </h2>
            <p className="text-xs text-slate-500">
              Central management console for Courses, Certificates & Page Content
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Admin Security PIN
              </label>
              <input
                type="password"
                placeholder="Enter PIN (Default: 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-center text-lg tracking-widest font-mono focus:ring-2 focus:ring-red-900 focus:outline-none"
                autoFocus
              />
            </div>

            {loginError && (
              <p className="text-xs text-red-600 font-semibold text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-red-900 hover:bg-red-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Console</span>
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <button
              onClick={() => loginAdmin('1234')}
              className="text-xs text-amber-800 font-semibold hover:text-red-900 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg border border-amber-200 transition-all w-full"
            >
              ⚡ 1-Click Demo Login (PIN: 1234)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LOGGED IN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Admin Header Bar */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <Settings className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold font-serif">
                  UET Academy Control Panel
                </h1>
                <span className="bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                  Admin Logged In
                </span>
              </div>
              <p className="text-xs text-amber-200">
                Manage Courses, Issue Certificates (CNIC/Mobile), and customize site content live.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={resetToDefaultData}
              className="px-3 py-2 bg-red-950/70 hover:bg-red-950 border border-amber-500/30 text-amber-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Reset sample courses and certificates"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Sample Data</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 bg-white text-red-950 hover:bg-amber-100 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Toast feedback */}
        {saveSuccessMsg && (
          <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-700" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 font-semibold uppercase block">Total Courses</span>
            <span className="text-2xl font-black text-slate-900">{courses.length}</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 font-semibold uppercase block">Issued Certificates</span>
            <span className="text-2xl font-black text-red-900">{certificates.length}</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 font-semibold uppercase block">Online Applications</span>
            <span className="text-2xl font-black text-emerald-700">{applications.length}</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 font-semibold uppercase block">Published Notices</span>
            <span className="text-2xl font-black text-amber-700">{notices.length}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'certificates'
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Manage Certificates ({certificates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'courses'
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Manage Courses ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'content'
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Edit Page Content & CMS</span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'applications'
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Student Applications ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'notices'
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Manage Notices ({notices.length})</span>
          </button>
        </div>

        {/* ================= TAB 1: CERTIFICATES MANAGEMENT ================= */}
        {activeTab === 'certificates' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-bold font-serif text-slate-900">
                  Certificate Records & Verification Database
                </h2>
                <p className="text-xs text-slate-500">
                  Upload, issue, or delete certificates. Students verify using their CNIC and Mobile number.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleOpenCertModal()}
                  className="px-4 py-2 bg-red-900 hover:bg-red-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Issue / Upload Certificate</span>
                </button>
              </div>
            </div>

            {/* Certificates Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">CNIC</th>
                    <th className="p-3">Mobile No</th>
                    <th className="p-3">Course Title</th>
                    <th className="p-3">Session</th>
                    <th className="p-3">Grade</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {certificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3">
                        <strong className="text-slate-900 block">{cert.studentName}</strong>
                        <span className="text-[10px] text-slate-500">S/D: {cert.fatherName}</span>
                      </td>
                      <td className="p-3 font-mono text-slate-800 font-semibold">{cert.cnic}</td>
                      <td className="p-3 font-mono text-slate-800">{cert.mobileNumber}</td>
                      <td className="p-3 font-medium text-slate-900 max-w-xs truncate">{cert.courseTitle}</td>
                      <td className="p-3 text-slate-600">{cert.batchSession}</td>
                      <td className="p-3">
                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold text-[10px]">
                          {cert.grade}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                          {cert.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <button
                          onClick={() => setPreviewCert(cert)}
                          className="p-1.5 text-blue-700 hover:bg-blue-50 rounded"
                          title="Preview Certificate"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenCertModal(cert)}
                          className="p-1.5 text-slate-700 hover:bg-slate-100 rounded"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete certificate for ${cert.studentName}?`)) {
                              deleteCertificate(cert.id);
                              showToast('Certificate deleted.');
                            }
                          }}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 2: COURSES MANAGEMENT ================= */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-bold font-serif text-slate-900">
                  Course Catalog Management
                </h2>
                <p className="text-xs text-slate-500">
                  Add new courses, update fees, syllabi, class schedules, or remove archived programs.
                </p>
              </div>

              <button
                onClick={() => handleOpenCourseModal()}
                className="px-4 py-2 bg-red-900 hover:bg-red-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Upload New Course</span>
              </button>
            </div>

            {/* Courses Grid in Admin */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded">
                        {course.category}
                      </span>
                      <span className="font-extrabold text-xs text-emerald-700">
                        PKR {course.fee.toLocaleString()}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="text-[11px] text-slate-600 pt-1 space-y-0.5">
                      <div>⏱ {course.duration}</div>
                      <div>📅 {course.timings}</div>
                      <div>👨‍🏫 {course.instructor}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                    <button
                      onClick={() => handleOpenCourseModal(course)}
                      className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete course "${course.title}"?`)) {
                          deleteCourse(course.id);
                          showToast('Course deleted.');
                        }
                      }}
                      className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: PAGE CONTENT & SITE SETTINGS CMS ================= */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold font-serif text-slate-900">
                Site Content & General CMS Settings
              </h2>
              <p className="text-xs text-slate-500">
                Update banners, phone helplines, addresses, announcements ticker, and director's message live.
              </p>
            </div>

            <form onSubmit={handleSavePageContent} className="space-y-6 text-xs">
              {/* Site General Identity */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  Academy Branding & Top Alert Bar
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Academy Name</label>
                    <input
                      type="text"
                      value={contentForm.academyName}
                      onChange={(e) => setContentForm({ ...contentForm, academyName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Tagline</label>
                    <input
                      type="text"
                      value={contentForm.tagline}
                      onChange={(e) => setContentForm({ ...contentForm, tagline: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Announcement Ticker (Marquee message displayed at the top)
                  </label>
                  <input
                    type="text"
                    value={contentForm.marqueeAnnouncement}
                    onChange={(e) => setContentForm({ ...contentForm, marqueeAnnouncement: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                  />
                </div>
              </div>

              {/* Hero Banner CMS */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  Home Hero Banner Texts
                </h3>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Main Hero Headline</label>
                  <input
                    type="text"
                    value={contentForm.heroHeadline}
                    onChange={(e) => setContentForm({ ...contentForm, heroHeadline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-serif"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Hero Subheadline</label>
                  <textarea
                    rows={2}
                    value={contentForm.heroSubheadline}
                    onChange={(e) => setContentForm({ ...contentForm, heroSubheadline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                  />
                </div>
              </div>

              {/* Leadership CMS */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  Director's Information & Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Director's Name</label>
                    <input
                      type="text"
                      value={contentForm.directorName}
                      onChange={(e) => setContentForm({ ...contentForm, directorName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Director's Official Designation</label>
                    <input
                      type="text"
                      value={contentForm.directorTitle}
                      onChange={(e) => setContentForm({ ...contentForm, directorTitle: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Director's Message Body</label>
                  <textarea
                    rows={4}
                    value={contentForm.directorMessage}
                    onChange={(e) => setContentForm({ ...contentForm, directorMessage: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                  />
                </div>
              </div>

              {/* Contact & Banking CMS */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  Contact Information & Bank Challan Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Telephone Primary</label>
                    <input
                      type="text"
                      value={contentForm.phonePrimary}
                      onChange={(e) => setContentForm({ ...contentForm, phonePrimary: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">WhatsApp Helpline</label>
                    <input
                      type="text"
                      value={contentForm.mobileWhatsApp}
                      onChange={(e) => setContentForm({ ...contentForm, mobileWhatsApp: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Official Email</label>
                    <input
                      type="email"
                      value={contentForm.email}
                      onChange={(e) => setContentForm({ ...contentForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Campus Physical Address</label>
                  <input
                    type="text"
                    value={contentForm.address}
                    onChange={(e) => setContentForm({ ...contentForm, address: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Bank Name & Branch</label>
                    <input
                      type="text"
                      value={contentForm.bankInfo.bankName}
                      onChange={(e) => setContentForm({ 
                        ...contentForm, 
                        bankInfo: { ...contentForm.bankInfo, bankName: e.target.value } 
                      })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Bank Account IBAN</label>
                    <input
                      type="text"
                      value={contentForm.bankInfo.iban}
                      onChange={(e) => setContentForm({ 
                        ...contentForm, 
                        bankInfo: { ...contentForm.bankInfo, iban: e.target.value } 
                      })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-900 hover:bg-red-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Website Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= TAB 4: STUDENT APPLICATIONS ================= */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold font-serif text-slate-900">
                Online Admission Applications & Inquiries
              </h2>
              <p className="text-xs text-slate-500">
                Review submissions received via the website enrollment form.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3">App ID</th>
                    <th className="p-3">Candidate</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">CNIC</th>
                    <th className="p-3">Mobile</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Update Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-6 text-center text-slate-400">
                        No online applications received yet.
                      </td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-red-900">{app.id}</td>
                        <td className="p-3">
                          <strong className="text-slate-900">{app.fullName}</strong>
                          <div className="text-[10px] text-slate-500">S/D: {app.fatherName}</div>
                        </td>
                        <td className="p-3 text-slate-800 font-medium">{app.courseTitle}</td>
                        <td className="p-3 font-mono text-slate-700">{app.cnic}</td>
                        <td className="p-3 font-mono text-slate-700">{app.mobileNumber}</td>
                        <td className="p-3 text-slate-600">{app.city}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                            app.status === 'Challan Paid' ? 'bg-emerald-100 text-emerald-800' :
                            app.status === 'Approved' ? 'bg-blue-100 text-blue-800' :
                            'bg-amber-100 text-amber-900'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <select
                            value={app.status}
                            onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                            className="px-2 py-1 border border-slate-300 rounded text-[11px] font-semibold bg-white"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Challan Paid">Challan Paid</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 5: NOTICES MANAGEMENT ================= */}
        {activeTab === 'notices' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold font-serif text-slate-900">
                  Official Notice Board & Announcements
                </h2>
                <p className="text-xs text-slate-500">
                  Post new admission circulars, exam dates, or workshop schedules.
                </p>
              </div>

              <button
                onClick={() => setIsNoticeModalOpen(true)}
                className="px-4 py-2 bg-red-900 hover:bg-red-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Post New Notice</span>
              </button>
            </div>

            <div className="space-y-3">
              {notices.map((n) => (
                <div key={n.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                        {n.category}
                      </span>
                      <span className="text-xs text-slate-400">{n.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{n.title}</h4>
                    <p className="text-xs text-slate-600 max-w-2xl">{n.content}</p>
                  </div>

                  <button
                    onClick={() => {
                      if (confirm('Delete notice?')) {
                        deleteNotice(n.id);
                        showToast('Notice deleted.');
                      }
                    }}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= MODAL: COURSE EDIT / CREATE ================= */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-950 to-red-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-bold text-base">
                {editingCourseId ? 'Edit Course Program' : 'Upload New Course Program'}
              </h3>
              <button onClick={() => setIsCourseModalOpen(false)} className="text-white hover:text-amber-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="p-6 space-y-4 text-xs max-h-[80vh] overflow-y-auto">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Course Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Primavera P6 & Project Planning"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category</label>
                  <select
                    value={courseCategory}
                    onChange={(e) => setCourseCategory(e.target.value as CourseCategory)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                  >
                    <option value="Information Technology">Information Technology</option>
                    <option value="Engineering & CAD">Engineering & CAD</option>
                    <option value="Project & Quality Management">Project & Quality Management</option>
                    <option value="Digital Skills & Design">Digital Skills & Design</option>
                    <option value="Languages & Communication">Languages & Communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Course Fee (PKR) *</label>
                  <input
                    type="number"
                    required
                    value={courseFee}
                    onChange={(e) => setCourseFee(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-bold font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Duration</label>
                  <input
                    type="text"
                    value={courseDuration}
                    onChange={(e) => setCourseDuration(e.target.value)}
                    placeholder="e.g. 8 Weeks (Weekend)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Class Timings</label>
                  <input
                    type="text"
                    value={courseTimings}
                    onChange={(e) => setCourseTimings(e.target.value)}
                    placeholder="e.g. Saturday & Sunday (10:00 AM - 1:00 PM)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Instructor Name</label>
                  <input
                    type="text"
                    value={courseInstructor}
                    onChange={(e) => setCourseInstructor(e.target.value)}
                    placeholder="e.g. Engr. Kashif Fazal"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Instructor Designation</label>
                  <input
                    type="text"
                    value={courseInstructorTitle}
                    onChange={(e) => setCourseInstructorTitle(e.target.value)}
                    placeholder="e.g. CAD Specialist & Senior Lecturer"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Course Description</label>
                <textarea
                  rows={3}
                  value={courseDesc}
                  onChange={(e) => setCourseDesc(e.target.value)}
                  placeholder="Comprehensive description of the course..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Syllabus Modules (One topic per line)
                </label>
                <textarea
                  rows={4}
                  value={courseSyllabusText}
                  onChange={(e) => setCourseSyllabusText(e.target.value)}
                  placeholder="Module 1: Getting Started..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Banner Image URL</label>
                  <input
                    type="url"
                    value={courseImage}
                    onChange={(e) => setCourseImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={courseBadge}
                    onChange={(e) => setCourseBadge(e.target.value)}
                    placeholder="e.g. High Demand, Popular"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={courseFeatured}
                  onChange={(e) => setCourseFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-red-900"
                />
                <label htmlFor="featuredCheck" className="text-slate-800 font-semibold">
                  Feature this course on Home Page showcase
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-900 text-white font-bold rounded-xl uppercase tracking-wider"
                >
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ISSUE / EDIT CERTIFICATE ================= */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-950 to-amber-950 text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-base">
                  {editingCertId ? 'Edit Certificate Record' : 'Issue & Upload New Certificate'}
                </h3>
              </div>
              <button onClick={() => setIsCertModalOpen(false)} className="text-white hover:text-amber-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCert} className="p-6 space-y-4 text-xs max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Student Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Usman"
                    value={certStudentName}
                    onChange={(e) => setCertStudentName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Abdul Ghaffar"
                    value={certFatherName}
                    onChange={(e) => setCertFatherName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              {/* Crucial: CNIC & Mobile for verification */}
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-950 font-bold mb-1">
                    Student CNIC (Verification Key) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="35202-1234567-1"
                    value={certCnic}
                    onChange={(e) => setCertCnic(e.target.value)}
                    className="w-full px-3 py-2 border border-amber-300 rounded-xl font-mono font-bold bg-white"
                  />
                  <span className="text-[10px] text-amber-800">Must be unique 13-digit CNIC</span>
                </div>

                <div>
                  <label className="block text-amber-950 font-bold mb-1">
                    Student Mobile No (Verification Key) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0300-1234567"
                    value={certMobile}
                    onChange={(e) => setCertMobile(e.target.value)}
                    className="w-full px-3 py-2 border border-amber-300 rounded-xl font-mono font-bold bg-white"
                  />
                  <span className="text-[10px] text-amber-800">Phone matched during verification</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Course Title</label>
                  <select
                    value={certCourseTitle}
                    onChange={(e) => setCertCourseTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Batch / Session</label>
                  <input
                    type="text"
                    value={certBatchSession}
                    onChange={(e) => setCertBatchSession(e.target.value)}
                    placeholder="Batch-44 (Spring 2026)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Issue Date</label>
                  <input
                    type="date"
                    value={certIssueDate}
                    onChange={(e) => setCertIssueDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Grade</label>
                  <select
                    value={certGrade}
                    onChange={(e) => setCertGrade(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold"
                  >
                    <option value="Completed with Distinction">Completed with Distinction</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Score %</label>
                  <input
                    type="number"
                    value={certMarks}
                    onChange={(e) => setCertMarks(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Registration / Roll No</label>
                  <input
                    type="text"
                    value={certRegNo}
                    onChange={(e) => setCertRegNo(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Status</label>
                  <select
                    value={certStatus}
                    onChange={(e) => setCertStatus(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                  >
                    <option value="Verified & Active">Verified & Active</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Revoked">Revoked</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-900 text-white font-bold rounded-xl uppercase tracking-wider"
                >
                  Save & Publish Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: NOTICE POST ================= */}
      {isNoticeModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-950 to-red-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-bold text-base">Post Official Notice</h3>
              <button onClick={() => setIsNoticeModalOpen(false)} className="text-white hover:text-amber-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNotice} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Notice Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule for Weekend Orientation Class"
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category</label>
                  <select
                    value={noticeCategory}
                    onChange={(e) => setNoticeCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="Examination">Examination</option>
                    <option value="General">General</option>
                    <option value="Workshops">Workshops</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Date</label>
                  <input
                    type="text"
                    value={noticeDate}
                    onChange={(e) => setNoticeDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Content Body *</label>
                <textarea
                  rows={4}
                  required
                  value={noticeContent}
                  onChange={(e) => setNoticeContent(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="urgentNoticeCheck"
                  checked={noticeUrgent}
                  onChange={(e) => setNoticeUrgent(e.target.checked)}
                  className="w-4 h-4 rounded text-red-900"
                />
                <label htmlFor="urgentNoticeCheck" className="text-slate-800 font-semibold">
                  Mark as Urgent announcement
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsNoticeModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-900 text-white font-bold rounded-xl uppercase tracking-wider"
                >
                  Post Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: PREVIEW CERTIFICATE ================= */}
      {previewCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 my-8 animate-fadeIn max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end pb-3">
              <button
                onClick={() => setPreviewCert(null)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
            <CertificateView certificate={previewCert} onClose={() => setPreviewCert(null)} />
          </div>
        </div>
      )}
    </div>
  );
};
