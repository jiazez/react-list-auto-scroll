import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './index.less';

interface ScrollProps {
  marH?: number;
  data: any[];
  itemRender: (item: any, index: number) => ReactNode;
  len: number;
  height: number;
}

const Scroll = (props: ScrollProps) => {
  const { len, marH, data, itemRender, height } = props;

  const [scrollData, setScrollData] = useState<any[]>();

  const domRef = useRef(null);

  const childRef = useRef<HTMLDivElement>(null);

  const h = useRef(0);

  const timer = useRef<number>();

  const timerChange = () => {
    const dom = childRef.current as HTMLElement;
    const { offsetHeight } = dom;
    const child = dom.children[0] as HTMLElement;
    const H = child.offsetHeight;
    function animate() {
      h.current += 0.3;
      if (h.current > offsetHeight / 2 + H) {
        h.current = H - (marH ?? 0) / 2;
      }
      dom.style.transform = `translateY(-${h.current}px)`;
      timer.current = requestAnimationFrame(animate);
    }
    timer.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (timer.current) cancelAnimationFrame(timer.current);
    if (data?.length > len) {
      setScrollData(data.concat(data));
    } else {
      setScrollData(data);
    }
    return () => {
      if (timer.current) cancelAnimationFrame(timer.current);
    };
  }, [data]);

  useEffect(() => {
    if (scrollData?.length) timerChange();
  }, [scrollData]);

  return (
    <div className="scroll-wrapper" style={{ height }} ref={domRef}>
      <div ref={childRef}>
        {scrollData?.length ? scrollData?.map(itemRender) : <></>}
      </div>
    </div>
  );
};

export default Scroll;
