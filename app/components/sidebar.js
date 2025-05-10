import { useState } from "react";
import { HomeIcon, PaintBrushIcon, AcademicCapIcon, XMarkIcon } from "@heroicons/react/24/outline";
export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-50 h-full bg-white dark:bg-gray-800 p-1 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center mb-6">
        <a href="/">
          <img src="/oc.png" alt="" className="h-20 w-20 rounded-full mt-2" />
        </a>
      </div>
      <XMarkIcon onClick={closeSidebar} className="w-[20px] h-[20px] text-blue-custom absolute top-4 right-4 cursor-pointer" />
      <a
        href="/"
        className="items-center gap-2 flex px-4 py-2 text-blue-custom dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm"
      >
        <HomeIcon className="w-[20px] h-[20px] text-blue-custom" />
        <p>Home</p>
      </a>
      <a
        href="/art"
        className="flex items-center gap-2 px-4 py-2 text-blue-custom dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm"
      >
        <PaintBrushIcon className="w-[20px] h-[20px] text-blue-custom" />
        <p>Arts</p>
      </a>
      <a
        href="/skripsiprogress"
        className="flex items-center gap-2 px-4 py-2 text-blue-custom dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm"
      >
        <AcademicCapIcon className="w-[20px] h-[20px] text-blue-custom" />
        <p>Progress Skripsi</p>
      </a>
    </aside>
  );
}
