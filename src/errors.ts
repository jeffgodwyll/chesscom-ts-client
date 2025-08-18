
import { AxiosError } from 'axios';

/**
 * Custom error class for API errors.
 */
export class ChessComError extends Error {
  /**
   * The original error, if available.
   */
  public readonly originalError?: Error;

  /**
   * The HTTP status code, if available.
   */
  public readonly statusCode?: number;

  constructor(message: string, options?: { originalError?: Error, statusCode?: number }) {
    super(message);
    this.name = 'ChessComError';
    this.originalError = options?.originalError;
    this.statusCode = options?.statusCode;
  }

  /**
   * Creates a ChessComError from an AxiosError.
   * @param error The AxiosError to convert.
   * @returns A ChessComError instance.
   */
  public static fromAxiosError(error: AxiosError): ChessComError {
    const statusCode = error.response?.status;
    const message = (error.response?.data as { message: string })?.message || error.message;
    return new ChessComError(message, { originalError: error, statusCode });
  }
}
