export interface Profile {
    email: string;          // User's email address
    contactNumber: string;  // User's contact number
    createdAt: string;      // ISO 8601 timestamp of profile creation
}


export interface UpdateProfileRequest {
    profile: Profile;
    modifiedAt: string;     // ISO 8601 timestamp of the last profile update
}