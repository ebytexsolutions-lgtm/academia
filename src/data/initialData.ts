import { Course, CertificateRecord, Notice, SiteSettings } from '../types';

export const initialSiteSettings: SiteSettings = {
  academyName: 'UET Academy Lahore',
  subTitle: 'University of Engineering and Technology, Lahore (Est. 1921)',
  tagline: 'Excellence in Hands-on Engineering, IT & Professional Certification',
  marqueeAnnouncement: '🎓 Admissions Open for Spring 2026 Batch 44! Weekend and Evening classes available. Limited seats available in AI, AutoCAD & BIM. Contact Admissions Helpline: 042-99029216 / 0320-1418991.',
  heroHeadline: 'Bridge The Industry Gap With UET Certified Skills',
  heroSubheadline: 'Official technical & professional training programs supervised by premier engineering faculty at Pakistan’s historic engineering institution.',
  directorName: 'Prof. Dr. Kashif Manzoor',
  directorTitle: 'Director, UET Academy & Dept. of Architectural Engineering',
  directorMessage: 'Welcome to UET Academy Lahore. Our prime mission is to equip youth and professionals with practical industrial competencies. Designed by seasoned academicians and industry veterans, our programs bridge the critical gap between theoretical degree coursework and marketplace demands. Every certificate issued reflects rigorous assessments and verifiable technical competence.',
  aboutHistory: 'UET Academy operates within the prestigious University of Engineering and Technology (UET) Lahore, an institution with over a century of engineering legacy founded in 1921. Established to serve the growing need for high-end specialized continuing education, the Academy has trained over 25,000 professionals, engineers, programmers, and entrepreneurs across Pakistan and overseas.',
  aboutMission: 'To deliver premier, accessible, and career-transforming training programs in cutting-edge computational technologies, architectural designs, modern engineering suites, and global languages.',
  aboutVision: 'To be the benchmark center of professional excellence and human capital development recognized globally by employers and industry bodies.',
  phonePrimary: '042-99029216',
  phoneSecondary: '042-99029452',
  mobileWhatsApp: '0320-1418991',
  email: 'academy@uet.edu.pk',
  address: 'Department of Architectural Engineering & Design, UET Main Campus, G.T. Road, Lahore, Punjab, Pakistan',
  campusOffice: 'Architectural Engineering Dept., Ground Floor, UET Lahore Main Campus',
  bankInfo: {
    bankName: 'Habib Bank Limited (HBL)',
    accountTitle: 'UET Academy Student Dues',
    accountNo: '0158-2203-0001',
    iban: 'PK23HABB0001287901582203',
    branch: 'UET Branch, G.T. Road Lahore (Branch Code 0158)'
  }
};

