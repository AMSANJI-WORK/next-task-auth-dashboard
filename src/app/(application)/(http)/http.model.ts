export type ApiResponse<T = any> = {
  results: T[];
};

export type ApiError = {
  error: string;
};
