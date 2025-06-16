import { useState, useEffect } from "react";

export const useTypewriter = (
  text: string,
  speed: number = 100,
  delay: number = 0
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return { displayText, showCursor, isComplete: currentIndex >= text.length };
};
