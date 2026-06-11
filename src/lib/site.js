export const SITE = {
  name: "UBY'S String Academy",
  fullName: "UBY's Violin Academy",
  email: "info@ubysacademy.com",
  phone: "+234 906 651 4347",
  whatsapp: "https://chat.whatsapp.com/HcYyY2jR2NkIxTJbh4aU1Y",
  whatsappNumber: "2349066514347",
  address: "Lagos, Nigeria",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },

  // Director & Contact Info from DOC
  director: {
    name: "Isaac, Ubong Iniobong",
    phone: "09050839519",
    email: "uiisaac@jabu.edu.ng",
  },
  coordinator: {
    phone: "08065834962",
  },
  assistantCoordinator: {
    phone: "07065661493",
  },
  generalSecretary: {
    phone: "07075168294",
  },
  mediaOfficer: {
    phone: "07047919688",
  },

  // Location from DOC
  location: {
    venue: "UBYs Violin Academy",
    campus: "Joseph Ayo Babalola University",
    town: "Ikeji-Arakeji",
    state: "Osun State",
    country: "Nigeria",
  },

  // Fees from DOC
  fees: {
    registration: "₦10,000",
    physicalSemester: "₦5,000 per semester",
    onlineTuition: "₦100,000",
    onlineDuration: "6 Months",
  },

  // History from DOC
  history: {
    founded: "February 2022",
    origin: "Joseph Ayo Babalola University, Ikeji-Arakeji, Osun State, Nigeria",
    founder: "Isaac, Ubong Iniobong",
    pioneerStudents: [
      "Oreoluwa Olutimehin",
      "Tabitha Ogundimu",
      "Feranmi Ajala",
    ],
    earlyMembers: [
      "Ore Babalola",
      "Divine Adeola",
      "Mercy Akafo",
      "Afolabi Hope",
      "Bolanle Adeleke",
      "Gbemisola Tabitha",
    ],
    notableSupporters: ["John Babalola", "Agurisa Francis", "David Felagha"],
  },

  // Academic Structure from DOC
  grades: [
    {
      level: "Grade 1",
      title: "Foundation Music Theory",
      duration: "1–3 Months",
      topics: [
        "Fundamentals of music theory",
        "Musical notation",
        "Rhythm and timing",
        "Basic ear training",
        "Music reading skills",
      ],
      description:
        "This stage marks the beginning of every student's musical journey.",
    },
    {
      level: "Grade 2",
      title: "Instrument Foundation",
      duration: "From the 2nd month until the end of the programme",
      topics: [
        "Selection of a musical instrument",
        "Parts and maintenance of the instrument",
        "Letter names and finger placements",
        "Scale exercises",
        "Basic performance techniques",
        "Proper posture and instrument handling",
      ],
    },
    {
      level: "Grade 3",
      title: "Advanced Techniques",
      duration: "Approximately 6 months until programme completion",
      topics: [
        "Vibrato",
        "Tremolo",
        "Slurs",
        "Position playing",
        "Advanced bowing techniques",
        "Intermediate and advanced repertoire for Violin, Viola, and Cello",
      ],
    },
  ],

  // Examination Structure from DOC
  examinations: [
    {
      stage: "Stage One",
      title: "Music Theory Examination",
      description:
        "Students complete the Academy's music theory programme, including affiliated courses from OpenLearn (UK) and Cursa, then sit for a theory examination conducted by the Academy.",
    },
    {
      stage: "Stage Two",
      title: "Recital Assessment",
      description:
        "10 Structured Recitals — Students progress from Beginner to Intermediate and Professional levels through a series of ten assessed recitals.",
      requirements: [
        "Participation in 10 recital sessions",
        "Performance of two pieces per recital",
        "Repertoire drawn from Hymns, J.S. Bach, Handel, Mozart, Beethoven & other approved composers",
      ],
      note: "All performances are recorded, assessed, and scored as part of the student's overall evaluation.",
    },
    {
      stage: "Stage Three",
      title: "Final Examination",
      description:
        "The final examination combines both Theory Assessment and Practical Performance Assessment.",
      result: "Successful candidates will receive certification from the Academy.",
    },
  ],

  // Activities from DOC
  activities: {
    weekly: [
      {
        day: "Saturday Classes",
        time: "9:00 a.m. – 12:00 p.m.",
      },
      {
        day: "Thursday Training Sessions",
        time: "6:00 p.m. – 7:30 p.m.",
      },
      {
        day: "Sunday Online Content",
        description:
          "Livestream and recorded performances — Hymns, Spiritual songs, Quartet performances, Quintet performances, Special musical presentations on social media platforms",
      },
    ],
    special: [
      "Workshops",
      "Holiday music camps",
      "Professional training sessions",
      "Masterclasses",
    ],
    performances: [
      "University Convocation Ceremonies",
      "Choir Concerts",
      "Carol Services",
      "Sunday Worship Services",
      "Other major institutional events",
    ],
  },

  // Vision from DOC
  vision:
    "To become Nigeria's foremost string conservatory, raising highly skilled musicians through quality music education, performance, discipline, and excellence.",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/journey", label: "Journey" },
  { to: "/gallery", label: "Gallery" },
  { to: "/certification", label: "Certification" },
  { to: "/contact", label: "Contact" },
];

// FAQ data from DOC context
export const FAQS = [
  {
    q: "What ages do you accept?",
    a: "We accept students from age 6 through adulthood — beginners and advanced players alike.",
  },
  {
    q: "Do I need to own an instrument before enrolling?",
    a: "No. We can guide you on appropriate instrument selection and rental options after assessment.",
  },
  {
    q: "How often are lessons?",
    a: "Programmes include weekly one-to-one lessons plus group theory and ensemble sessions. Saturday classes run 9:00 a.m. – 12:00 p.m. and Thursday training sessions run 6:00 p.m. – 7:30 p.m.",
  },
  {
    q: "Do you offer scholarships?",
    a: "A limited number of merit-based scholarships are reviewed annually. Contact us for current openings.",
  },
  {
    q: "What is the academic structure?",
    a: "The Academy offers three progressive grade levels: Grade 1 (Foundation Music Theory, 1–3 months), Grade 2 (Instrument Foundation, from 2nd month onward), and Grade 3 (Advanced Techniques, approximately 6 months).",
  },
  {
    q: "How are examinations conducted?",
    a: "Examinations are in three stages: Music Theory Examination, Recital Assessment (10 structured recitals), and a Final Examination combining both theory and practical performance assessments.",
  },
  {
    q: "What is the registration fee?",
    a: "The registration fee is ₦10,000. Physical programme dues are ₦5,000 per semester. The online programme (6 months) tuition is ₦100,000, separate from the registration fee.",
  },
  {
    q: "Do you offer online programmes?",
    a: "Yes! Virtual classes are available. The online programme duration is 6 months with a tuition fee of ₦100,000. Enrollment procedures and fees differ from the physical programme.",
  },
];