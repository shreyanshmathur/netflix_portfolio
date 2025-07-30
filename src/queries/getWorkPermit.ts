// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  // Mock data for Shreyansh Mathur
  const mockData = {
    workPermit: {
      visaStatus: "Student Visa",
      expiryDate: "2025-12-31",
      summary: "Currently on student visa with work authorization",
      additionalInfo: "Eligible for full-time employment upon graduation. Open to opportunities in business analysis, consulting, and strategic planning roles."
    }
  };
  
  return mockData.workPermit;
}