// queries/getProjects.ts
import { Project } from '../types';
import datoCMSClient from './datoCMSClient';

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
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  console.log("🚀 ~ getProjects ~ data:", data)
  return data.allProjects;
}
