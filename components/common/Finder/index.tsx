import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import ResultList from "./ResultList";

export interface SearchListItem {
  name: string;
  value: string;
}

const TEST_LIST = [
  { name: "alpha", value: "alpha" },
  { name: "bravo", value: "bravo" },
  { name: "charlie", value: "charlie" },
  { name: "delta", value: "delta" },
  { name: "echo", value: "echo" },
  { name: "foxtrot", value: "foxtrot" },
  { name: "golf", value: "golf" },
  { name: "hotel", value: "hotel" },
  { name: "india", value: "india" },
  { name: "juliet", value: "juliet" },
  { name: "kilo", value: "kilo" },
  { name: "lima", value: "lima" },
  { name: "mike", value: "mike" },
  { name: "november", value: "november" },
  { name: "oscar", value: "oscar" },
  { name: "papa", value: "papa" },
  { name: "quebec", value: "quebec" },
  { name: "romeo", value: "romeo" },
  { name: "sierra", value: "sierra" },
  { name: "tango", value: "tango" },
  { name: "uniform", value: "uniform" },
  { name: "victor", value: "victor" },
  { name: "whiskey", value: "whiskey" },
  { name: "x-ray", value: "x-ray" },
  { name: "yankee", value: "yankee" },
  { name: "zulu", value: "zulu" },
  { name: "alpha1", value: "alpha1" },
  { name: "bravo1", value: "bravo1" },
  { name: "charlie1", value: "charlie1" },
  { name: "delta1", value: "delta1" },
  { name: "echo1", value: "echo1" },
  { name: "foxtrot1", value: "foxtrot1" },
  { name: "golf1", value: "golf1" },
  { name: "hotel1", value: "hotel1" },
  { name: "india1", value: "india1" },
  { name: "juliet1", value: "juliet1" },
  { name: "kilo1", value: "kilo1" },
  { name: "lima1", value: "lima1" },
  { name: "mike1", value: "mike1" },
  { name: "november1", value: "november1" },
  { name: "oscar1", value: "oscar1" },
  { name: "papa1", value: "papa1" },
  { name: "quebec1", value: "quebec1" },
  { name: "romeo1", value: "romeo1" },
  { name: "sierra1", value: "sierra1" },
  { name: "tango1", value: "tango1" },
  { name: "uniform1", value: "uniform1" },
  { name: "victor1", value: "victor1" },
  { name: "whiskey1", value: "whiskey1" },
  { name: "x-ray1", value: "x-ray1" },
  { name: "yankee1", value: "yankee1" },
  { name: "zulu1", value: "zulu1" },
  { name: "alpha2", value: "alpha2" },
  { name: "bravo2", value: "bravo2" },
  { name: "charlie2", value: "charlie2" },
  { name: "delta2", value: "delta2" },
  { name: "echo2", value: "echo2" },
  { name: "foxtrot2", value: "foxtrot2" },
  { name: "golf2", value: "golf2" },
  { name: "hotel2", value: "hotel2" },
  { name: "india2", value: "india2" },
  { name: "juliet2", value: "juliet2" },
  { name: "kilo2", value: "kilo2" },
  { name: "lima2", value: "lima2" },
  { name: "mike2", value: "mike2" },
  { name: "november2", value: "november2" },
  { name: "oscar2", value: "oscar2" },
  { name: "papa2", value: "papa2" },
  { name: "quebec2", value: "quebec2" },
  { name: "romeo2", value: "romeo2" },
  { name: "sierra2", value: "sierra2" },
  { name: "tango2", value: "tango2" },
  { name: "uniform2", value: "uniform2" },
  { name: "victor2", value: "victor2" },
  { name: "whiskey2", value: "whiskey2" },
  { name: "x-ray2", value: "x-ray2" },
  { name: "yankee2", value: "yankee2" },
  { name: "zulu2", value: "zulu2" },
];

function Finder() {
  const [search, setSearch] = useState("");
  const [searchResultList, setSearchResultList] = useState<SearchListItem[]>();

  const [listCount, setListCount] = useState<number>(0);
  const [sliceArray, setSliceArray] = useState<SearchListItem[]>();
  const debouncedValue = useDebounce(search, 1000);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleClickListItem = (value: string) => {
    setSearch(value);
  };

  //추후 목업데이터 api 형식으로 추가
  const getSearchResult = async (value: string) => {
    const apiResearch = async (): Promise<SearchListItem[]> => {
      let research: SearchListItem[] = [];
      try {
        TEST_LIST.forEach((item) => {
          if (item.value.includes(value)) {
            research.push(item);
          }
        });
        return research;
      } catch (e) {
        console.log(e);
      } finally {
        return research;
      }
    };
    const getResearch = async (): Promise<SearchListItem[]> => {
      const result = await apiResearch();
      return result;
    };
    const data: SearchListItem[] = await getResearch();
    if (data) {
      setSearchResultList(data);
      setSliceArray(data);
    }
  };

  const onChangeNextList = () => {
    setListCount((prev) => prev + 1);
  };

  useEffect(() => {
    getSearchResult(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative">
      <div>
        <input value={search} onChange={(e) => handleSearchInput(e)} />
      </div>
      {searchResultList && (
        <ResultList
          list={sliceArray ?? []}
          page={listCount}
          onChangeNextList={onChangeNextList}
          onClick={handleClickListItem}
        />
      )}
    </div>
  );
}

export default Finder;
