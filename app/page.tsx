"use client";

import Dropzone from "@/components/common/Dropzone";
import Finder from "@/components/common/Finder";
import Tab from "@/components/list/Tab";
import { useDropCardStore } from "@/stores/DropCardStore";

export default function Main() {
  const { card, addCard, removeCard } = useDropCardStore();
  const handleClickAddDropCard = (htmlContent: React.ReactNode) => {
    addCard({ id: 1, content: htmlContent });
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
