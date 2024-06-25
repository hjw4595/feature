import { useCallback, useEffect, useRef, useState } from "react";
import { SearchListItem } from ".";

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

  useEffect(() => {
    const option = {
      root: null,
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
  );
};

export default ResultList;

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
