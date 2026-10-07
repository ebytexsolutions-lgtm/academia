import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, CertificateRecord, Notice, SiteSettings, StudentApplication } from '../types';
import { initialCourses, initialCertificates, initialNotices, initialSiteSettings } from '../data/initialData';

interface DataContextType {
  courses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;

  certificates: CertificateRecord[];
  addCertificate: (cert: Omit<CertificateRecord, 'id'>) => void;
  updateCertificate: (id: string, updated: Partial<CertificateRecord>) => void;
  deleteCertificate: (id: string) => void;
  bulkImportCertificates: (certs: Omit<CertificateRecord, 'id'>[]) => void;
  verifyCertificate: (cnic: string, mobile: string) => CertificateRecord | null;

  siteSettings: SiteSettings;
  updateSiteSettings: (updated: Partial<SiteSettings>) => void;

  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, updated: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;

  applications: StudentApplication[];
  submitApplication: (app: Omit<StudentApplication, 'id' | 'submittedAt' | 'status'>) => string;
  updateApplicationStatus: (id: string, status: StudentApplication['status']) => void;

  isAdminLoggedIn: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;

  resetToDefaultData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COURSES: 'uet_academy_courses_v1',
  CERTIFICATES: 'uet_academy_certificates_v1',
  SETTINGS: 'uet_academy_settings_v1',
  NOTICES: 'uet_academy_notices_v1',
  APPLICATIONS: 'uet_academy_applications_v1',
  ADMIN_AUTH: 'uet_academy_admin_auth_v1',
};

// Helper to sanitize CNIC and Phone for matching
export const cleanDigits = (val: string): string => val.replace(/[^0-9]/g, '');

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      return saved ? JSON.parse(saved) : initialCourses;
    } catch {
      return initialCourses;
    }
  });

  const [certificates, setCertificates] = useState<CertificateRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      return saved ? JSON.parse(saved) : initialCertificates;
    } catch {
      return initialCertificates;
    }
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTICES);
      return saved ? JSON.parse(saved) : initialNotices;
    } catch {
      return initialNotices;
    }
  });

  const [applications, setApplications] = useState<StudentApplication[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
      return saved ? JSON.parse(saved) : [
        {
          id: 'app-seed-1',
          fullName: 'Osama Bin Tariq',
          fatherName: 'Tariq Mehmood',
          cnic: '35201-1122334-7',
          mobileNumber: '0300-4455667',
          email: 'osama.tariq@gmail.com',
          courseId: 'course-1',
          courseTitle: 'Artificial Intelligence & Machine Learning with Python',
          education: 'BS Computer Science (6th Sem)',
          city: 'Lahore',
          submittedAt: '2026-03-25T10:30:00Z',
          status: 'Challan Paid'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  // Course actions
  const addCourse = (newCourse: Omit<Course, 'id'>) => {
    const course: Course = {
      ...newCourse,
      id: `course-${Date.now()}`,
    };
    setCourses(prev => [course, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Certificate actions
  const addCertificate = (newCert: Omit<CertificateRecord, 'id'>) => {
    const cert: CertificateRecord = {
      ...newCert,
      id: `cert-${Date.now()}`,
    };
    setCertificates(prev => [cert, ...prev]);
  };

  const updateCertificate = (id: string, updated: Partial<CertificateRecord>) => {
    setCertificates(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCertificate = (id: string) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
  };

  const bulkImportCertificates = (certs: Omit<CertificateRecord, 'id'>[]) => {
    const newItems: CertificateRecord[] = certs.map((c, i) => ({
      ...c,
      id: `cert-${Date.now()}-${i}`
    }));
    setCertificates(prev => [...newItems, ...prev]);
  };

  // Core requirement: Verification using CNIC AND Mobile Number
  const verifyCertificate = (cnicInput: string, mobileInput: string): CertificateRecord | null => {
    const cleanCnicInput = cleanDigits(cnicInput);
    const cleanMobileInput = cleanDigits(mobileInput);

    if (!cleanCnicInput || !cleanMobileInput) return null;

    // Matches if CNIC matches (numeric match) AND mobile matches (last 7-10 digits match to tolerate leading 0 or +92)
    return certificates.find(cert => {
      const certCnic = cleanDigits(cert.cnic);
      const certMobile = cleanDigits(cert.mobileNumber);

      const cnicMatches = certCnic === cleanCnicInput;
      // Compare mobile (either exact digits or end matches e.g. 03001234567 matching 923001234567)
      const mobileMatches = 
        certMobile === cleanMobileInput ||
        certMobile.endsWith(cleanMobileInput) ||
        cleanMobileInput.endsWith(certMobile);

      return cnicMatches && mobileMatches;
    }) || null;
  };

  // Site Settings
  const updateSiteSettings = (updated: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...updated }));
  };

  // Notice actions
  const addNotice = (newNotice: Omit<Notice, 'id'>) => {
    const notice: Notice = {
      ...newNotice,
      id: `notice-${Date.now()}`
    };
    setNotices(prev => [notice, ...prev]);
  };

  const updateNotice = (id: string, updated: Partial<Notice>) => {
    setNotices(prev => prev.map(n => n.id === id ? { ...n, ...updated } : n));
  };

  const deleteNotice = (id: string) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  // Applications
  const submitApplication = (app: Omit<StudentApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newApp: StudentApplication = {
      ...app,
      id: `APP-${Date.now().toString().slice(-6)}`,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };
    setApplications(prev => [newApp, ...prev]);
    return newApp.id;
  };

  const updateApplicationStatus = (id: string, status: StudentApplication['status']) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  // Admin Auth
  const loginAdmin = (pin: string) => {
    // Default PIN is 1234 or "admin" or "uetadmin"
    if (pin.trim() === '1234' || pin.trim().toLowerCase() === 'admin' || pin.trim().toLowerCase() === 'uetadmin') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  // Reset demo
  const resetToDefaultData = () => {
    setCourses(initialCourses);
    setCertificates(initialCertificates);
    setSiteSettings(initialSiteSettings);
    setNotices(initialNotices);
    localStorage.clear();
  };

  return (
    <DataContext.Provider
      value={{
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        certificates,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        bulkImportCertificates,
        verifyCertificate,
        siteSettings,
        updateSiteSettings,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        applications,
        submitApplication,
        updateApplicationStatus,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        resetToDefaultData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
