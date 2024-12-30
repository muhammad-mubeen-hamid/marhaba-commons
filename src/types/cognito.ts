import { JwtPayload } from 'jsonwebtoken';
import {UserStatusType} from "@aws-sdk/client-cognito-identity-provider";

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

export interface GetUserRequest {
    email: string;
}

export interface GetUserResponse {
    username: string;
    email: string;
    phoneNumber: string;
    creationDate: Date;
    status: UserStatusType;
    isEnable: boolean;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    userLastModifiedDate: Date;
    userMFASettingList: string[];
    preferredMfaSetting: string;
}

export interface UpdateUserMfaRequest {
    accessKey: string,
    email: string;
    mfaType: 'SMS' | 'EMAIL'
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
    username: string;
}

// sign up

export interface SignUpRequest {
    email: string;
    password: string;
    phoneNumber: string;
}

export interface SignUpResponse {
    username: string;
    email: string;
    phoneNumber: string;
    userConfirmed: boolean;
}

export interface RequestOTPRequest {
    email: string;
}