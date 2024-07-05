import React, { useState } from "react";
import DropCard from "./DropCard";
import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";

const Dropzone = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [cardId, setCardId] = useState<number>(0);

  const { card, addCard, moveCard } = useDropCardStore();
  const { newContent, cleanContent } = useCardContentStore();
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

  const handleNewContentDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newCard = { id: cardId, content: newContent };
    addCard(newCard);
    cleanContent();
    setCardId((prev) => prev + 1);
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
      moveCard(index, +id);
    }
    setIsDraggingOver(false);
  };

  console.log(card);

  return (
    <div
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleNewContentDragEnd(e)}
      className={`w-60 h-96 bg-white ${isDraggingOver ? "is-dragging" : ""}`}
    >
      {card.map((data, index) => (
        <div
          key={data.id}
          onDrop={(e) => handleDrop({ e, index: index })}
          onDragOver={(e) => handleDragOver(e)}
          onDragStart={(e) => handleDragStart({ e, index: index })}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <DropCard key={data.id} content={data.content}></DropCard>
        </div>
      ))}
    </div>
  );
};

export default Dropzone;
