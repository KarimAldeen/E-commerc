import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = useCallback((values) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsFailed(false);
    setError(null);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsSuccess(true);
        },
        (error) => {
          console.log("ERROR IN SENDING EMAIL: ", error.text);
          setError(error.text);
          setIsFailed(true);
        }
      )
      .catch(() => {
        setIsFailed(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    isSuccess,
    isFailed,
    error,
    sendEmail,
  };
};
