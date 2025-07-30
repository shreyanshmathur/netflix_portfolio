// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    allCertifications: [
      {
        title: "Financial Analysis Certification",
        issuer: "Vellore Institute of Technology",
        issuedDate: "2024",
        link: "#",
        iconName: "university"
      },
      {
        title: "Business Strategy Simulation",
        issuer: "Professional Development Program",
        issuedDate: "2024",
        link: "#",
        iconName: "coursera"
      },
      {
        title: "Project Management Fundamentals",
        issuer: "Industry Certification",
        issuedDate: "2023",
        link: "#",
        iconName: "udemy"
      },
      {
        title: "Data Analytics Certificate",
        issuer: "Professional Training",
        issuedDate: "2023",
        link: "#",
        iconName: "ieee"
      }
    ]
  };
  
  return mockData.allCertifications;
}