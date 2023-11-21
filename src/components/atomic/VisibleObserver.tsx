import { useRef, FC, useEffect } from "react";

interface ContainerProps {
  onVisible?: Function;
  onHide?: Function;
  threshold?: number;
}

const Container: FC<ContainerProps> = ({onVisible, onHide, threshold = 0}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const onElementVisible = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onVisible && onVisible();
      } else {
        onHide && onHide();
      }
    });
  }
  
  const visibleObserver = new IntersectionObserver(onElementVisible, {
    root: null,
    rootMargin: '100px',
    threshold: threshold
  });

  useEffect(() => {
    const currentElement = elementRef.current

    visibleObserver.observe(currentElement as Element);
    return () => {
        visibleObserver.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef}></div>
  );
}


export default Container;