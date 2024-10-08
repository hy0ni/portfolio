import { useEffect, useState } from "react";
import { Children, cloneElement } from "react"; // React.Children를 사용하기 위해 import

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
    <div className="animation-container">
      {Children.map(children, (child, index) => {
        const animationClass = index === 0 ? 'slide-up' : 'fade-in';
        return cloneElement(child, {
          key: index,
          className: `${child.props.className || ''} ${animationClass} ${index <= visibleIndex ? `${animationClass}-active` : ''}`,
          style: { transitionDuration: `${duration}ms`, ...child.props.style },
        });
      })}
    </div>
  );
}

export default Animation;
