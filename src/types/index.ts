export type CourseCategory = 
  | 'Information Technology'
  | 'Engineering & CAD'
  | 'Digital Skills & Design'
  | 'Languages & Communication'
  | 'Project & Quality Management';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string; // e.g. "8 Weeks (2 Months)"
  fee: number; // in PKR
  timings: string; // e.g. "Sat & Sun (10:00 AM - 1:00 PM)"
  deliveryMode: 'On-Campus' | 'Online / Hybrid' | 'On-Campus & Online';
  instructor: string;
  instructorTitle: string;
  description: string;
  prerequisites: string;
  syllabus: string[];
  featured?: boolean;
  image?: string;
  badge?: string; // e.g. "New Batch", "Popular", "Weekend Class"
}

export interface CertificateRecord {
  id: string;
  certificateNo: string; // e.g. "UETA-2025-0842"
  studentName: string;
  fatherName: string;
  cnic: string; // e.g. "35202-1234567-1" or clean digits
  mobileNumber: string; // e.g. "0300-1234567"
  registrationNo: string; // e.g. "2024-AE-0419"
  courseTitle: string;
  batchSession: string; // e.g. "Batch-42 (Fall 2025)"
  issueDate: string; // e.g. "2025-12-15"
  completionDate: string;
  duration: string; // e.g. "8 Weeks"
  grade: 'A+' | 'A' | 'B+' | 'B' | 'Completed with Distinction';
  marksPercentage?: number;
  status: 'Verified & Active' | 'Revoked' | 'Under Review';
  issuingAuthority: string;
  qrCodeToken?: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'Admissions' | 'Examination' | 'General' | 'Workshops';
  date: string;
  isUrgent?: boolean;
  content: string;
  attachmentName?: string;
}

export interface StudentApplication {
  id: string;
  fullName: string;
  fatherName: string;
  cnic: string;
  mobileNumber: string;
  email: string;
  courseId: string;
  courseTitle: string;
  education: string;
  city: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Challan Paid' | 'Enrolled' | 'Rejected';
  notes?: string;
}

export interface SiteSettings {
  academyName: string;
  subTitle: string;
  tagline: string;
  marqueeAnnouncement: string;
  heroHeadline: string;
  heroSubheadline: string;
  directorName: string;
  directorTitle: string;
  directorMessage: string;
  aboutHistory: string;
  aboutMission: string;
  aboutVision: string;
  phonePrimary: string;
  phoneSecondary: string;
  mobileWhatsApp: string;
  email: string;
  address: string;
  campusOffice: string;
  bankInfo: {
    bankName: string;
    accountTitle: string;
    accountNo: string;
    iban: string;
    branch: string;
  };
}
