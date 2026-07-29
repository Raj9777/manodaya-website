// Content repository for MANODAYA - Advanced Neuropsychological & Cognitive Care

export const CLINIC_INFO = {
  name: "MANODAYA",
  tagline: "Advanced Neuropsychological & Cognitive Care",
  location: "Plot No. 124, Near Lingaraj Temple Road, Old Town, Bhubaneswar, Odisha 751002",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "care@manodaya.in",
  timings: "Monday – Saturday: 9:00 AM – 7:30 PM | Sunday: By Prior Appointment",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14972.164344400767!2d85.8239!3d20.2443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a793a388b1f5%3A0xb3a8247df6070624!2sOld%20Town%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const AUDIENCE_CONFIG = {
  child: {
    key: "child",
    title: "Child & Adolescent Care",
    ageRange: "Ages 0 – 18 Years",
    badge: "Nurturing Growth & Learning",
    heroHeadline: "Specialized Pediatric & Adolescent Neuropsychological Care",
    heroSubheadline: "Empowering children and teenagers through compassionate developmental screening, ADHD & Autism assessments, learning disability care, and parent guidance.",
    primaryColor: "var(--color-pastel-purple)",
    accentBg: "rgba(167, 139, 250, 0.12)"
  },
  adult: {
    key: "adult",
    title: "Adult & Geriatric Care",
    ageRange: "Ages 18+ Years",
    badge: "Healing, Resilience & Cognitive Care",
    heroHeadline: "Advanced Neuropsychological Rehabilitation & Psychotherapy",
    heroSubheadline: "Evidence-based psychotherapy, cognitive remediation for stroke/epilepsy, memory care, dementia screening, and emotional regulation across adulthood.",
    primaryColor: "var(--color-teal-dark)",
    accentBg: "rgba(15, 56, 50, 0.08)"
  }
};

export const TEAM_MEMBERS = [
  {
    id: "dr-sayali-mishra",
    name: "Dr. Sayali Mishra",
    role: "Senior Clinical Psychologist",
    qualifications: "M.Phil, PhD | RCI Registered (A06381)",
    experience: "20 Years Experience",
    image: "/images/Sayali-image.png",
    shortBio: "Senior Clinical Psychologist with 20 years of experience in mental health and clinical psychology. Currently faculty & PhD supervisor at KIMS Bhubaneswar, with prior clinical associations at AIIMS Bhubaneswar, Sahyadri Hospital Pune, Infosys, and Viacom18.",
    fullBioPara1: "Dr. Sayali Mishra is a Senior Clinical Psychologist with 20 years of experience in mental health and clinical psychology. She has previously worked with AIIMS Bhubaneswar, Sahyadri Multispeciality Hospital Pune, Manam Foundation, and as a visiting consultant with Infosys and Viacom18. She is currently associated with KIMS, Bhubaneswar as faculty and PhD supervisor in Clinical Psychology.",
    fullBioPara2: "Her areas of expertise include psychological and neurocognitive assessments, child and adolescent mental health, learning disability assessment, cognitive rehabilitation, career and aptitude assessment, and psychotherapy. She is trained in CBT, DBT and mindfulness-based interventions, with experience in managing depression, OCD, phobias, personality concerns and school refusal.",
    specialInterests: [
      "Neuropsychology",
      "Child & Adolescent Mental Health",
      "Psychological Assessment",
      "Cognitive Rehabilitation",
      "CBT & DBT",
      "Learning Disabilities",
      "Career Counselling"
    ]
  },
  {
    id: "ashwini-rajmohan",
    name: "Ashwini Rajmohan",
    role: "Psychologist",
    qualifications: "M.Sc. Clinical Psychology | Doctoral Scholar",
    experience: "5 Years Experience",
    image: "/images/Ashwini-Image.png",
    shortBio: "Psychologist & Doctoral Scholar at KIMS Bhubaneswar with 5 years of experience across clinical, school, and hospital settings. Currently associated with Rahat Hospital, specializing in child/adolescent mental health, perinatal care, and ERP for OCD.",
    fullBioPara1: "Ashwini Rajmohan is a Psychologist with 5 years of experience across clinical, school, hospital, and corporate mental health settings. She holds an M.Sc. in Clinical Psychology and is currently a Doctoral Scholar in Clinical Psychology at KIMS, Bhubaneswar. She has worked extensively with children and adolescents in school settings and has provided corporate mental health support through the Employee Assistance Programme (EAP) at Cognizant. She is currently associated with Rahat Hospital, Bhubaneswar, working with perinatal mental health concerns, including postpartum depression and baby blues, as well as developmental and emotional concerns in children.",
    fullBioPara2: "Her areas of expertise include child and adolescent mental health, psychotherapy, perinatal mental health, OCD interventions, and cognitive training. Her therapeutic approach incorporates CBT, DBT, mindfulness-based interventions, and Exposure and Response Prevention (ERP) for OCD. She is also trained in Cognitive Training, focusing on attention, memory, executive functioning, and related cognitive abilities.",
    specialInterests: [
      "Child & Adolescent Mental Health",
      "CBT & DBT",
      "ERP for OCD",
      "Cognitive Training",
      "Mindfulness-Based Interventions",
      "Perinatal Mental Health",
      "Anxiety & Emotional Concerns"
    ]
  }
];

export const ASSESSMENTS = [
  {
    id: "adhd-child",
    category: "child",
    title: "ADHD & Attention Assessment",
    badge: "Child & Adolescent",
    description: "Standardized evaluation for hyperactivity, impulsivity, and attention deficits in children and teens using validated clinical batteries.",
    tools: "Vanderbilt Assessment Scales, Conners 3, Continuous Performance Test (CPT-3)",
    duration: "2 - 3 Sessions"
  },
  {
    id: "autism-screening",
    category: "child",
    title: "Autism Spectrum Assessment / Screening",
    badge: "Child & Adolescent",
    description: "Comprehensive diagnostic screening for social communication difficulties, repetitive behaviors, and sensory processing differences.",
    tools: "ADOS-2, CARS-2, M-CHAT-R/F, Social Communication Questionnaire (SCQ)",
    duration: "2 - 4 Sessions"
  },
  {
    id: "iq-dq-child",
    category: "child",
    title: "IQ & Developmental (DQ) Assessment",
    badge: "Child & Adolescent",
    description: "Formal cognitive capacity profiling and developmental quotient evaluation for toddlers, children, and young adolescents.",
    tools: "WISC-V, VSMS, Development Assessment Scales for Indian Infants (DASII)",
    duration: "2 Sessions"
  },
  {
    id: "sld-child",
    category: "child",
    title: "Specific Learning Disability (SLD) Assessment",
    badge: "Child & Adolescent",
    description: "Diagnostic assessment for Dyslexia (Reading), Dysgraphia (Writing), and Dyscalculia (Maths) to secure academic accommodations.",
    tools: "NIMHANS Index for SLD, WRAT-5, Diagnostic Test for Learning Disability (DTLD)",
    duration: "3 Sessions"
  },
  {
    id: "behavioral-child",
    category: "child",
    title: "Behavioural & Emotional Assessment",
    badge: "Child & Adolescent",
    description: "In-depth screening for oppositionality, emotional regulation challenges, separation anxiety, and school refusal.",
    tools: "Child Behavior Checklist (CBCL), BASC-3, Screen for Child Anxiety (SCARED)",
    duration: "2 Sessions"
  },
  {
    id: "neuro-comprehensive",
    category: "adult",
    title: "Comprehensive Neuropsychological Assessment",
    badge: "Adult & Geriatric",
    description: "Detailed profiling of brain-behavior relationships, memory systems, executive functioning, and perceptual abilities.",
    tools: "NIMHANS Neuropsychological Battery, PGI Battery, Luria-Nebraska Test",
    duration: "3 Sessions"
  },
  {
    id: "executive-function",
    category: "adult",
    title: "Attention & Executive Function Assessment",
    badge: "Adult & Geriatric",
    description: "In-depth profiling of planning, working memory, mental flexibility, and cognitive control mechanisms.",
    tools: "Wisconsin Card Sorting Test (WCST), Stroop Color-Word Test, Trail Making Test",
    duration: "2 Sessions"
  },
  {
    id: "memory-dementia",
    category: "adult",
    title: "Dementia & Mild Cognitive Impairment (MCI) Screening",
    badge: "Adult & Geriatric",
    description: "Early identification of age-related memory decline, Alzheimer's risk factors, and vascular dementia screening.",
    tools: "MoCA, MMSE, ACE-III, Clinical Dementia Rating (CDR)",
    duration: "2 Sessions"
  },
  {
    id: "post-stroke-epilepsy",
    category: "adult",
    title: "Cognitive Assessment for Epilepsy & Post-Stroke Care",
    badge: "Adult & Geriatric",
    description: "Pre/post surgical cognitive mapping for epilepsy and functional loss assessment following cerebrovascular events.",
    tools: "WMS-IV, Token Test, Boston Naming Test, Reaction Time Batteries",
    duration: "2 - 3 Sessions"
  },
  {
    id: "personality-psychodiagnostic",
    category: "adult",
    title: "Personality & Psychodiagnostic Assessment",
    badge: "Adult & Geriatric",
    description: "Clarification of mood disorders, anxiety syndromes, personality traits, and differential diagnostic formulation.",
    tools: "MMPI-2 / MMPI-3, MCMI-IV, Rorschach Inkblot Method, TAT",
    duration: "3 Sessions"
  }
];

export const THERAPIES = [
  {
    id: "cbt",
    category: "adult",
    title: "Cognitive Behaviour Therapy (CBT)",
    description: "Gold-standard structured therapy targeting unhelpful thought patterns and behavioral responses in depression and anxiety.",
    highlights: ["Automatic Thought Restructuring", "Behavioral Activation", "Core Belief Modification"]
  },
  {
    id: "dbt",
    category: "adult",
    title: "Dialectical Behaviour Therapy (DBT)",
    description: "Mindfulness-based emotional regulation, distress tolerance, and interpersonal effectiveness modules.",
    highlights: ["Emotion Regulation", "Distress Tolerance", "Mindfulness Practices"]
  }
];

export const REHABILITATION = [
  {
    id: "rehab-adhd",
    title: "Attention & Executive Training",
    description: "Restorative cognitive retraining for focus, planning, organization, and working memory."
  },
  {
    id: "rehab-stroke",
    title: "Post-Stroke Cognitive Remediation",
    description: "Targeted rehabilitation for processing speed, spatial neglect, memory recovery, and executive planning."
  }
];

export const REHAB_SERVICES = REHABILITATION;

export const SUPPORT_GROUPS = [
  {
    id: "sg-adhd",
    title: "Adult ADHD & Neurodivergent Circle",
    schedule: "Bi-weekly Saturdays @ 5:00 PM"
  },
  {
    id: "sg-parents",
    title: "Parents of Neurodivergent Children Circle",
    schedule: "Monthly Sundays @ 11:00 AM"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    image: "/images/testimonials/1.png",
    name: "Aarav S.",
    role: "Adolescent Student (ADHD Care)",
    quote: "Learning how my brain works and getting focus training at MANODAYA made school so much easier and less overwhelming. I feel confident now!",
    text: "Learning how my brain works and getting focus training at MANODAYA made school so much easier and less overwhelming. I feel confident now!",
    rating: 5
  },
  {
    id: 2,
    image: "/images/testimonials/2.png",
    name: "Sarmistha Das",
    role: "Corporate Executive & Scholar",
    quote: "Therapy and CBT sessions with Dr. Sayali and Ashwini helped me overcome severe anxiety and burnout. Highly professional and deeply empathetic environment.",
    text: "Therapy and CBT sessions with Dr. Sayali and Ashwini helped me overcome severe anxiety and burnout. Highly professional and deeply empathetic environment.",
    rating: 5
  },
  {
    id: 3,
    image: "/images/testimonials/3.png",
    name: "Dr. P. K. Mohapatra",
    role: "Parent of 9-year-old child",
    quote: "The ADHD and learning disability evaluation at MANODAYA was exceptionally thorough. The clinical report helped our school implement accommodations seamlessly.",
    text: "The ADHD and learning disability evaluation at MANODAYA was exceptionally thorough. The clinical report helped our school implement accommodations seamlessly.",
    rating: 5
  },
  {
    id: 4,
    image: "/images/testimonials/4.png",
    name: "Ramesh Chandra B.",
    role: "Family of Post-Stroke Patient",
    quote: "The cognitive rehabilitation program restored my father's memory and executive planning abilities significantly after his stroke. Forever grateful to the team.",
    text: "The cognitive rehabilitation program restored my father's memory and executive planning abilities significantly after his stroke. Forever grateful to the team.",
    rating: 5
  }
];

export const INITIAL_CRM_LEADS = [
  {
    id: "MAN-1082",
    patientName: "Soumya Ranjan Das",
    phone: "+91 98610 12345",
    email: "soumya.das@example.com",
    category: "child",
    age: "8 Years",
    service: "ADHD & Attention Assessment",
    type: "In-Person Consultation",
    date: "2026-07-30",
    time: "10:30 AM",
    status: "New",
    notes: "Parent noticed difficulty concentrating in school and restlessness.",
    createdAt: "26/07/2026, 11:30 AM"
  },
  {
    id: "MAN-1083",
    patientName: "Ananya Patnaik",
    phone: "+91 94370 67890",
    email: "ananya.p@example.com",
    category: "adult",
    age: "34 Years",
    service: "Cognitive Behaviour Therapy (CBT)",
    type: "Online Tele-Health",
    date: "2026-07-31",
    time: "03:00 PM",
    status: "Scheduled",
    notes: "Experiencing work stress and anxiety. Requested online video session.",
    createdAt: "26/07/2026, 02:15 PM"
  }
];
