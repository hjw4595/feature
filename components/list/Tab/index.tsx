import { useState } from "react";
import NowList from "../List/Now";
import AllList from "../List/All";

const TAB_LIST = [
  { name: "now", value: "now" },
  { name: "all", value: "all" },
];

function Tab() {
  const [currentTab, setCurrentTab] = useState<string>("now");

  const handleTabClick = (value: string) => {
    setCurrentTab(() => value);
  };

  const selectTabHeaderStyle = (selectKey: string) => {
    return currentTab === selectKey ? "bg-slate-500" : "white";
  };

  const selectTabContentStyle = (selectKey: string) => {
    return currentTab === selectKey ? "visible" : "hidden";
  };

  return (
    <div>
      <div className="flex text-center">
        {TAB_LIST.map((item) => {
          return (
            <div
              className={`flex-1 ${selectTabHeaderStyle(item.name)} `}
              key={item.name}
              onClick={() => handleTabClick(item.value)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="">
        <div className={`${selectTabContentStyle("now")}`}>
          <NowList data={[]} />
        </div>
        <div className={`${selectTabContentStyle("all")}`}>
          <AllList data={[]} />
        </div>
      </div>
    </div>
  );
}

export default Tab;
