// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  // Mock data for Shreyansh Mathur based on the PDF
  const mockData = {
    allTimelines: [
      {
        name: "PricewaterhouseCoopers (PwC)",
        timelineType: "work",
        title: "Advisory Intern",
        techStack: "Financial Analysis, Excel, PowerPoint, Data Analytics",
        summaryPoints: [
          "Conducted comprehensive financial analysis and risk assessments",
          "Developed client presentations and strategic recommendations",
          "Collaborated with senior consultants on audit and advisory projects",
          "Gained expertise in regulatory compliance and financial reporting"
        ],
        dateRange: "Summer 2024"
      },
      {
        name: "Ernst & Young (EY)",
        timelineType: "work", 
        title: "Summer Intern",
        techStack: "Business Intelligence, Process Optimization, Client Relations",
        summaryPoints: [
          "Supported business transformation initiatives for Fortune 500 clients",
          "Analyzed business processes and identified optimization opportunities",
          "Created detailed project documentation and progress reports",
          "Participated in client meetings and stakeholder presentations"
        ],
        dateRange: "Summer 2023"
      },
      {
        name: "BelleVidCo",
        timelineType: "work",
        title: "Co-Founder & CEO",
        techStack: "Leadership, Strategic Planning, Business Development, Marketing",
        summaryPoints: [
          "Founded and led a creative services company from concept to execution",
          "Developed comprehensive business strategy and go-to-market plans",
          "Managed client relationships and project delivery across multiple verticals",
          "Built and led a team of creative professionals and technical specialists"
        ],
        dateRange: "2023 - 2024"
      },
      {
        name: "Vellore Institute of Technology",
        timelineType: "education",
        title: "Bachelor of Technology",
        techStack: "Business Analytics, Financial Modeling, Strategic Management",
        summaryPoints: [
          "Specialized in business analytics and strategic management",
          "Active in student leadership and extracurricular activities",
          "Completed multiple internships and consulting projects",
          "Maintained strong academic performance while pursuing entrepreneurial ventures"
        ],
        dateRange: "2021 - 2025"
      }
    ]
  };
  
  return mockData.allTimelines;
}