import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Download, 
  FileText, 
  Tag, 
  Search, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const NoticesPage: React.FC = () => {
  const { notices } = useData();
  const [filter, setFilter] = useState<string>('All');

  const filteredNotices = notices.filter(n => {
    if (filter === 'All') return true;
    return n.category === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
              Official University Circulars
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">
              Notice Board & Circulars
            </h1>
            <p className="text-xs sm:text-base text-amber-100">
              Stay updated with academic schedules, admission dates, workshop schedules, and certificate distribution ceremonies.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Admissions', 'Examination', 'General', 'Workshops'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-red-900 text-white shadow'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notice Items */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    notice.isUrgent 
                      ? 'bg-red-100 text-red-900 border border-red-200 animate-pulse'
                      : 'bg-amber-100 text-amber-900 border border-amber-200'
                  }`}>
                    {notice.category}
                  </span>
                  {notice.isUrgent && (
                    <span className="text-[10px] font-bold text-red-700 uppercase bg-red-50 px-2 py-0.5 rounded">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{notice.date}</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  {notice.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              {notice.attachmentName && (
                <div className="pt-2 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200 cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Attachment: {notice.attachmentName}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
