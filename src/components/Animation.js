import { useEffect, useState } from "react";
import { Children } from "react"; // React.Children를 사용하기 위해 import

function Animation({ delayBetween = 200, initialDelay = 0, duration = 500, children }) {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const intervals = Children.map(children, (_, index) => {
      return setTimeout(() => {
        setVisibleIndex((prev) => Math.max(prev, index));
      }, initialDelay + index * delayBetween);
    });

    return () => {
      intervals.forEach(clearTimeout); // 타임아웃 정리
    };
  }, [children, delayBetween, initialDelay]);

  return (
    <div>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className={`fade-in ${index <= visibleIndex ? 'fade-in-active' : ''}`}
          style={{ transitionDuration: `${duration}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default Animation;
