import { useEffect, useState } from "react";

function Animation({ delay = 0, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      {children}
    </div>
  )
}
export default Animation;