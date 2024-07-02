"use client";

import Dropzone from "@/components/common/Dropzone";
import Finder from "@/components/common/Finder";
import Tab from "@/components/list/Tab";

import { useDropCardStore } from "@/stores/DropCardStore";

import { useState } from "react";

export default function Main() {
  const { card, addCard, removeCard } = useDropCardStore();
  const [cardId, setCardId] = useState<number>(0);

  const handleClickAddDropCard = (htmlContent: React.ReactNode) => {
    addCard({ id: cardId, content: htmlContent });
    setCardId((prev) => prev + 1);
  };
  return (
    <main className="">
      <div className="flex justify-center items-center h-12 bg-gray-600 border-b-2">
        <div>header</div>
      </div>
      <Tab />
      <Finder />
      <Dropzone />
      <button onClick={() => handleClickAddDropCard(<Finder />)}>추가</button>
    </main>
  );
}