export const initialCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Artificial Intelligence & Machine Learning with Python',
    category: 'Information Technology',
    duration: '8 Weeks (Weekend)',
    fee: 25000,
    timings: 'Saturday & Sunday (10:00 AM - 1:00 PM)',
    deliveryMode: 'On-Campus & Online',
    instructor: 'Engr. M. Farhan Khalid',
    instructorTitle: 'Senior AI Specialist & Adjunct Lecturer',
    description: 'Comprehensive hands-on training starting from Python fundamentals, NumPy, Pandas, Scikit-Learn to deep neural networks, computer vision, and real-world ML deployment.',
    prerequisites: 'Basic programming concepts and familiarity with mathematics.',
    syllabus: [
      'Python for Data Science (NumPy, Pandas, Matplotlib)',
      'Supervised Learning: Regression, Classification, Support Vector Machines',
      'Unsupervised Learning: Clustering & Dimensionality Reduction',
      'Neural Networks & Introduction to Deep Learning with PyTorch',
      'Model Evaluation, Hyperparameter Tuning & Model Deployment API'
    ],
    featured: true,
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-2',
    title: 'AutoCAD 2D & 3D for Civil & Architectural Engineering',
    category: 'Engineering & CAD',
    duration: '6 Weeks (Weekend)',
    fee: 18000,
    timings: 'Saturday & Sunday (02:00 PM - 05:00 PM)',
    deliveryMode: 'On-Campus',
    instructor: 'Ar. Kashif Fazal',
    instructorTitle: 'Principal Architect & CAD Instructor',
    description: 'Master industry-standard computer-aided drafting. Learn municipal submissions, architectural floor plans, elevations, section drawings, 3D modeling, and plotting.',
    prerequisites: 'Open to diploma holders, engineering & architecture students or hobbyists.',
    syllabus: [
      'AutoCAD Interface, Drawing Setup, Coordinates & Snap Settings',
      '2D Drafting Commands, Layers, Blocks, and Annotation Scales',
      'Architectural Layouts, Structural Sections & Municipality Submission Sheets',
      '3D Isometric & Solid Modeling, Materials, Lighting and Camera Views',
      'Plotting, Layout Sheet Management & PDF Export'
    ],
    featured: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-3',
    title: 'Revit Architecture & BIM (Building Information Modeling)',
    category: 'Engineering & CAD',
    duration: '8 Weeks (Weekend)',
    fee: 22000,
    timings: 'Saturday & Sunday (10:00 AM - 01:00 PM)',
    deliveryMode: 'On-Campus',
    instructor: 'Engr. M. Zeeshan',
    instructorTitle: 'BIM Coordinator & Structural Consultant',
    description: 'Transition from traditional CAD to intelligent 3D Building Information Modeling. Generate coordinated parametric building designs, schedules, and construction documentation.',
    prerequisites: 'Familiarity with building construction drawings or basic CAD.',
    syllabus: [
      'BIM Principles and Autodesk Revit Workspace Configuration',
      'Parametric Walls, Curtain Walls, Doors, Windows, Roofs & Slabs',
      'Structural Columns, Beams, Foundations and Compound Ceilings',
      'Automated Schedules, Quantity Take-offs & Material Estimations',
      'Clash Detection, Rendering & Worksharing Collaboration'
    ],
    featured: true,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-4',
    title: 'Full Stack Web Development (React & Node.js)',
    category: 'Information Technology',
    duration: '10 Weeks (Weekend & Evening)',
    fee: 26000,
    timings: 'Friday (05:00 PM - 08:00 PM) & Sunday (02:00 PM - 05:00 PM)',
    deliveryMode: 'On-Campus & Online',
    instructor: 'Engr. Usama Tariq',
    instructorTitle: 'Full-Stack Lead Engineer',
    description: 'Build modern responsive enterprise web applications. Covers modern JavaScript (ES6+), React, Tailwind CSS, Node.js, Express, MongoDB/SQL, and cloud deployment.',
    prerequisites: 'Basic computer literacy. No prior coding required.',
    syllabus: [
      'Modern HTML5, Semantic Elements, CSS3 Flexbox & Tailwind CSS',
      'JavaScript ES6+, Asynchronous Programming, Promises & Fetch API',
      'React.js Component Architecture, Hooks, State & Routing',
      'Node.js REST APIs with Express & Database Integration',
      'Authentication (JWT), Cloud Hosting & Live Capstone Project'
    ],
    featured: true,
    badge: 'Job Ready',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-5',
    title: 'Primavera P6 & Construction Project Management',
    category: 'Project & Quality Management',
    duration: '6 Weeks (Weekend)',
    fee: 20000,
    timings: 'Saturday & Sunday (02:30 PM - 05:30 PM)',
    deliveryMode: 'On-Campus',
    instructor: 'Engr. Haris Mehmood (PMP)',
    instructorTitle: 'Senior Project Planning Manager',
    description: 'Learn enterprise project planning, Work Breakdown Structure (WBS), CPM scheduling, resource allocation, cost control, S-Curves, and earned value analysis in Primavera P6.',
    prerequisites: 'Engineers, project managers, construction supervisors, business graduates.',
    syllabus: [
      'Project Management Framework & Enterprise Project Structure (EPS)',
      'Developing Work Breakdown Structure (WBS) & Activity Sequencing',
      'Critical Path Method (CPM) Scheduling & Constraint Handling',
      'Resource Loading, Leveling & Budget Allocation',
      'Project Baseline, Progress Tracking, S-Curve & Earned Value Management'
    ],
    featured: false,
    badge: 'Professional',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-6',
    title: 'Digital Marketing & Social Media Brand Growth',
    category: 'Digital Skills & Design',
    duration: '6 Weeks (Weekend)',
    fee: 16000,
    timings: 'Saturday & Sunday (11:00 AM - 02:00 PM)',
    deliveryMode: 'On-Campus & Online',
    instructor: 'Ms. Ayesha Siddiqa',
    instructorTitle: 'Digital Strategist & Performance Marketer',
    description: 'Master SEO, Meta (Facebook & Instagram) Ads, Google Search Ads, Content Marketing, Email automation, and Google Analytics to scale businesses or freelance clients.',
    prerequisites: 'Basic internet familiarity.',
    syllabus: [
      'Digital Marketing Landscape & Brand Positioning Strategy',
      'Search Engine Optimization (On-Page, Technical & Keyword Research)',
      'Meta Ads Manager: Campaigns, Custom Audiences, Retargeting & Pixel',
      'Google Ads (Search & Display) & YouTube Video Advertising',
      'Data Analytics with Google Analytics 4 & Conversion Rate Optimization'
    ],
    featured: false,
    badge: 'Freelancing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-7',
    title: 'QA / QC & Quantity Estimation for Civil Construction',
    category: 'Project & Quality Management',
    duration: '6 Weeks (Weekend)',
    fee: 19000,
    timings: 'Saturday & Sunday (03:00 PM - 06:00 PM)',
    deliveryMode: 'On-Campus',
    instructor: 'Engr. Noman Ashraf',
    instructorTitle: 'Quality Assurance Consultant (PEC Certified)',
    description: 'Practical training on quality inspection protocols, field testing of concrete/steel, Bar Bending Schedule (BBS), Bill of Quantities (BOQ), and rate analysis.',
    prerequisites: 'DAE Civil or BSc Civil Engineering students/graduates.',
    syllabus: [
      'Standard Quality Control Manuals & Specifications (ASTM / AASHTO)',
      'Material Testing (Slump, Compressive strength, aggregate analysis)',
      'Bar Bending Schedule (BBS) for Footings, Columns, Beams & Slabs',
      'Bill of Quantities (BOQ) Preparation & Measurement Sheet Standards',
      'Tendering, Rate Analysis & Contractor Bill Audits'
    ],
    featured: false,
    badge: 'Industry Standard',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-8',
    title: 'German Language for Engineers & Study in Germany (A1 & A2)',
    category: 'Languages & Communication',
    duration: '10 Weeks (Evening)',
    fee: 22000,
    timings: 'Tuesday, Thursday, Friday (05:00 PM - 07:00 PM)',
    deliveryMode: 'On-Campus & Online',
    instructor: 'Herr Ahmad Bilal (Goethe Certified)',
    instructorTitle: 'Goethe-Institut Certified German Language Instructor',
    description: 'Designed specifically for Pakistani engineers, medical graduates, and students planning for higher education or blue card careers in Germany. Goethe A1/A2 syllabus focus.',
    prerequisites: 'None. Absolute beginners welcome.',
    syllabus: [
      'German Phonetics, Alphabet & Everyday Greetings',
      'Grammar: Articles, Cases (Nominative, Accusative, Dative) & Verb Conjugation',
      'Listening Comprehension & Conversational Dialogues',
      'Reading & Formal Letter/Email Writing for German Universities',
      'Mock Goethe Exam Preparation & Visa Interview Guidance'
    ],
    featured: false,
    badge: 'Study Abroad',
    image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const initialCertificates: CertificateRecord[] = [
  {
    id: 'cert-1',
    certificateNo: 'UETA-2025-0842',
    studentName: 'Muhammad Hamza Khan',
    fatherName: 'Tariq Mehmood Khan',
    cnic: '35202-1234567-1',
    mobileNumber: '0300-1234567',
    registrationNo: '2025-UETA-0842',
    courseTitle: 'Artificial Intelligence & Machine Learning with Python',
    batchSession: 'Batch-42 (Fall 2025)',
    issueDate: '2025-12-20',
    completionDate: '2025-12-14',
    duration: '8 Weeks',
    grade: 'A+',
    marksPercentage: 94,
    status: 'Verified & Active',
    issuingAuthority: 'Director UET Academy Lahore',
    qrCodeToken: 'VERIFIED_UET_ACADEMY_3520212345671'
  },
  {
    id: 'cert-2',
    certificateNo: 'UETA-2025-0914',
    studentName: 'Syeda Fatima Zahra',
    fatherName: 'Syed Ali Raza',
    cnic: '35201-9876543-5',
    mobileNumber: '0321-4567890',
    registrationNo: '2025-UETA-0914',
    courseTitle: 'AutoCAD 2D & 3D for Civil & Architectural Engineering',
    batchSession: 'Batch-41 (Summer 2025)',
    issueDate: '2025-09-10',
    completionDate: '2025-08-30',
    duration: '6 Weeks',
    grade: 'Completed with Distinction',
    marksPercentage: 96,
    status: 'Verified & Active',
    issuingAuthority: 'Director UET Academy Lahore',
    qrCodeToken: 'VERIFIED_UET_ACADEMY_3520198765435'
  },
  {
    id: 'cert-3',
    certificateNo: 'UETA-2025-1033',
    studentName: 'Bilal Ahmad Gujjar',
    fatherName: 'Chaudhry Riaz Ahmad',
    cnic: '38403-5432109-3',
    mobileNumber: '0333-8765432',
    registrationNo: '2025-UETA-1033',
    courseTitle: 'Revit Architecture & BIM (Building Information Modeling)',
    batchSession: 'Batch-42 (Fall 2025)',
    issueDate: '2025-12-28',
    completionDate: '2025-12-22',
    duration: '8 Weeks',
    grade: 'A',
    marksPercentage: 88,
    status: 'Verified & Active',
    issuingAuthority: 'Director UET Academy Lahore',
    qrCodeToken: 'VERIFIED_UET_ACADEMY_3840354321093'
  },
  {
    id: 'cert-4',
    certificateNo: 'UETA-2025-1155',
    studentName: 'Zainab Noor',
    fatherName: 'Muhammad Akram',
    cnic: '35202-7788990-2',
    mobileNumber: '0345-1122334',
    registrationNo: '2025-UETA-1155',
    courseTitle: 'Full Stack Web Development (React & Node.js)',
    batchSession: 'Batch-42 (Fall 2025)',
    issueDate: '2026-01-15',
    completionDate: '2026-01-10',
    duration: '10 Weeks',
    grade: 'A+',
    marksPercentage: 95,
    status: 'Verified & Active',
    issuingAuthority: 'Director UET Academy Lahore',
    qrCodeToken: 'VERIFIED_UET_ACADEMY_3520277889902'
  }
];

