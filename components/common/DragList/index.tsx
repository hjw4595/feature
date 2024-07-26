import { useState } from "react";

import { useDropCardStore } from "@/stores/DropCardStore";
import Content from "./Content";
import Popup from "../Popup";

function DragList() {
  const [isDragging, setIsDragging] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const { card, moveCard } = useDropCardStore();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = ({
    e,
    index,
  }: {
    e: React.DragEvent<HTMLDivElement>;
    index: number;
  }) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("draggedItemIndex");

    if (+id != index) {
      moveCard(index, +id);
    }
    setIsDragging(false);
  };

  const handleClickModify = () => {
    setIsModify((prev) => !prev);
  };

  return (
    <div className="bg-white">
      {card.map((data, index) => (
        <div
          className={`${isDragging ? "bg-blue-200" : "bg-slate-200"}`}
          key={data.id}
          onDragOver={(e) => handleDragOver(e)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop({ e, index: index })}
        >
          <div className="border border-black">
            <Content
              key={data.id}
              id={data.id}
              content={data.content}
              isModify={isModify}
            ></Content>
          </div>
        </div>
      ))}
      <div onClick={() => handleClickModify()}>
        {isModify ? "완료" : "수정"}
      </div>
    </div>
  );
}

export default DragList;
