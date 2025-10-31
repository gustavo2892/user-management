import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

export const dispatchApiError = (errorMessage: string): void => {
  const event = new CustomEvent<{ errorMessage: string }>("onApiError", {
    detail: { errorMessage },
    bubbles: false,
  });
  window.dispatchEvent(event);
};

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const { response = {} } = error;
    const { data: responseData } = response;

    let errorMessage = "";
    if (responseData?.errorMessage) {
      errorMessage = responseData?.errorMessage;
    } else if (responseData?.error) {
      errorMessage = responseData?.error;
    } else if (
      responseData &&
      responseData[0]?.errorMessage &&
      !(response.status === 400 && response?.config?.method === "post")
    ) {
      errorMessage = responseData[0]?.errorMessage;
    }

    if (errorMessage) {
      dispatchApiError(errorMessage);
    } else {
      // TODO Create a generi error message
      dispatchApiError("GENERIC_ERROR");
    }

    return Promise.reject(error);
  },
);

export default api;
