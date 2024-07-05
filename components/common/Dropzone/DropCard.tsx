import { useCardContentStore, useDropCardStore } from "@/stores/DropCardStore";

const DropCard = ({
  id,
  content,
  dragStatus,
}: {
  id?: number;
  content: React.ReactNode;
  dragStatus?: DataTransfer["effectAllowed"];
}) => {
  const { newContent, addContent } = useCardContentStore();
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = `${dragStatus ?? "none"}`;
    if (id) {
      e.dataTransfer.setData("draggedItemIndex", `${id}`);
    }
    addContent(content);
  };

  return (
    <div
      draggable={true}
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
