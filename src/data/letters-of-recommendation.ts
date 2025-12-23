/**
 * LETTERS OF RECOMMENDATION DATA
 * 
 * This file contains metadata for all Letters of Recommendation (LORs) for NeuroNova.
 * The actual PNG image files should be placed in: public/letters-of-recommendation/
 * 
 * File naming convention: [number]-[organization/name]-[key-person]-[location]-[date].png
 */

export type LetterOfRecommendation = {
  id: string;
  fileName: string;
  category: "government" | "medical" | "ngo";
  organization: string;
  personName: string;
  personTitle: string;
  location: string;
  date: string;
  registrationNumber?: string;
  description: string;
  keyPoints: string[];
};

export const lettersOfRecommendation: LetterOfRecommendation[] = [
  // Government & Political Endorsements
  {
    id: "mp-mukesh-dalal",
    fileName: "01-mp-mukesh-dalal-surat-gujarat-2025-09-15.png",
    category: "government",
    organization: "Member of Parliament (Lok Sabha)",
    personName: "Mukesh Dalal",
    personTitle: "Member of Parliament, Surat, Gujarat",
    location: "Surat, Gujarat",
    date: "2025-09-15",
    description: "Recommendation from Member of Parliament for Surat, Gujarat, endorsing NeuroNova as an ASD-supportive 3D classroom game suitable for NGOs and inclusive schools.",
    keyPoints: [
      "Member of Parliamentary Standing Committee on Health and Family Welfare",
      "Endorses NeuroNova for NGOs and ASD classrooms",
      "Highlights offline functionality and privacy features",
      "Recommends pilot use followed by broader adoption"
    ]
  },
  {
    id: "mla-sandip-desai",
    fileName: "02-mla-sandip-desai-choryasi-surat-gujarat-2025-09-11.png",
    category: "government",
    organization: "Gujarat Legislative Assembly",
    personName: "Sandip Desai",
    personTitle: "Member of Legislative Assembly, Choryasi (Surat) Constituency",
    location: "Surat, Gujarat",
    date: "2025-09-11",
    description: "Recommendation from MLA for Choryasi constituency, Surat, endorsing NeuroNova as one of the first 3D titles in India developed with ASD-friendly design goals.",
    keyPoints: [
      "MLA for Choryasi (Surat) Constituency, Gujarat",
      "Recognizes NeuroNova as first 3D ASD-friendly game in India",
      "Emphasizes calm visuals, clean geometry, and gentle motion",
      "Suitable for low-connectivity settings and strict privacy requirements"
    ]
  },
  {
    id: "ex-mp-rameshbhai-dhaduk",
    fileName: "03-ex-mp-rameshbhai-dhaduk-porbandar-gujarat-2025-09-17.png",
    category: "government",
    organization: "Ex-Member of Parliament",
    personName: "Rameshbhai Dhaduk",
    personTitle: "Ex-Member of Parliament, 11-Porbandar Lok Sabha (Gujarat)",
    location: "Porbandar, Gujarat",
    date: "2025-09-17",
    description: "Recommendation from former Member of Parliament for Porbandar, Gujarat, endorsing NeuroNova for NGOs, inclusive schools, and therapy providers.",
    keyPoints: [
      "Ex-Member of Parliament, Porbandar, Gujarat",
      "Endorses NeuroNova for NGOs and ASD classrooms",
      "Highlights thoughtful, responsible engineering for real classrooms",
      "Useful adjunct for transitions, reducing overstimulation, and supporting regulation"
    ]
  },
  // Medical & Clinical Professional Opinions
  {
    id: "clinical-psychologist-siddhi-jain",
    fileName: "04-clinical-psychologist-siddhi-jain-mind-morale-agra.png",
    category: "medical",
    organization: "Mind Morale - Child and Adolescent Brain Development Centre",
    personName: "Dr. Siddhi Jain",
    personTitle: "Clinical Psychologist (CRR No. A64275)",
    location: "Agra",
    description: "Professional opinion from Clinical Psychologist reviewing NeuroNova's design and classroom application, finding it suitable for non-clinical, structured classroom use.",
    date: "2025",
    keyPoints: [
      "Clinical Psychologist with professional registration",
      "Reviewed demonstration sessions and teacher feedback",
      "Suitable for non-clinical, structured classroom use",
      "Promotes regulation and readiness to learn",
      "Should be used with care for photosensitive or motion-sensitive learners"
    ]
  },
  {
    id: "child-development-specialist-aarushi-khandaka",
    fileName: "05-child-development-specialist-aarushi-mittal-khandaka-jaipur-2025-08.png",
    category: "medical",
    organization: "Khandaka Hospital / Cherry's Little Bloomers",
    personName: "Dr. Aarushi Mittal Khandaka",
    personTitle: "Child Development Specialist (MBBS, MD Pediatrics, Reg. No.: 29052)",
    location: "Jaipur, Rajasthan",
    date: "2025-08",
    description: "Professional recommendation from Child Development Specialist for non-clinical classroom use with autistic learners, providing detailed review of NeuroNova's features and suitability.",
    keyPoints: [
      "Child Development Specialist with medical qualifications",
      "Reviewed testing processes, interface demonstrations, and trial reports",
      "Affirmative recommendation for time-bound, non-clinical classroom evaluations",
      "Best understood as teacher-guided transition aid",
      "Low-arousal visual/auditory design reduces sensory load",
      "Caution advised for photosensitive epilepsy or marked motion sensitivity"
    ]
  },
  {
    id: "developmental-psychologist-tanushree-dhandhania",
    fileName: "06-developmental-psychologist-tanushree-dhandhania-psychological-report-2025-09-16.png",
    category: "medical",
    organization: "Independent Professional Opinion",
    personName: "Tanushree Dhandhania",
    personTitle: "Developmental Psychologist and Research Scholar",
    location: "Consultative",
    date: "2025-09-16",
    description: "Comprehensive psychological report providing professional opinion on NeuroNova as a classroom transition support tool for autistic (ASD) learners.",
    keyPoints: [
      "Developmental Psychologist and Research Scholar",
      "Detailed psychological report (Professional Opinion)",
      "Well-suited for inclusive classrooms with predictable antecedents",
      "Expected outcomes: faster settling times, fewer prompts, greater early on-task behavior",
      "Coherent, feasible, and privacy-preserving micro-intervention",
      "Caution for photosensitive epilepsy or marked motion sensitivity"
    ]
  },
  // NGO & Institutional Endorsements
  {
    id: "care-u-365-assam",
    fileName: "07-care-u-365-bhrigu-borthakur-president-assam-2025-09-29.png",
    category: "ngo",
    organization: "Care U 365",
    personName: "Bhrigu Borthakur",
    personTitle: "President",
    location: "Sootea, Sonitpur, Assam",
    date: "2025-09-29",
    registrationNumber: "RS/SRP/242/F/181",
    description: "Letter of recommendation from Care U 365 endorsing NeuroNova as a student-built, non-clinical classroom aid for autistic and neurodivergent learners during transitions.",
    keyPoints: [
      "Registered under Societies Registration Act XXI, 1860",
      "Endorses NeuroNova for non-clinical classroom use",
      "Suitable for schools, therapy/learning centres, Anganwadi and NGO settings",
      "Especially valuable in low-infrastructure environments",
      "Low-arousal visuals, clear start-finish cues, closed-ended micro-tasks",
      "Complements existing strategies (visual schedules, routines, reinforcement)"
    ]
  },
  {
    id: "help-agra",
    fileName: "08-help-agra-surendra-kumar-jain-president-agra-2025-09-10.png",
    category: "ngo",
    organization: "Help Agra (हैल्प आगरा)",
    personName: "Surendra Kumar Jain",
    personTitle: "President",
    location: "Agra, Uttar Pradesh",
    date: "2025-09-10",
    registrationNumber: "2208/08-09",
    description: "Recommendation from Help Agra, an Agra-based non-profit, endorsing NeuroNova as an innovative educational and therapeutic platform for children and young adults with ASD.",
    keyPoints: [
      "Registered under Income Tax Act Section 80G and Society Act",
      "Based on multiple pilots and trials in schools, NGOs, and therapy centres in Agra",
      "Shows promise in building core skills: communication, attention, coordination, self-regulation",
      "Runs offline on basic laptops with simple visuals and unobtrusive audio",
      "Suitable for underserved areas with limited access to specialized facilities",
      "Wholeheartedly endorses adoption across schools, therapy centers, and NGO-run learning environments"
    ]
  },
  {
    id: "leaders-agra",
    fileName: "09-leaders-agra-dr-parth-sarthi-sharma-president-agra-2025-08-12.png",
    category: "ngo",
    organization: "Leaders Agra (लीडर्स आगरा)",
    personName: "Dr. Parth Sarthi Sharma",
    personTitle: "President",
    location: "Agra, Uttar Pradesh",
    date: "2025-08-12",
    registrationNumber: "Registered under Societies Act XXI, 1860",
    description: "Recommendation from Leaders Agra describing NeuroNova as a groundbreaking therapeutic game and the first-ever realistic 3D game for ASD patients that replicates sensory room experiences.",
    keyPoints: [
      "Registered under Societies Act XXI, 1860",
      "Describes NeuroNova as first-ever realistic 3D game for ASD patients",
      "Uses advanced real-life simulation technology",
      "True-to-life textures, physics, and environmental cues",
      "Extensive testing shows remarkable outcomes in sensory processing, focus, and skill acquisition",
      "Transformative tool making advanced therapy accessible to underserved communities"
    ]
  },
  {
    id: "tears-institute",
    fileName: "10-tears-institute-dr-rita-agarwal-director-agra-2025-08-13.png",
    category: "ngo",
    organization: "TEARS Institute (Institute for Mentally Handicapped)",
    personName: "Dr. Rita Agarwal",
    personTitle: "Director/Secretary (Ph.D, D.M.R.)",
    location: "Agra, Uttar Pradesh",
    date: "2025-08-13",
    description: "Recommendation from TEARS Institute, a nationally recognized institution (National Award-2014), endorsing NeuroNova as a pioneering initiative for individuals with ASD.",
    keyPoints: [
      "Nationally recognized institution (National Award-2014)",
      "Developed by Piyush Dhumal, Shresht Mangal, and Shivansh Garg",
      "Supports initiatives that expand opportunities for persons with disabilities",
      "Strengthens essential skills: communication, coordination, attention, self-regulation",
      "Suitable for underserved areas with limited access to specialized facilities",
      "Shared vision: no child's growth limited by geography, infrastructure, or financial constraints"
    ]
  }
];

// Helper function to get LORs by category
export function getLORsByCategory(category: "government" | "medical" | "ngo" | "all") {
  if (category === "all") {
    return lettersOfRecommendation;
  }
  return lettersOfRecommendation.filter(lor => lor.category === category);
}

// Helper function to get LOR file path
export function getLORFilePath(fileName: string): string {
  return `/letters-of-recommendation/${fileName}`;
}

