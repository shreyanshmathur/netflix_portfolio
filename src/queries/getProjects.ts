// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    allProjects: [
      {
        title: "Stock Prediction Model",
        description: "Developed a machine learning model for stock price prediction using historical data and market indicators. Implemented advanced algorithms to analyze market trends and provide investment insights.",
        techUsed: "Python, Machine Learning, Data Analytics, Financial Modeling",
        image: {
          url: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
        }
      },
      {
        title: "VIT Police Bot",
        description: "Created an intelligent chatbot system for campus security and student assistance. Integrated natural language processing to handle student queries and emergency situations.",
        techUsed: "Python, NLP, Chatbot Development, Database Management",
        image: {
          url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
        }
      },
      {
        title: "BelleVidCo Website",
        description: "Designed and developed a comprehensive business website for creative services company. Implemented modern web technologies and responsive design principles.",
        techUsed: "React, JavaScript, CSS, Web Development",
        image: {
          url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
        }
      },
      {
        title: "SkillSpire Platform",
        description: "Built an educational platform for skill development and learning management. Created user-friendly interfaces and integrated learning analytics.",
        techUsed: "Web Development, UI/UX Design, Database Design, Analytics",
        image: {
          url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        }
      }
    ]
  };
  
  return mockData.allProjects;
}