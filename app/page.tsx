"use client";

import Dropzone from "@/components/common/Dropzone";
import DropCard from "@/components/common/Dropzone/DropCard";
import Finder from "@/components/common/Finder";
import Tab from "@/components/list/Tab";
import { useCardContentStore } from "@/stores/DropCardStore";

export default function Main() {
  return (
    <main className="">
      <div className="flex justify-center items-center h-12 bg-gray-600 border-b-2">
        <div>header</div>
      </div>
      <Tab />
      <DropCard content={<Finder />} dragStatus="copyMove"></DropCard>
      <DropCard content={<div>asd</div>} dragStatus="copyMove"></DropCard>
      <Dropzone />
    </main>
  );
}
