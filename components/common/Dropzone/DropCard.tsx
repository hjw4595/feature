const DropCard = ({
  id,
  content,
}: {
  id: number;
  content: React.ReactNode;
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("id", `${id}`);
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
