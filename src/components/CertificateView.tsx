import React, { useRef } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Printer, 
  Download, 
  Share2, 
  ShieldCheck, 
  QrCode, 
  Calendar, 
  User, 
  GraduationCap,
  Building2,
  FileText
} from 'lucide-react';
import { CertificateRecord } from '../types';

interface CertificateViewProps {
  certificate: CertificateRecord;
  onClose?: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({ certificate, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Verification Status Header Bar */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7 text-emerald-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-wide text-white">
                Official Credential Verified
              </span>
              <span className="bg-emerald-400 text-emerald-950 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                Authentic
              </span>
            </div>
            <p className="text-xs text-emerald-200">
              Verified from UET Academy database for CNIC: <strong className="text-white">{certificate.cnic}</strong>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none px-4 py-2 bg-white text-emerald-950 hover:bg-emerald-50 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4 text-emerald-800" />
            <span>Print / Save PDF</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-2 bg-emerald-950/40 hover:bg-emerald-950/70 text-white rounded-xl text-xs font-semibold border border-emerald-600/40"
            >
              Back
            </button>
          )}
        </div>
      </div>

      {/* Printable Certificate Frame */}
      <div 
        ref={printRef}
        className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] text-slate-900 p-6 sm:p-12 rounded-2xl shadow-2xl border-8 border-[#B8860B]/40 print:m-0 print:p-8 print:border-4 print:shadow-none print:w-full print:rounded-none overflow-hidden"
      >
        {/* Subtle Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
          <div className="w-96 h-96 rounded-full border-8 border-red-950 flex items-center justify-center">
            <GraduationCap className="w-64 h-64 text-red-950" />
          </div>
        </div>

        {/* Ornate Inner Border */}
        <div className="relative border-2 border-[#B8860B]/60 p-6 sm:p-10 rounded-xl">
          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#800000]"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#800000]"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#800000]"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#800000]"></div>

          {/* Certificate Header */}
          <div className="text-center space-y-2 mb-8">
            {/* Logo Emblem */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-red-900 to-red-950 text-amber-300 shadow-md border-2 border-amber-400 p-2 mb-2">
              <div className="w-full h-full rounded-full border border-amber-300/40 flex flex-col items-center justify-center">
                <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9 text-amber-300" />
                <span className="text-[7px] font-bold text-amber-200">1921</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-red-950 font-serif uppercase">
              University of Engineering and Technology Lahore
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-900 uppercase">
              UET Academy • Department of Architectural Engineering & Design
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>

          {/* Title of Award */}
          <div className="text-center my-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 bg-amber-100/70 px-4 py-1 rounded-full border border-amber-200">
              Certificate of Professional Completion
            </span>
            <p className="text-xs text-slate-600 mt-4 italic font-serif">
              This is to solemnly certify that
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-950 tracking-tight mt-1 font-serif underline decoration-amber-500/40 underline-offset-8">
              {certificate.studentName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-3">
              Son / Daughter of <strong className="text-slate-900 font-semibold">{certificate.fatherName}</strong>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              CNIC: <span className="font-mono font-medium text-slate-800">{certificate.cnic}</span> • Reg No: <span className="font-mono font-medium text-slate-800">{certificate.registrationNo}</span>
            </p>
          </div>

          {/* Course Details */}
          <div className="text-center my-6 max-w-2xl mx-auto space-y-2">
            <p className="text-xs sm:text-sm text-slate-600 italic font-serif">
              has satisfactorily completed the rigorous professional training and laboratory assessment in
            </p>
            <div className="p-3 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 shadow-xs">
              <h3 className="text-lg sm:text-2xl font-bold text-red-950">
                {certificate.courseTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-600 pt-1">
              Conducted during <strong className="text-slate-800">{certificate.batchSession}</strong> for a total duration of <strong className="text-slate-800">{certificate.duration}</strong>.
            </p>
          </div>

          {/* Grade & Performance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 my-6 text-xs">
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Evaluation Grade: <strong className="text-emerald-950">{certificate.grade}</strong></span>
            </div>
            {certificate.marksPercentage && (
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-semibold">
                Score: <strong>{certificate.marksPercentage}%</strong>
              </div>
            )}
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 font-semibold">
              Issue Date: <strong>{certificate.issueDate}</strong>
            </div>
          </div>

          {/* Footer Signatures and Verification QR */}
          <div className="mt-12 pt-8 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-3 items-end gap-6 text-center">
            {/* Signature 1 */}
            <div className="space-y-1">
              <div className="h-10 flex items-center justify-center">
                <span className="font-serif italic text-red-900 text-lg font-bold">Kashif Manzoor</span>
              </div>
              <div className="w-40 h-0.5 bg-slate-400 mx-auto"></div>
              <p className="text-xs font-bold text-slate-900">Director, UET Academy</p>
              <p className="text-[10px] text-slate-500">UET Lahore</p>
            </div>

            {/* Official Seal / QR Verification Box */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="p-2 bg-white rounded-lg border-2 border-dashed border-amber-400 shadow-xs flex flex-col items-center">
                <QrCode className="w-12 h-12 text-slate-800" />
                <span className="text-[8px] font-mono font-bold text-slate-600 mt-0.5">
                  ID: {certificate.certificateNo}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Authentic UET Record
              </span>
            </div>

            {/* Signature 2 */}
            <div className="space-y-1">
              <div className="h-10 flex items-center justify-center">
                <span className="font-serif italic text-red-900 text-lg font-bold">Chairman Office</span>
              </div>
              <div className="w-40 h-0.5 bg-slate-400 mx-auto"></div>
              <p className="text-xs font-bold text-slate-900">Chairman Department</p>
              <p className="text-[10px] text-slate-500">Architectural Engg. & Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Credential Information Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <FileText className="w-4 h-4 text-red-800" />
          <span>Credential Verification Details</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-500 block mb-0.5">Student CNIC</span>
            <span className="font-mono font-bold text-slate-900">{certificate.cnic}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-500 block mb-0.5">Registered Mobile</span>
            <span className="font-mono font-bold text-slate-900">{certificate.mobileNumber}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-500 block mb-0.5">Registration Number</span>
            <span className="font-mono font-bold text-slate-900">{certificate.registrationNo}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <span className="text-slate-500 block mb-0.5">Certificate Serial ID</span>
            <span className="font-mono font-bold text-amber-900">{certificate.certificateNo}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 italic">
          * This credential was electronically validated against the examination records of UET Academy Lahore. For official paper transcript or apostille verification, contact the Examination Branch, UET Main Campus Lahore.
        </p>
      </div>
    </div>
  );
};
