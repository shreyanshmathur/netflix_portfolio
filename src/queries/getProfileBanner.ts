// queries/getProfileBanner.ts
import { ProfileBanner } from "../types";
import datoCMSClient from "./datoCMSClient";

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
    clickHelper {
      url }
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(
    GET_PROFILE_BANNER
  );
  return data.profilebanner;
}
