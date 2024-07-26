import { useEffect, useState } from "react";
import Portal from "./Portal";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

function Popup({ isOpen, onConfirm, onClose }: Props) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
  };
  return (
    <Portal>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-slate-700/10 select-none`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-2 w-1/6 border-gray-400 border rounded-lg">
            <div className="border-b mb-2 font-bold">title</div>
            <div className="mb-2">content</div>
            <div className="flex justify-around">
              <div
                onClick={handleClose}
                className="flex-1 text-center border-red-400 border rounded-md"
              >
                취소
              </div>
              <div className="w-2"></div>
              <div
                onClick={handleConfirm}
                className="flex-1 text-center border-blue-400 border rounded-md"
              >
                확인
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Popup;
