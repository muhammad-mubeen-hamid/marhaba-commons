import { JwtPayload } from 'jsonwebtoken';

export interface ParsedJWT {
    sub: string;
    email_verified: boolean;
    iss: string;
    phone_number_verified: boolean;
    'cognito:username': string;
    origin_jti: string;
    aud: string;
    event_id: string;
    token_use: 'id';
    auth_time: number;
    phone_number: string;
    exp: number;
    iat: number;
    jti: string;
    email: string;
}

export interface ParsedJWK {
    alg: string;
    e: string;
    kid: string;
    kty: 'EC' | 'RSA';
    n: string;
    use: string;
}

export interface ParsedJWKsResponse {
    keys: ParsedJWK[];
}

export interface ParsedJWTHeader {
    alg: string;
    kid: string;

    [key: string]: any;
}

export interface CognitoJwtPayload extends JwtPayload {
    sub: string;
    email: string;
    ['cognito:username']: string;
}


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