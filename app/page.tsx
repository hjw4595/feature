"use client";

import DragList from "@/components/common/DragList";
import Dropzone from "@/components/common/Dropzone";
import DropCard from "@/components/common/Dropzone/DropCard";
import Finder from "@/components/common/Finder";
import Tab from "@/components/list/Tab";

export default function Main() {
  return (
    <main className="">
      <div className="flex justify-center items-center h-12 bg-gray-600 border-b-2">
        <div>header</div>
      </div>
      {/* <Tab /> */}
      <div className="flex">
        <div className="flex-1">
          <DropCard content={<Finder />} />
          <DropCard content={<div>asd</div>} />
        </div>
        <div className="flex-1">
          <DragList />
          <Dropzone />
        </div>
      </div>
    </main>
  );
}
