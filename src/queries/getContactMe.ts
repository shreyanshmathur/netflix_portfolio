// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    contactMe: {
      profilePicture: {
        url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      name: "Shreyansh Mathur",
      title: "Business Analyst & Strategic Consultant",
      summary: "Experienced business analyst with expertise in financial modeling, strategic planning, and process optimization. Proven track record in consulting and business development.",
      companyUniversity: "Vellore Institute of Technology",
      linkedinLink: "https://linkedin.com/in/shreyansh-mathur",
      email: "shreyanshmathur12@gmail.com",
      phoneNumber: "+919653205304"
    }
  };
  
  return mockData.contactMe;
}