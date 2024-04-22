"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const WEEKS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

interface Props {
  data: [];
}

const Box = ({ children }: { children: ReactNode }) => {
  const route = useRouter();

  const handleClick = (id: number) => {
    route.push(`/${id}`);
  };

  return (
    <div
      className="flex justify-between p-3 mb-2 border-2 bg-white"
      onClick={() => handleClick(1)}
    >
      <div>{children}</div>
      <button> + </button>
    </div>
  );
};

function Now({ data }: Props) {
  const makeWeekCalendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const mon = date.getMonth();
    const day = date.getDay();

    let weeklast = day + 7;
    let dateList = [];

    for (let count = day; count < weeklast; count++) {
      let newDate = new Date(date.valueOf() + 86400000 * (count - day));
      dateList.push({ date: newDate.getDate(), day: newDate.getDay() });
    }

    return { year, mon, dateList };
  };

  const { year, mon, dateList } = makeWeekCalendar();

  return (
    <div className="p-2">
      <div className="flex justify-center mb-2">
        {year} / {mon}
      </div>
      <div className="">
        {dateList.map(({ date, day }) => {
          return (
            <Box key={date}>
              <div className="flex">
                <div className="mr-2">{date + "일"}</div>
                <div>{WEEKS[day]}</div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default Now;