export const initialNotices: Notice[] = [
  {
    id: 'notice-1',
    title: 'Admissions Open for Spring 2026 - Short Certificate Courses Batch 44',
    category: 'Admissions',
    date: 'March 28, 2026',
    isUrgent: true,
    content: 'Applications are cordially invited for professional courses starting this month at Architectural Engineering & Design Dept, UET Lahore Main Campus. Classes offered on Saturdays & Sundays.',
    attachmentName: 'Admission_Schedule_Spring_2026.pdf'
  },
  {
    id: 'notice-2',
    title: 'Certificate Distribution Ceremony for Batch 42 & 43 Graduates',
    category: 'General',
    date: 'March 15, 2026',
    isUrgent: false,
    content: 'Successful students of Batch 42 and 43 can collect their printed embossed certificates from the UET Academy office during working hours (9:00 AM to 4:00 PM).',
    attachmentName: 'Ceremony_Guidelines.pdf'
  },
  {
    id: 'notice-3',
    title: 'Free Workshop on "AI Applications in Civil & Architectural Design"',
    category: 'Workshops',
    date: 'March 05, 2026',
    isUrgent: false,
    content: 'Join us for an exclusive 2-hour practical seminar hosted at the Computer Lab, Architectural Engineering Dept, UET Lahore. Open to all students and professionals.',
    attachmentName: 'Workshop_Brochure.pdf'
  }
];
