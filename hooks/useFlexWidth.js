import { useState, useEffect } from 'react';

const useFlexWidth = (originWidth, clientWidth) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rate = originWidth / clientWidth
      const width = window.document.body.clientWidth * rate
      setWidth(width);
    }
  }, []);

  return width;
}

export default useFlexWidth;
