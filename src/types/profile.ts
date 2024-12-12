export interface Profile {
    username: string;       // User's username - acts as the primary key
    email: string;          // User's email address
    contactNumber: string;  // User's contact number
    createdAt: string;      // ISO 8601 timestamp of profile creation
    firstName?: string;     // User's first name
    lastName?: string;      // User's last name
    dateOfBirth?: string;   // User's date of birth (format: YYYY-MM-DD)
    countryOfOrigin?: string;  // User's country of origin
    spokenLanguages?: string[]; // Array of languages spoken by the user
}

export interface GetProfileResponse {
    profile: Profile;
    modifiedAt: string;    // ISO 8601 timestamp of last modification
}