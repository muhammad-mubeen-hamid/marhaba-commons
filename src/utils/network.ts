import { AppResponseMessage } from '../enums';

/**
 * Represents the structure of a successful response body.
 */
interface AppResponseSuccessBody<T> {
    success: true; // Explicit success property
    message: AppResponseMessage;
    data: T;
}

/**
 * Represents a successful response.
 */
interface AppResponseSuccess<T> {
    statusCode: number;
    body: AppResponseSuccessBody<T>;
}

/**
 * Represents the structure of a failure response body.
 */
interface AppResponseFailureBody {
    success: false; // Explicit success property
    message: AppResponseMessage;
}

/**
 * Represents a failure response.
 */
interface AppResponseFailure {
    statusCode: number;
    body: AppResponseFailureBody;
}

/**
 * Represents the unified structure of an application response.
 */
export interface AppResponse<T> {
    statusCode: number;
    success: boolean;
    message: AppResponseMessage;
    data?: T; // Optional for failure responses
}
// export type AppResponse<T> = AppResponseSuccess<T> | AppResponseFailure;

/**
 * Constructs a unified application response based on the presence of data.
 */
export const SendResponse = <T>(params: {
    statusCode: number;
    message: AppResponseMessage;
    data?: T;
}): AppResponse<T> => {
    const { statusCode, message, data } = params;

    if (data !== undefined) {
        return {
            statusCode,
            success: true, // Explicit success
            message,
            data,
        };
    }

    return {
        statusCode,
        success: false,
        message,
    };
};
