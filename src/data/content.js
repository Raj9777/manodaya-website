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
    description: "Specialized intervention focusing on distress tolerance, emotion regulation, mindfulness, and interpersonal effectiveness.",
    highlights: ["Mindfulness Skills", "Distress Tolerance Modules", "Emotional Regulation Strategies"]
  },
  {
    id: "erp-ocd",
    category: "adult",
    title: "Exposure & Response Prevention (ERP)",
    description: "First-line evidence-based protocol for Obsessive-Compulsive Disorder (OCD) and phobic anxiety.",
    highlights: ["Hierarchy Building", "In-Vivo & Imaginal Exposure", "Compulsion Prevention"]
  },
  {
    id: "child-adolescent-therapy",
    category: "child",
    title: "Child & Adolescent Psychotherapy",
    description: "Play-informed and age-appropriate therapeutic interventions to help young individuals process trauma, stress, and anxiety.",
    highlights: ["Expressive Art & Play Therapy", "Emotion Identification", "Coping Cards & Skill Kits"]
  },
  {
    id: "pmt-parenting",
    category: "child",
    title: "Parent Management Training (PMT) & Guidance",
    description: "Structured coaching for parents to manage challenging behaviors, establish routines, and enhance parent-child attachment.",
    highlights: ["Positive Reinforcement Systems", "De-escalation Techniques", "Consistent Discipline Routines"]
  },
  {
    id: "social-skills-training",
    category: "child",
    title: "Social Skills & Emotional Regulation Training",
    description: "Targeted individual or small-group modules for neurodivergent children to build peer interactions and self-soothing.",
    highlights: ["Non-verbal Cue Recognition", "Peer Turn-taking", "Frustration Tolerance"]
  },
  {
    id: "couples-family",
    category: "adult",
    title: "Couples & Family Therapy",
    description: "Systemic therapy for relationship distress, premarital counseling, and caregiver family burden.",
    highlights: ["Communication Patterns", "Conflict Resolution", "Relational Empathy"]
  },
  {
    id: "stress-anxiety",
    category: "adult",
    title: "Stress & Exam Anxiety Intervention",
    description: "Tailored programs for adolescents and working adults to manage burnouts, high-stakes exam pressure, and performance stress.",
    highlights: ["Biofeedback & Relaxation", "Study & Time Management", "Cognitive De-catastrophizing"]
  }
];

export const REHABILITATION = [
  {
    id: "attention-retraining",
    title: "Attention & Executive Function Training",
    audience: "Both Child & Adult",
    description: "Computerized and tactile exercises to expand sustained, selective, and divided attention capacities."
  },
  {
    id: "memory-rehab",
    title: "Working Memory & Retraining Programmes",
    audience: "Both Child & Adult",
    description: "Structured memory strategies, dual N-back protocols, and compensatory internal/external memory aids."
  },
  {
    id: "post-stroke-rehab",
    title: "Post-Stroke & Brain Injury Cognitive Rehabilitation",
    audience: "Adult & Senior",
    description: "Targeted restorative modules for processing speed, executive planning, spatial neglect, and language recovery."
  },
  {
    id: "dementia-mci-care",
    title: "Cognitive Rehabilitation for Dementia & MCI",
    audience: "Adult & Senior",
    description: "Cognitive stimulation therapy (CST) and environmental adaptations to preserve daily independence and dignity."
  },
  {
    id: "epilepsy-retraining",
    title: "Cognitive Retraining for Epilepsy & Neurological Disorders",
    audience: "Both Child & Adult",
    description: "Individualized neurocognitive adaptation for seizure-related cognitive fatigue and medication side effects."
  }
];

export const SUPPORT_GROUPS = [
  {
    id: "sg-adhd",
    title: "ADHD Support Group",
    audience: "Teens & Adults with ADHD",
    schedule: "Bi-Weekly Saturdays (Online & In-Person)",
    description: "A compassionate space to share executive function strategies, unmasking experiences, and peer support."
  },
  {
    id: "sg-asd",
    title: "Autism Spectrum Disorder (ASD) Circle",
    audience: "Neurodivergent Individuals & Families",
    schedule: "Monthly Sundays",
    description: "Peer connection focused on neurodiversity celebration, sensory management, and navigating societal barriers."
  },
  {
    id: "sg-ocd",
    title: "OCD Recovery & ERP Peer Group",
    audience: "Individuals Managing OCD",
    schedule: "1st & 3rd Friday Evenings",
    description: "Facilitated peer group reinforcement for staying committed to ERP protocols and reducing isolation."
  },
  {
    id: "sg-parent",
    title: "Parent & Caregiver Support Group",
    audience: "Parents of Neurodivergent / Special Needs Children",
    schedule: "Alternate Saturday Mornings",
    description: "Emotional safe haven for caregivers to share emotional burden, navigate educational advocacy, and recharge."
  }
];

