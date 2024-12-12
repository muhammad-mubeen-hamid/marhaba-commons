import { AppResponseMessage } from '../enums';

/**
 * Represents the unified structure of an application response.
 */
export type AppResponse<T> =
    | { statusCode: number; success: true; message: AppResponseMessage; data: T }
    | { statusCode: number; success: false; message: AppResponseMessage; data?: undefined };

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
            success: true,
            message,
            data,
        };
    }

    return {
        statusCode,
        success: false,
        message,
    } as AppResponse<T>;
};

