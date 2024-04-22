"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

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

function All({ data }: Props) {
  return (
    <div className="p-2">
      <div className="">
        {data.map(({ date, day }) => {
          return (
            <Box key={date}>
              <div className="flex">
                <div className="mr-2">{date + "일"}</div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default All;
