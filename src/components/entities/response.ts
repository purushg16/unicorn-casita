import { AxiosError, AxiosResponse } from "axios";

interface Success {
  message: string;
  stack: string;
}

interface Error {
  error: string;
  stack: string;
}

export type SuccessResponse = AxiosResponse<Success>;
export type ErrorResponse = AxiosError<Error>;
