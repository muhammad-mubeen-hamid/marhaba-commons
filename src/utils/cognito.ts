import { SecretsManager } from '@aws-sdk/client-secrets-manager';
import { CognitoJwtPayload, ParsedJWK, ParsedJWKsResponse, ParsedJWTHeader } from '../types';
import axios from 'axios';
import jwkToPem, { JWK } from 'jwk-to-pem';
import { verify } from 'jsonwebtoken';

const secretsManager = new SecretsManager();
export const getSecretFromSM = async (secretName: string) => {
    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName });
        console.log('getSecretFromSM:', data);
        if ('SecretString' in data) {
            return JSON.parse(data.SecretString!);
        }
    } catch (err) {
        throw new Error(`Unable to retrieve secret ${secretName}: ${err}`);
    }
};

export const getCognitoPublicKeys = async (jwksUrl: string): Promise<ParsedJWK[]> => {
    try {
        console.log('Fetching JWKS keys from Cognito');
        const { data } = await axios.get<ParsedJWKsResponse>(jwksUrl);
        console.log('Fetched keys:', data.keys);
        return data.keys;
    } catch (err) {
        throw new Error(`Unable to retrieve public keys from Cognito: ${err}`);
    }
};

export const verifyToken = (token: string, keys: ParsedJWK[]): CognitoJwtPayload | null => {
    // Strip 'Bearer' from the token if present
    if (token.startsWith('Bearer ')) {
        token = token.slice(7);
    }

    console.log('Token after removing Bearer:', token);
    console.log('Token length:', token.length);
    console.log('Token parts:', token.split('.'));

    // Parse the header (first part of the JWT)
    const decodedHeader: ParsedJWTHeader = JSON.parse(
        Buffer.from(token.split('.')[0], 'base64').toString(),
    );
    console.log('Decoded header:', decodedHeader);

    // Find the matching key based on the kid in the token header
    const key = keys.find((k: ParsedJWK) => k.kid === decodedHeader.kid);
    console.log('Matching key:', key);

    if (!key) {
        throw new Error(`No matching key found for kid: ${decodedHeader.kid}`);
    }

    const pem = jwkToPem(key as JWK);
    console.log('PEM:', pem);

    try {
        console.log('Verifying JWT with PEM');
        return verify(token, pem, { algorithms: ['RS256'] }) as CognitoJwtPayload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
};
