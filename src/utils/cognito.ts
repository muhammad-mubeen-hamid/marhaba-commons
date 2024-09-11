import AWS from 'aws-sdk';

const secretsManager = new AWS.SecretsManager();
export const getSecretFromSM = async (secretName: string) => {
    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
        if ('SecretString' in data) {
            console.log('getSecretFromSM:', data);
            return JSON.parse(data.SecretString!);
        }
    } catch (err) {
        throw new Error(`Unable to retrieve secret ${secretName}: ${err}`);
    }
};
