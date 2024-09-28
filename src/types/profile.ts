export interface Profile {
  id: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  dob?: string;
  created_at: string;
}

export interface UpdateProfileRequest {
  profile: Profile;
  modified_at: string;
}