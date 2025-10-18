"use client";

import { useEffect, useRef, RefObject } from "react";

export function useOutsideClick(
  onAction: (event?: MouseEvent) => void,
  eventCapturing: boolean = true,
): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onAction(e);
      }
    };

    document.addEventListener("mousedown", handleClick, eventCapturing);

    return () => {
      document.removeEventListener("mousedown", handleClick, eventCapturing);
    };
  }, [onAction, eventCapturing]);

  return ref;
}
