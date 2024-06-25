import { useCallback, useEffect, useRef, useState } from "react";
import { SearchListItem } from ".";

<<<<<<< Updated upstream
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
=======
interface Props {
  list: SearchListItem[];
  page: number;
  onChangeNextList: () => void;
  onClick: (value: string) => void;
}

const ResultList = ({ list, page, onChangeNextList, onClick }: Props) => {
  const [renderItems, setRenderItems] = useState<SearchListItem[]>([]);
  const [isNextList, setIsNextList] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const loader = useRef(null);

  let isList: Boolean = renderItems.length < 0;

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        onChangeNextList();
      }
    },
    [onChangeNextList]
  );

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClick = useCallback(
    (value: string) => {
      onClick(value);
    },
    [onClick]
  );
>>>>>>> Stashed changes

  useEffect(() => {
    const option = {
      root: null,
<<<<<<< Updated upstream
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
=======
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [handleObserver]);

  useEffect(() => {
    const nowRenderList = list.slice(0, page * 5);
    setRenderItems(nowRenderList);
    setIsNextList(nowRenderList.length < list.length);
    setIsOpen(true);
  }, [list, page]);

  return (
    <>
      <div
        className={`w-full h-full fixed top-0 left-0 z-0 ${isOpen ? "" : "hidden"}`}
        onClick={handleClose}
      ></div>
      <div>{"검색결과 : " + list?.length + "개"}</div>
      {isOpen ? (
        <div
          key="list"
          className={`absolute h-20 w-full z-10 overflow-y-auto bg-white`}
        >
          {isList ? (
            <div>검색 결과가 없습니다.</div>
          ) : (
            <>
              <ListItem list={renderItems} onClick={handleClick} />
              {isNextList && <div ref={loader}></div>}
            </>
          )}
        </div>
      ) : (
        <div onClick={handleOpen}> + </div>
      )}
    </>
>>>>>>> Stashed changes
  );
};

export default ResultList;
<<<<<<< Updated upstream
=======

const ListItem = ({
  list,
  onClick,
}: {
  list: SearchListItem[];
  onClick: (value: string) => void;
}) => (
  <>
    {list.map((item) => (
      <div key={item.value}>
        <div className="h-4" onClick={() => onClick(item.value)}>
          {item.name}
        </div>
      </div>
    ))}
  </>
);
>>>>>>> Stashed changes
