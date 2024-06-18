"use client";

import Finder from "@/components/common/Finder";
import Tab from "@/components/list/Tab";

export default function Main() {
  return (
    <main className="">
      <div className="flex justify-center items-center h-12 bg-gray-600 border-b-2">
        <div>header</div>
      </div>
      <Tab />
      <Finder />
    </main>
  );
}
