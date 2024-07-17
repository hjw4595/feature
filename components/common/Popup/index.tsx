import { useState } from "react";
import Portal from "./Portal";

interface Props {
  onConfirm: () => void;
}

function Popup({ onConfirm }: Props) {
  const [open, setOpen] = useState(false);
  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickConfirm = () => {
    onConfirm();
  };

  return (
    <Portal>
      <div
        className={`w-full h-full bg-slate-200 ${open ? "block" : "hidden"}`}
      >
        <div className="bg-white">
          <div className="border-b"></div>
          <div className="">content</div>

          <div className="flex">
            <div onClick={handleClickClose}>취소</div>
            <div onClick={() => {}}>확인</div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Popup;
