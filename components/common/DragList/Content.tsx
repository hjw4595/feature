import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";
import { useState } from "react";

interface Props {
  id: number;
  content: React.ReactNode;
  isModify: boolean;
}

const Content = ({ id, content, isModify }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const { deleteCard } = useDropCardStore();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("draggedItemIndex", `${id}`);
  };

  const handleDeletContent = (id: number, content: React.ReactNode) => {
    deleteCard({ id, content });
  };

  return (
    <>
      {isModify ? (
        <div
          className="text-red-500"
          onClick={() => handleDeletContent(id, content)}
        >
          -
        </div>
      ) : (
        <div
          draggable={true}
          className={`${isDragging ? "bg-blue-200" : "bg-slate-200"}`}
          onDragOver={(e) => handleDragOver(e)}
          onDragStart={(e) => {
            handleDragStart(e);
          }}
          onDragLeave={(e) => handleDragLeave(e)}
          onDrop={(e) => handleDrop(e)}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Content;
