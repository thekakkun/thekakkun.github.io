import React, { useEffect, useState } from "react";
import { getPostData, PostData } from "./lib/posts";

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

type StringOrUndefined<T extends PostData["date"]> = T extends string
  ? string
  : T extends undefined
  ? undefined
  : never;

export const useFormattedDate = <T extends PostData["date"]>(
  date: T
): StringOrUndefined<T> => {
  const [postDate, setPostDate] = useState<PostData["date"]>(date);

  useEffect(() => {
    if (date) {
      setPostDate(new Date(date).toLocaleDateString());
    } else {
      setPostDate(undefined);
    }
  }, [date]);

  return postDate as StringOrUndefined<T>;
};
