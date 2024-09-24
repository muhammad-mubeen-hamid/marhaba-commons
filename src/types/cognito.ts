export interface UserResponse {
    username: string;
    creationDate: Date;
    status: string;
    isEnable: boolean;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
}

// sign in

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    session: string;
}

// authorize sign in

export interface AuthSignInRequest {
    email: string;
    otp: string;
    session: string;
}

export interface AuthSignInResponse {
    accessToken: string;
    refreshToken: string;
    idToken: string;
}

// sign up

export interface SignUpRequest {
    email: string;
    password: string;
    phoneNumber: string;
}

export interface SignUpResponse {
    userSub: string;
    email: string;
    phoneNumber: string;
    userConfirmed: boolean;
}