export const INTERNSHIPS_WORKSHOPS = {
  internships: {
    title: "Psychology Internship & Clinical Observerships",
    eligibility: "UG/PG Psychology Students, M.Phil / M.Sc Scholars",
    highlights: [
      "Exposure to standardized psychometric and neuropsychological testing instruments",
      "Live case discussion and supervised clinical diagnostic formulation",
      "Observation of therapy sessions & intake interviews (with informed consent)",
      "Certificate of Clinical Completion and performance evaluation report"
    ]
  },
  workshops: [
    {
      title: "Standardized Neuropsychological Battery Administration",
      date: "Upcoming: August 20, 2026",
      duration: "2-Day Intensive Hands-on Workshop",
      target: "Psychology Students & Early Professionals"
    },
    {
      title: "Child & Adolescent Mental Health First Aid",
      date: "Upcoming: September 05, 2026",
      duration: "1-Day Skill Building Session",
      target: "School Counselors, Educators & Parents"
    },
    {
      title: "CBT Techniques in Clinical Practice",
      date: "Upcoming: September 18, 2026",
      duration: "Weekend Certificate Course",
      target: "Post-graduate Students & Counselors"
    }
  ]
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priyanka S.",
    role: "Parent of a 9-year-old child (ADHD Assessment)",
    quote: "Finding MANODAYA changed everything for our family. The comprehensive assessment gave us clear answers without labeling our child. The parent training gave us actionable tools that restored peace at home."
  },
  {
    id: 2,
    name: "Ramesh Chandra M.",
    role: "Post-Stroke Cognitive Rehab Client (Age 62)",
    quote: "After my stroke, processing numbers and planning my daily routine felt impossible. The cognitive rehabilitation exercises under guidance gave me back my independence step by step. Truly grateful!"
  },
  {
    id: 3,
    name: "Dr. Ananya P.",
    role: "M.Sc Psychology Graduate (Internship Trainee)",
    quote: "The clinical exposure during the 2-month internship at MANODAYA was unmatched. We received structured supervision on psychometric tools, case formulations, and ethical practices."
  },
  {
    id: 4,
    name: "Soumya & Rahul",
    role: "Couples Therapy Clients",
    quote: "The warm, non-judgmental environment helped us communicate openly about our stress. The therapist helped us understand each other's emotional triggers effectively."
  }
];

export const INITIAL_CRM_LEADS = [
  {
    id: "LEAD-101",
    patientName: "Sunita Das",
    phone: "+91 94371 22334",
    email: "sunita.das@example.com",
    category: "child",
    age: "8",
    service: "ADHD & Attention Assessment",
    type: "In-Person Consultation",
    date: "2026-07-30",
    time: "10:30 AM",
    status: "New",
    notes: "Parent reported difficulty maintaining focus in school and hyperactivity during homework.",
    createdAt: "2026-07-27 09:15"
  },
  {
    id: "LEAD-102",
    patientName: "Bhabani Sankar Mishra",
    phone: "+91 98610 55443",
    email: "bsmishra@example.com",
    category: "adult",
    age: "58",
    service: "Post-Stroke Cognitive Rehabilitation",
    type: "In-Person Consultation",
    date: "2026-07-29",
    time: "04:00 PM",
    status: "Scheduled",
    notes: "Requires memory and executive function retraining post-ischemic stroke.",
    createdAt: "2026-07-26 14:20"
  },
  {
    id: "LEAD-103",
    patientName: "Arpita Mohanty",
    phone: "+91 97780 11223",
    email: "arpita.m@example.com",
    category: "child",
    age: "21 (Student)",
    service: "Psychology Internship Application",
    type: "Online Enquiry",
    date: "2026-08-01",
    time: "02:00 PM",
    status: "Contacted",
    notes: "Final year B.A. Psychology student interested in August clinical batch.",
    createdAt: "2026-07-25 11:45"
  }
];
