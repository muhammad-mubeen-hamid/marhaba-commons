import { SecretsManager } from '@aws-sdk/client-secrets-manager'

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
