import { useState } from "react";

type ReturnValue = [(...args: any[]) => Promise<void>, boolean, string]

export const useFetching = (callback: (...args: any[]) => void): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const fetching = async (...args: any[]) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (err) {
      let settledError = "Unnown error type";

      if (typeof err === "string") {
        settledError = err.toUpperCase();
      } else if (err instanceof Error) {
        settledError = err.message;
      }

      setError(settledError);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
