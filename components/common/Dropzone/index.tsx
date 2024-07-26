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
    <div className="flex justify-center items-center h-20 border-slate-200 border-4 border-dashed">
      <div
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
        onDragLeave={handleDragLeave}
        className={`flex flex-1 justify-center items-center h-full ${isDraggingOver ? "bg-blue-200" : "bg-white"}`}
      >
        drop to add
      </div>
    </div>
  );
};

export default Dropzone;
