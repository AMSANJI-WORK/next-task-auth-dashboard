import { API_MESSAGE, API_STATUS } from "./http.constant";
import { ApiError } from "./http.model";

export const handleHttpError = async (response: Response) => {
  let error = API_MESSAGE.TIMEOUT;
  if (!response) {
    return { error };
  }
  switch (response.status) {
    case API_STATUS.SERVER_ERROR:
      return { error: response.statusText };
    default: {
      const res = (await response.json()) as ApiError;
      return res;
    }
  }
};
