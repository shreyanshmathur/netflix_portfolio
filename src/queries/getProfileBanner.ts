// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    profilebanner: {
      backgroundImage: {
        url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      },
      headline: "Strategic Business Analyst & Consultant",
      resumeLink: {
        url: "#"
      },
      linkedinLink: "https://linkedin.com/in/shreyansh-mathur",
      profileSummary: "Experienced business analyst with a strong background in financial modeling, strategic planning, and process optimization. Proven track record in consulting, business development, and leadership roles across various industries."
    }
  };
  
  return mockData.profilebanner;
}