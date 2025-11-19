import profileData from '../../data/default_profile.json';

export type Profile = (typeof profileData)[number];

export const profile: Profile = profileData[0];
