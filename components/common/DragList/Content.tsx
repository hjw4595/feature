import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";
import { useState } from "react";
import Popup from "../Popup";

interface Props {
  id: number;
  content: React.ReactNode;
  isModify: boolean;
}

const Content = ({ id, content, isModify }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [popup, setPopup] = useState(false);

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

  const handleClickContentDelete = () => {
    setPopup(true);
  };

  const onClickPopupConfirm = () => {
    handleDeletContent(id, content);
    setPopup(false);
  };

  const onClickPopupClose = () => {
    setPopup(false);
  };

  return (
    <>
      {isModify ? (
        <div className="text-red-500" onClick={handleClickContentDelete}>
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
      <Popup
        isOpen={popup}
        onConfirm={onClickPopupConfirm}
        onClose={onClickPopupClose}
      />
    </>
  );
};

export default Content;
