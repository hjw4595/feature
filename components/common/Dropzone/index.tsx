import React, { useState } from "react";
import DropCard from "./DropCard";
import { useDropCardStore } from "@/stores/DropCardStore";

const Dropzone = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const { card, addCard, removeCard } = useDropCardStore();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(true);
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = parseInt(e.dataTransfer.getData("id"), 10);
    setIsDraggingOver(false);

    addCard({ id, content: <div></div> });
  };

  return (
    <div
      className={`w-60 h-96 bg-white ${isDraggingOver ? "is-dragging" : ""}`}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      {card.map((data) => (
        <DropCard key={data.id} id={data.id} content={data.content}></DropCard>
      ))}
    </div>
  );
};

export default Dropzone;
