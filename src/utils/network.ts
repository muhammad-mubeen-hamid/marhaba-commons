import {CognitoCodesT} from "../enums";

export interface AppResponseSuccessBody<T> {
    /**
     * Indicates that the request was fulfilled, as intended.
     */
    success: true;
    /**
     * A message to describe the result of the request.
     */
    message: CognitoCodesT;
    /**
     * The data returned from the request.
     */
    data: T;
}

interface AppResponseSuccess<T> {
    statusCode: number;
    body: AppResponseSuccessBody<T>;
}


export interface AppResponseFailureBody {
    /**
     * Indicates that the request was not fulfilled, as intended.
     */
    success: false;
    /**
     * A message to describe the result of the request.
     */
    message: CognitoCodesT;
}

interface AppResponseFailure {
    statusCode: number;
    body: AppResponseFailureBody
}

export type AppResponse<T> = AppResponseSuccess<T> | AppResponseFailure;

export const SendResponse = <T>({statusCode, body}: AppResponse<T>): AppResponse<T> => {
    const {success, message} = body;

    if (!success) {
        return {
            statusCode: statusCode,
            body: {
                success,
                message
            }
        };
    }

    const {data} = body;

    return {
        statusCode: statusCode,
        body: {
            success,
            message,
            data
        }
    };
};