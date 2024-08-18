
type CognitoCodeEntry = {
    code: string;
    content: string;
};

interface CognitoCode {
    ALL_OKAY: CognitoCodeEntry;
    USER_NOT_CONFIRMED: CognitoCodeEntry;
    USER_NOT_FOUND: CognitoCodeEntry;
    USER_REGISTRATION_SUCCESSFUL: CognitoCodeEntry;
    USER_LOGIN_SUCCESSFUL: CognitoCodeEntry;
    USER_ALREADY_EXISTS: CognitoCodeEntry;
    VERIFICATION_CODE_SENT: CognitoCodeEntry;
    USER_CONFIRMED_SUCCESSFULLY: CognitoCodeEntry;
    INVALID_CONFIRMATION_CODE: CognitoCodeEntry;
    INVALID_PARAMETERS: CognitoCodeEntry;
    SMS_VERIFICATION_SUCCESSFUL: CognitoCodeEntry;
    NOT_AUTHORIZED: CognitoCodeEntry;
    INVALID_OTP: CognitoCodeEntry;
    CONTACT_UPDATED_SUCCESSFULLY: CognitoCodeEntry;
    INTERNAL_SERVER_ERROR: CognitoCodeEntry;
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
        content: 'Invalid parameters'
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
    INTERNAL_SERVER_ERROR: {
        code: 'CC_99',
        content: 'Internal server error',
    }
};

export type CognitoCodesT = typeof CognitoCodes[keyof typeof CognitoCodes];
