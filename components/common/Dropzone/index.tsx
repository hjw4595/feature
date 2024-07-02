import React, { useState } from "react";
import DropCard from "./DropCard";
import { useDropCardStore } from "@/stores/DropCardStore";

const Dropzone = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const { card, addCard, removeCard, setCard } = useDropCardStore();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(true);
  };

  const handleDragStart = ({
    e,
    index,
  }: {
    e: React.DragEvent<HTMLDivElement>;
    index: number;
  }) => {
    e.dataTransfer.setData("draggedItemIndex", `${index}`);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(false);
  };

  const handleDrop = ({
    e,
    index,
  }: {
    e: React.DragEvent<HTMLDivElement>;
    index: number;
  }) => {
    const id = e.dataTransfer.getData("draggedItemIndex");
    const indexToString = `${index}`;
    if (id != indexToString) {
      const newItems = [...card];
      const [draggedItem] = newItems.splice(+id, 1);
      newItems.splice(index, 0, draggedItem);
      setCard(newItems);
    }
    setIsDraggingOver(false);
  };
  console.log(card);

  return (
    <div className={`w-60 h-96 bg-white`}>
      {card.map((data, index) => (
        <div
          className={`${isDraggingOver ? "is-dragging" : ""}`}
          key={data.id}
          onDrop={(e) => handleDrop({ e, index: index })}
          onDragOver={(e) => handleDragOver(e)}
          onDragStart={(e) => handleDragStart({ e, index: index })}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <DropCard
            key={data.id}
            id={data.id}
            content={data.content}
          ></DropCard>
        </div>
      ))}
    </div>
  );
};

export default Dropzone;
