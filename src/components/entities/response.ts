import { AxiosResponse } from "axios";

interface Success {
  msg: string;
  stack: string;
}

interface Error {
  error: string;
  stack: string;
}

export type SuccessResponse = AxiosResponse<Success>;
export type ErrorResponse = AxiosResponse<Error>;
