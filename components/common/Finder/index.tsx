import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import ResultList from "./ResultList";

export interface SearchListItem {
  name: string;
  value: string;
}

interface Props {}

const TEST_LIST = [
  { name: "1", value: "1" },
  { name: "2", value: "2" },
  { name: "3", value: "3" },
  { name: "4", value: "4" },
  { name: "5", value: "5" },
  { name: "6", value: "6" },
  { name: "7", value: "7" },
  { name: "8", value: "8" },
  { name: "9", value: "9" },
  { name: "10", value: "10" },
  { name: "11", value: "11" },
  { name: "12", value: "12" },
  { name: "13", value: "13" },
];

function Finder() {
  const [search, setSearch] = useState("");
  const [searchResultList, setSearchResultList] = useState<SearchListItem[]>();

  const debouncedValue = useDebounce(search, 300);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  //추후 목업데이터 api 형식으로 추가
  const getSearchResult = (value: string) => {
    value && setSearchResultList(TEST_LIST);
    return;
  };

  useEffect(() => {
    getSearchResult(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative">
      <div>
        <input onChange={(e) => handleSearchInput(e)} />
      </div>
      {searchResultList && <ResultList list={searchResultList} />}
    </div>
  );
}

export default Finder;
