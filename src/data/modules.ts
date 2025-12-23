export type Module = {
  id: string;
  name: string;
  goal: string;
  howItWorks: string;
  trains: string[];
};

export const modules: Module[] = [
  {
    id: "stress-bridge",
    name: "Stress Bridge",
    goal: "Support emotional regulation through structured breathing and calming visual sequences.",
    howItWorks: "Users navigate a gentle 3D bridge by following breathing cues. The environment responds to their pace, creating a calming rhythm that encourages mindful movement and steady breathing patterns.",
    trains: [
      "Breathing awareness and control",
      "Visual focus and attention",
      "Emotional self-regulation"
    ]
  },
  {
    id: "sequence-maze",
    name: "Sequence Maze",
    goal: "Build working memory and pattern recognition through engaging puzzle navigation.",
    howItWorks: "Players follow and remember color or symbol sequences to navigate through a 3D maze. The sequences gradually increase in complexity, providing adaptive challenges that support cognitive skill development.",
    trains: [
      "Working memory",
      "Pattern recognition",
      "Sequential thinking"
    ]
  },
  {
    id: "color-tiles",
    name: "Color Tiles",
    goal: "Enhance visual processing and decision-making through color matching activities.",
    howItWorks: "Interactive tiles change colors, and users match patterns or create sequences. The module adapts difficulty based on performance, maintaining engagement while supporting visual processing skills.",
    trains: [
      "Visual processing",
      "Quick decision-making",
      "Color and pattern recognition"
    ]
  },
  {
    id: "shop-market-sim",
    name: "Shop Market Sim",
    goal: "Practice planning, budgeting, and social interaction in a safe, structured environment.",
    howItWorks: "A simulated marketplace where users plan shopping trips, manage a budget, and interact with virtual shopkeepers. The module supports practical life skills through low-pressure, repeatable scenarios.",
    trains: [
      "Planning and organization",
      "Basic math and budgeting",
      "Social interaction skills"
    ]
  },
  {
    id: "emotion-match",
    name: "Emotion Match",
    goal: "Develop emotional recognition and expression through interactive matching exercises.",
    howItWorks: "Users identify and match facial expressions, body language, and contextual cues to emotions. The module provides gentle feedback and supports understanding of emotional states in self and others.",
    trains: [
      "Emotional recognition",
      "Empathy and perspective-taking",
      "Non-verbal communication"
    ]
  },
  {
    id: "routine-builder",
    name: "Routine Builder",
    goal: "Support daily routine establishment through visual scheduling and task completion.",
    howItWorks: "An interactive calendar and task system where users build and follow daily routines. Visual cues and gentle reminders help establish consistent patterns for morning, afternoon, and evening activities.",
    trains: [
      "Time management",
      "Task sequencing",
      "Routine consistency"
    ]
  }
];

