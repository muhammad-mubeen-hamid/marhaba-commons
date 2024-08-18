
export interface AppResponseSuccessBody<T, M> {
    /**
     * Indicates that the request was fulfilled, as intended.
     */
    success: true;
    /**
     * A message to describe the result of the request.
     */
    message: M;
    /**
     * The data returned from the request.
     */
    data: T;
}

interface AppResponseSuccess<T, M> {
    statusCode: number;
    body: AppResponseSuccessBody<T, M>;
}


export interface AppResponseFailureBody<M> {
    /**
     * Indicates that the request was not fulfilled, as intended.
     */
    success: false;
    /**
     * A message to describe the result of the request.
     */
    message: M;
}

interface AppResponseFailure<M> {
    statusCode: number;
    body: AppResponseFailureBody<M>
}

export type AppResponse<T, M> = AppResponseSuccess<T, M> | AppResponseFailure<M>;

export const SendResponse = <T, M>({statusCode, body}: AppResponse<T, M>): AppResponse<T, M> => {
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