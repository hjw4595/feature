"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LIST = [
  {
    id: 0,
    title: "왕십리 카페 스터디",
    locationUrl: "네이버 지도 링크",
    startTime: "18:00",
    endTime: "20:00",
    category: "없음",
    description: "카페에서 같이 공부하실 분",
  },
];

interface Props {
  id: number;
  title: string;
  locationUrl: string;
  startTime: string;
  endTime: string;
  category: string;
  description: string;
}

const Card = ({
  id,
  title,
  locationUrl,
  startTime,
  endTime,
  category,
  description,
}: Props) => {
  return (
    <div className="border-2 p-2 bg-white">
      <div>제목</div>
      <div>{title}</div>
      <Link href={locationUrl} />
      <div>시간</div>
      <div>{startTime + "~" + endTime}</div>
      <div>주제</div>
      <div>{category}</div>
      <div>소개</div>
      <div>{description}</div>
    </div>
  );
};

export default function Detail() {
  const route = useRouter();
  const handleClick = () => {
    route.push("/create");
  };
  return (
    <main className="bg-slate-100 h-screen">
      <div className="">
        <div>{"00월 00일 목록"}</div>
        {LIST.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
      <div onClick={() => handleClick()}>+</div>
    </main>
  );
}
