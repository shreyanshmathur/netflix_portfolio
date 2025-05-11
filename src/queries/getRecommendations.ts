// queries/getRecommendations.ts
import { Recommendation } from "../types";
import datoCMSClient from "./datoCMSClient";

const GET_RECOMMENDATIONS = `
  query {
   recommendation{
      recommenderName
      recommenderProfessionalTitle
      dateOfRecommendation
  		content {
        value
      }
      recommenderPicture {
        url
      }
    }
  }
`;

export async function getRecommendation(): Promise<Recommendation> {
  const data = await datoCMSClient.request<{ recommendation: Recommendation }>(
    GET_RECOMMENDATIONS
  );
  return data.recommendation;
}
