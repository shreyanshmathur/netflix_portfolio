// queries/getSkills.ts
import datoCMSClient from './datoCMSClient';
import { Skill } from '../types';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    allSkills: [
      {
        name: "Financial Analysis",
        category: "Technical & Analytical Skills",
        description: "Advanced financial modeling and analysis",
        icon: "SiSpringboot"
      },
      {
        name: "Excel & PowerBI",
        category: "Technical & Analytical Skills", 
        description: "Expert-level data analysis and visualization",
        icon: "FaReact"
      },
      {
        name: "Strategic Planning",
        category: "Business & Strategic Skills",
        description: "Business strategy development and execution",
        icon: "SiTypescript"
      },
      {
        name: "Process Optimization",
        category: "Business & Strategic Skills",
        description: "Business process improvement and efficiency",
        icon: "FaAws"
      },
      {
        name: "Project Management",
        category: "Business & Strategic Skills",
        description: "End-to-end project planning and execution",
        icon: "FaDocker"
      },
      {
        name: "Client Relations",
        category: "Business & Strategic Skills",
        description: "Stakeholder management and communication",
        icon: "SiPostgresql"
      },
      {
        name: "Financial Services",
        category: "Industry Expertise & Domain Knowledge",
        description: "Deep understanding of financial markets and services",
        icon: "SiKubernetes"
      },
      {
        name: "Consulting",
        category: "Industry Expertise & Domain Knowledge",
        description: "Management consulting and advisory services",
        icon: "SiGooglecloud"
      }
    ]
  };
  
  return mockData.allSkills;
}