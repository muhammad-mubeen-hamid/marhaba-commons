import {AppResponseMessage} from "./index";

interface ProfileCode {
    ALL_OKAY: AppResponseMessage;
    PROFILE_UPDATED: AppResponseMessage;
    IMAGE_UPLOADED: AppResponseMessage;
    INVALID_PATH_PARAMETERS: AppResponseMessage;
    INTERNAL_SERVER_ERROR: AppResponseMessage;
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
    IMAGE_UPLOADED: {
        code: 'PC_02',
        content: 'Image uploaded successfully',
    },
    INVALID_PATH_PARAMETERS: {
        code: 'PC_98',
        content: 'Invalid path parameters',
    },
    INTERNAL_SERVER_ERROR: {
        code: 'PC_99',
        content: 'Internal server error',
    }
};

export type ProfileCodesT = typeof ProfileCodes[keyof typeof ProfileCodes];
