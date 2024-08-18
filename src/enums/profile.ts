
type ProfileCodeEntry = {
    code: string;
    content: string;
};

interface ProfileCode {
    ALL_OKAY: ProfileCodeEntry;
    PROFILE_UPDATED: ProfileCodeEntry;
    INTERNAL_SERVER_ERROR: ProfileCodeEntry;
}

export const ProfileCodes: ProfileCode = {
    ALL_OKAY: {
        code: 'PC_00',
        content: 'All okay',
    },
    PROFILE_UPDATED: {
        code: 'PC_01',
        content: 'Profile updated successfully',
    },
    INTERNAL_SERVER_ERROR: {
        code: 'PC_99',
        content: 'Internal server error',
    }
};

export type ProfileCodesT = typeof ProfileCodes[keyof typeof ProfileCodes];
