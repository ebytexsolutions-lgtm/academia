import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Building2, 
  User, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const ContactPage: React.FC = () => {
  const { siteSettings } = useData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !message) {
      alert('Please fill out Name, Mobile, and your Message.');
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
              Get In Touch With UET Academy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
              Contact & Campus Location
            </h1>
            <p className="text-xs sm:text-base text-amber-100 leading-relaxed">
              Have queries regarding short courses, fee challans, or certificate verification? Our faculty and admission coordinators are here to assist you.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Col: Contact Information & Focal Persons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-bold text-lg font-serif text-slate-900 border-b border-slate-100 pb-3">
                Head Office & Helpline
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Campus Location</strong>
                    <span className="text-slate-600 leading-relaxed">{siteSettings.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-900 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Telephone Lines</strong>
                    <span className="text-slate-600 font-mono">{siteSettings.phonePrimary} / {siteSettings.phoneSecondary}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">WhatsApp Helpline</strong>
                    <span className="text-emerald-700 font-mono font-bold">{siteSettings.mobileWhatsApp}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Email Address</strong>
                    <span className="text-slate-600">{siteSettings.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Office Hours</strong>
                    <span className="text-slate-600">Monday to Friday: 8:00 AM - 4:00 PM</span>
                    <span className="block text-amber-800 font-medium mt-0.5">Weekend Lab Classes: Sat & Sun 9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Focal Persons Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-xs">
                Admission Coordinators
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">Mr. Kashif Fazal</span>
                    <span className="text-slate-500 text-[11px]">Admissions & CAD Programs</span>
                  </div>
                  <span className="font-mono text-red-900 font-semibold text-[11px]">0320-1418991</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">Mr. Kashif Manzoor</span>
                    <span className="text-slate-500 text-[11px]">Academic Coordinator</span>
                  </div>
                  <span className="font-mono text-red-900 font-semibold text-[11px]">0345-4346818</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">Mr. Farhan Khalid</span>
                    <span className="text-slate-500 text-[11px]">IT & AI Programs</span>
                  </div>
                  <span className="font-mono text-red-900 font-semibold text-[11px]">0311-0832012</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question regarding course content, schedule, or certifications? Send us a direct message.
                </p>
              </div>

              {isSent ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg text-emerald-950">Thank you, {name}!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Your inquiry has been received by the UET Academy admission desk. Our coordinator will contact you shortly on {mobile}.
                  </p>
                  <button
                    onClick={() => { setIsSent(false); setMessage(''); }}
                    className="mt-3 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Your Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmad Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-900 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Mobile / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="0300-1234567"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-900 focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="ahmad@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Your Inquiry / Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please let us know which course or information you are inquiring about..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-900 focus:outline-none text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-900 hover:bg-red-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
