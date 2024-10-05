import { AppResponseMessage } from './index';

interface CognitoCode {
    ALL_OKAY: AppResponseMessage;
    USER_NOT_CONFIRMED: AppResponseMessage;
    USER_NOT_FOUND: AppResponseMessage;
    USER_REGISTRATION_SUCCESSFUL: AppResponseMessage;
    USER_LOGIN_SUCCESSFUL: AppResponseMessage;
    USER_ALREADY_EXISTS: AppResponseMessage;
    VERIFICATION_CODE_SENT: AppResponseMessage;
    USER_CONFIRMED_SUCCESSFULLY: AppResponseMessage;
    INVALID_CONFIRMATION_CODE: AppResponseMessage;
    INVALID_PARAMETERS: AppResponseMessage;
    SMS_VERIFICATION_SUCCESSFUL: AppResponseMessage;
    NOT_AUTHORIZED: AppResponseMessage;
    INVALID_OTP: AppResponseMessage;
    CONTACT_UPDATED_SUCCESSFULLY: AppResponseMessage;
    NO_TOKEN: AppResponseMessage;
    INVALID_TOKEN: AppResponseMessage;
    INTERNAL_SERVER_ERROR: AppResponseMessage;
}

export const CognitoCodes: CognitoCode = {
    ALL_OKAY: {
        code: 'CC_00',
        content: 'All okay',
    },
    USER_NOT_CONFIRMED: {
        code: 'CC_01',
        content: 'User not confirmed',
    },
    USER_NOT_FOUND: {
        code: 'CC_02',
        content: 'User not found',
    },
    USER_REGISTRATION_SUCCESSFUL: {
        code: 'CC_03',
        content: 'User registration success',
    },
    USER_LOGIN_SUCCESSFUL: {
        code: 'CC_04',
        content: 'User login success',
    },
    USER_ALREADY_EXISTS: {
        code: 'CC_05',
        content: 'User already exists',
    },
    VERIFICATION_CODE_SENT: {
        code: 'CC_06',
        content: 'Verification code sent',
    },
    USER_CONFIRMED_SUCCESSFULLY: {
        code: 'CC_07',
        content: 'User confirmed successfully',
    },
    INVALID_CONFIRMATION_CODE: {
        code: 'CC_08',
        content: 'Invalid confirmation code',
    },
    INVALID_PARAMETERS: {
        code: 'CC_08',
        content: 'Invalid parameters',
    },
    SMS_VERIFICATION_SUCCESSFUL: {
        code: 'CC_10',
        content: 'SMS verification successful',
    },
    NOT_AUTHORIZED: {
        code: 'CC_11',
        content: 'Not authorized',
    },
    INVALID_OTP: {
        code: 'CC_12',
        content: 'Invalid OTP',
    },
    CONTACT_UPDATED_SUCCESSFULLY: {
        code: 'CC_13',
        content: 'Contact updated successfully',
    },
    NO_TOKEN: {
        code: 'CC_14',
        content: 'No token provided',
    },
    INVALID_TOKEN: {
        code: 'CC_15',
        content: 'Invalid token',
    },
    INTERNAL_SERVER_ERROR: {
        code: 'CC_99',
        content: 'Internal server error',
    },
};

export type CognitoCodesT = typeof CognitoCodes[keyof typeof CognitoCodes];
