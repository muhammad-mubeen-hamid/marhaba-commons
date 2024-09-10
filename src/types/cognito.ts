export interface User {
    username: string;
    creationDate: Date;
    status: string;
    isEnable: boolean;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
}

export interface UserSignIn {
    session: string;
}

export interface UserSignUp {
    userSub: string;
    email: string;
    phoneNumber: string;
    userConfirmed: boolean;
}