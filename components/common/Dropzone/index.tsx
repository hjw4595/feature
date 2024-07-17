import React, { useState } from "react";
import DropCard from "./DropCard";
import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";
import DragList from "../DragList";

const Dropzone = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [cardId, setCardId] = useState<number>(0);

  const { addCard } = useDropCardStore();
  const { newContent, cleanContent } = useCardContentStore();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const newCard = { id: cardId, content: newContent };

    addCard(newCard);
    setCardId((prev) => prev + 1);

    cleanContent();
    setIsDraggingOver(false);
  };

  return (
    <div
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onDragLeave={handleDragLeave}
      className={`${isDraggingOver ? "bg-blue-200" : "bg-slate-200"}`}
    >
      추가
    </div>
  );
};

export default Dropzone;
