import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";

const DropCard = ({
  id,
  content,
}: {
  id?: number;
  content: React.ReactNode;
}) => {
  const { addContent } = useCardContentStore();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "copyMove";
    addContent(content);
  };

  return (
    <div
      draggable
      className="bg-slate-100"
      onDragStart={(e) => {
        handleDragStart(e);
      }}
    >
      {content}
    </div>
  );
};

export default DropCard;
