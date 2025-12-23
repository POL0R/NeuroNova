/**
 * TEAM MEMBERS DATA
 * 
 * TO EDIT TEAM MEMBERS:
 * 1. Replace placeholder names with real names
 * 2. Update role to exact position (e.g., "Lead Developer", "Therapy Advisor")
 * 3. Set team to one of: "Engineering" | "Design" | "Therapy" | "Research" | "Operations" | "Partnerships"
 * 4. Write a 2-3 line bio
 * 5. Add 5-8 skills as strings in the skills array
 * 6. Update links with real LinkedIn URLs (and optional GitHub/Portfolio)
 * 7. If you have a photo, place it in public/team/ and set image to "/team/FILENAME.jpg"
 *    If no image, leave image empty or undefined - initials avatar will appear automatically
 * 
 * EXAMPLE:
 * {
 *   id: "jane-doe",
 *   name: "Jane Doe",
 *   role: "Lead Developer",
 *   team: "Engineering",
 *   bio: "Jane is a full-stack developer with 8 years of experience building accessible web applications. She specializes in React and TypeScript.",
 *   skills: ["React", "TypeScript", "Node.js", "Accessibility", "UI/UX", "Testing", "API Design"],
 *   links: [
 *     { label: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
 *     { label: "GitHub", url: "https://github.com/janedoe" }
 *   ],
 *   image: "/team/jane-doe.jpg"  // or leave undefined for initials avatar
 * }
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  team: "Engineering" | "Design" | "Therapy" | "Research" | "Operations" | "Partnerships" | "Leadership";
  bio: string;
  skills: string[];
  links?: { label: string; url: string }[];
  image?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "piyush-dhumal",
    name: "Piyush Dhumal",
    role: "Founder",
    team: "Leadership",
    bio: "Co-founder of NeuroNova, leading the vision for an inclusive EdTech platform. Piyush drives the mission to create accessible 3D classroom transition experiences for neurodivergent children, collaborating with doctors and psychologists to ensure evidence-based design.",
    skills: ["Strategic Leadership", "Product Vision", "EdTech Innovation", "Stakeholder Management", "Partnership Development", "Social Impact", "Team Building"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "shresht-mangal",
    name: "Shresht Mangal",
    role: "Founder",
    team: "Leadership",
    bio: "Co-founder of NeuroNova, dedicated to creating sensory-friendly educational technology. Shresht works closely with NGOs, schools, and therapy centres to ensure NeuroNova meets the needs of neurodivergent children and their support networks.",
    skills: ["Strategic Leadership", "Product Development", "Accessibility Design", "NGO Partnerships", "Educational Technology", "User-Centered Design", "Impact Measurement"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "samarth-agarwal",
    name: "Samarth Agarwal",
    role: "CEO",
    team: "Leadership",
    bio: "Chief Executive Officer leading NeuroNova's growth and strategic direction. Samarth oversees operations, partnerships, and the expansion of NeuroNova's reach to serve more neurodivergent children across India and beyond.",
    skills: ["Executive Leadership", "Business Strategy", "Operations Management", "Partnership Development", "Growth Strategy", "Team Leadership", "Strategic Planning"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "raahil-dogra",
    name: "Raahil Dogra",
    role: "President",
    team: "Leadership",
    bio: "President of NeuroNova, responsible for organizational strategy and external relations. Raahil works with government bodies, NGOs, and educational institutions to expand NeuroNova's impact and adoption.",
    skills: ["Organizational Leadership", "Public Relations", "Government Relations", "Strategic Partnerships", "Policy Advocacy", "Community Engagement", "Program Management"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "daksh-jain",
    name: "Daksh Jain",
    role: "CTO",
    team: "Engineering",
    bio: "Chief Technology Officer leading the technical development of NeuroNova's offline 3D platform. Daksh ensures the app delivers smooth, accessible experiences for neurodivergent children while maintaining offline functionality and sensory-friendly design.",
    skills: ["Technical Leadership", "3D Development", "Mobile App Development", "Offline Architecture", "Accessibility Engineering", "Performance Optimization", "System Design"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" },
      { label: "GitHub", url: "https://github.com/placeholder" }
    ]
  },
  {
    id: "hrivaan-mehta",
    name: "Hrivaan Mehta",
    role: "CMO",
    team: "Operations",
    bio: "Chief Marketing Officer driving NeuroNova's brand awareness and user acquisition. Hrivaan leads marketing strategies to reach NGOs, schools, therapy centres, and families, ensuring NeuroNova's message of inclusive education reaches those who need it most.",
    skills: ["Marketing Strategy", "Brand Management", "Digital Marketing", "Content Marketing", "Social Media", "Community Building", "User Acquisition"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "nityaa-agarwal",
    name: "Nityaa Agarwal",
    role: "Design Head",
    team: "Design",
    bio: "Design Head responsible for NeuroNova's sensory-friendly design system. Nityaa creates intuitive, calming interfaces that support neurodivergent children, ensuring the 3D classroom transition experience is accessible and engaging for all users.",
    skills: ["UI/UX Design", "Sensory-Friendly Design", "Accessibility Design", "3D Interface Design", "User Research", "Design Systems", "Interaction Design"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" },
      { label: "Portfolio", url: "https://placeholder.com" }
    ]
  },
  {
    id: "devam-patel",
    name: "Devam Patel",
    role: "Gujarat State Lead",
    team: "Partnerships",
    bio: "Gujarat State Lead expanding NeuroNova's presence across Gujarat. Devam works with local NGOs, schools, and therapy centres to implement NeuroNova, ensuring the platform reaches neurodivergent children throughout the state.",
    skills: ["Regional Leadership", "Partnership Development", "Community Outreach", "Program Implementation", "Stakeholder Management", "Training & Support", "Local Engagement"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  },
  {
    id: "karneik-phopalia",
    name: "Karneik Phopalia",
    role: "UP State Lead",
    team: "Partnerships",
    bio: "Uttar Pradesh State Lead driving NeuroNova's adoption across UP. Karneik works closely with the state government and NGOs to implement the official mandate, ensuring NeuroNova reaches every NGO in Uttar Pradesh as directed by the Minister of Child Development.",
    skills: ["Government Relations", "Policy Implementation", "Regional Expansion", "NGO Partnerships", "Program Management", "Training & Support", "Impact Measurement"],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/placeholder" }
    ]
  }
];

