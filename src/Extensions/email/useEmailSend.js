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
        "service_02d36q8",
        'template_n4u2n2u',
        values,
        "user_WGC4hfgBj70bj6stGFRp3"
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
