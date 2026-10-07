import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  Phone, 
  CreditCard, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Info,
  Building2,
  FileBadge2
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { CertificateRecord } from '../types';
import { CertificateView } from '../components/CertificateView';

interface VerifyCertificatePageProps {
  onGoToCourses: () => void;
}

export const VerifyCertificatePage: React.FC<VerifyCertificatePageProps> = ({ onGoToCourses }) => {
  const { verifyCertificate, certificates } = useData();

  const [cnicInput, setCnicInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<CertificateRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnicInput.trim() || !mobileInput.trim()) {
      alert('Please enter both your CNIC Number and Mobile Number.');
      return;
    }

    const cert = verifyCertificate(cnicInput, mobileInput);
    setResult(cert);
    setSearched(true);
  };

  const handleQuickFill = (cert: CertificateRecord) => {
    setCnicInput(cert.cnic);
    setMobileInput(cert.mobileNumber);
    const found = verifyCertificate(cert.cnic, cert.mobileNumber);
    setResult(found);
    setSearched(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleReset = () => {
    setCnicInput('');
    setMobileInput('');
    setSearched(false);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page Banner Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Official Credential Verification Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Verify UET Academy Certificate
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Authentic online verification system for employers, institutions, and alumni. Verify certificates issued for short courses and professional training programs.
          </p>
        </div>

        {/* Verification Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <FileBadge2 className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-wide">
                  Candidate Verification Lookup
                </h2>
                <p className="text-xs text-amber-200">
                  Enter registered CNIC (National ID) and Mobile Number to fetch credential
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CNIC Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Candidate CNIC / B-Form Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 35202-1234567-1 or 3520212345671"
                      value={cnicInput}
                      onChange={(e) => setCnicInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-red-900 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Format: 13-digit Pakistani CNIC (with or without dashes)
                  </span>
                </div>

                {/* Mobile Number Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Registered Mobile / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0300-1234567 or 03001234567"
                      value={mobileInput}
                      onChange={(e) => setMobileInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-red-900 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500">
                    The contact number provided at the time of course registration
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Both CNIC & Mobile are verified against the central database for security.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {searched && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  )}

                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-6 py-3 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Fetch Certificate</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Quick Demo Fillers to easily test */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Quick Test Demo Students ({certificates.length} Records in Database):
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {certificates.slice(0, 4).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleQuickFill(c)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 hover:border-amber-300 border border-slate-200 text-xs text-slate-800 transition-all flex items-center gap-2"
                  >
                    <span className="font-semibold text-red-900">{c.studentName}</span>
                    <span className="text-slate-400">|</span>
                    <span className="font-mono text-[11px] text-slate-600">{c.cnic}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Results Display */}
        {searched && (
          <div className="pt-4 animate-fadeIn">
            {result ? (
              <CertificateView certificate={result} onClose={handleReset} />
            ) : (
              /* Not Found Card */
              <div className="bg-white rounded-2xl p-8 border border-red-200 shadow-lg text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <AlertCircle className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No Matching Certificate Found
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
                    We could not locate any active certificate matching CNIC <strong className="font-mono text-slate-900">{cnicInput}</strong> with mobile <strong className="font-mono text-slate-900">{mobileInput}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-2">
                  <p className="font-bold text-slate-800">Possible reasons:</p>
                  <p>1. The CNIC or Mobile number was entered differently during admission.</p>
                  <p>2. The course completion certificate is still under evaluation or processing.</p>
                  <p>3. The record has not yet been uploaded by the administration.</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl"
                  >
                    Try Another Search
                  </button>
                  <a
                    href="tel:04299029216"
                    className="px-4 py-2 text-xs font-bold bg-red-900 hover:bg-red-950 text-white rounded-xl flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Helpline: 042-99029216</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Verification FAQ & Verification Process Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-900 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-sm text-slate-900">Direct Database Matching</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every certificate issued by UET Academy is registered with the student’s computerised CNIC and active mobile contact.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-sm text-slate-900">Tamper-Proof Digital Verification</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Employers can immediately confirm candidate grades, batch session dates, and syllabus completion without waiting for postal verification.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-sm text-slate-900">Official Embossed Seal</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In addition to online records, hard copy certificates with anti-counterfeit holographic embossing can be collected from the UET Academy office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
