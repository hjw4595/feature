import { useCallback, useEffect, useRef, useState } from "react";
import { SearchListItem } from ".";

const ResultList = ({ list }: { list: SearchListItem[] }) => {
  let viewList: SearchListItem[] = [];

  const [count, setCount] = useState<number>(0);
  const [sliceArray, setSliceArray] = useState<
    { [key: number]: SearchListItem[] }[]
  >([]);

  const loader = useRef(null);

  const arraySlicer = ({ list, count }: { list: any[]; count: number }) => {
    let sliceArray = [];
    for (let i = 0; i <= list.length; i++) {
      sliceArray.push(list.splice(0, count));
    }
    setSliceArray(sliceArray);
  };
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setCount((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  });

  arraySlicer({ list, count: 5 });

  return (
    <div className="h-20 overflow-y-auto absolute">
      {viewList.map((item) => (
        <>
          <div key={item.value}>
            <div className="h-4">{item.name}</div>
          </div>
          <div ref={loader}></div>
        </>
      ))}
    </div>
  );
};

export default ResultList;
