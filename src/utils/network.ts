import { AppResponseMessage } from '../enums';
import {APIGatewayProxyResult} from "aws-lambda";

/**
 * Represents the unified structure of an application response.
 */
export type AppResponse<T> =
    | { statusCode: number; success: true; message: AppResponseMessage; data: T }
    | { statusCode: number; success: false; message: AppResponseMessage; data?: undefined };

/**
 * Constructs a unified application response based on the presence of data.
 */
export const BuildAppResponse = <T>(params: {
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

/**
 * Adapts an AppResponse, returned by BuildResponse(), to an APIGatewayProxyResult.
 */
export const LambdaResponse = <T>(appResponse: AppResponse<T>): APIGatewayProxyResult => {
    return {
        statusCode: appResponse.statusCode,
        body: JSON.stringify(appResponse),
    };
};