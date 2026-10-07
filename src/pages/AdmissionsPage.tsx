import React from 'react';
import { 
  GraduationCap, 
  CreditCard, 
  FileText, 
  CheckCircle, 
  Clock, 
  Calendar, 
  AlertCircle, 
  Building2, 
  Download, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface AdmissionsPageProps {
  onOpenApplyModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenApplyModal }) => {
  const { siteSettings, courses } = useData();

  const admissionSteps = [
    {
      step: '01',
      title: 'Select Desired Course',
      desc: 'Browse our list of short professional programs in IT, Architecture, Civil CAD, BIM, Project Management, or German Language.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Submit Online or In-Person Form',
      desc: 'Fill out the candidate registration form online on this portal, or obtain a physical form from the Department of Architectural Engineering & Design, UET Lahore.',
      icon: GraduationCap
    },
    {
      step: '03',
      title: 'Deposit Fee via Bank Challan',
      desc: 'Deposit course fee at Habib Bank Limited (HBL) UET Branch or transfer online to UET Academy account. Keep the receipt/challan safely.',
      icon: CreditCard
    },
    {
      step: '04',
      title: 'Roll Number & ID Issuance',
      desc: 'Receive your registration roll number, batch schedule, and lab card before commencement of the first orientation lecture.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
              Admission Guidelines & Procedure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
              Admissions Open — Spring 2026
            </h1>
            <p className="text-xs sm:text-base text-amber-100 leading-relaxed">
              Step-by-step guidance on enrolling in UET Academy short courses. Open to university students, engineers, working professionals, and beginners.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenApplyModal}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-red-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Fill Online Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-900 text-center">
            4-Step Easy Admission Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3"
                >
                  <span className="text-2xl font-black text-amber-500/30 font-serif absolute top-4 right-4">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-red-900 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bank Account & Challan Details */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Official Bank Account Details for Fee Deposit
              </h3>
              <p className="text-xs text-slate-500">
                Course fees must be deposited directly to the authorized university account
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Bank Name:</span>
                <span className="font-bold text-slate-900">{siteSettings.bankInfo.bankName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Account Title:</span>
                <span className="font-bold text-slate-900">{siteSettings.bankInfo.accountTitle}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Account Number:</span>
                <span className="font-mono font-bold text-red-900">{siteSettings.bankInfo.accountNo}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Branch:</span>
                <span className="font-medium text-slate-900">{siteSettings.bankInfo.branch}</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-xl space-y-2 border border-amber-200 text-amber-950">
              <span className="font-bold block text-sm text-amber-900">IBAN for 1Link / Online Banking:</span>
              <p className="font-mono font-bold text-sm bg-white p-2.5 rounded-lg border border-amber-300">
                {siteSettings.bankInfo.iban}
              </p>
              <p className="text-[11px] text-amber-900 pt-1">
                After depositing online, kindly take a screenshot of the transaction reference and share it with your CNIC to our WhatsApp helpline: <strong>{siteSettings.mobileWhatsApp}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility & Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              General Eligibility
            </h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed">
              <li>Open to all candidates without age restriction.</li>
              <li>Undergraduate students of UET Lahore or other universities are encouraged to apply.</li>
              <li>Diploma holders (DAE) and working engineers can apply for advanced modules.</li>
              <li>Basic computer literacy is recommended for Information Technology and CAD programs.</li>
              <li>German language courses are open to candidates preparing for study or jobs in Germany.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Attendance & Certification Policy
            </h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed">
              <li>Minimum 75% attendance in laboratory classes is required to sit in the final assessment.</li>
              <li>Every candidate must submit a capstone practical project before course conclusion.</li>
              <li>Certificates are issued with an official registration number and verifiable QR code.</li>
              <li>Candidates can verify their credentials anytime on this website using CNIC and mobile number.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
