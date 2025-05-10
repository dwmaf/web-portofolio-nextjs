"use client";

import { ClipboardDocumentListIcon, ArrowPathIcon, CheckCircleIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from "react";
import ProgressCircle from "../components/progresscircle";
import Sidebar from "../components/sidebar";

export default function Home() {
  const tasks = [
    {name: "Validasi Pendaftar", status: "On Doing"},
    {name: "PWA", status: "To Do"},
    {name: "Laporan", status: "To Do"},
    {name: "Asesi Pra-asesmen", status: "To Do"},
    {name: "Asesi Pembayaran", status: "To Do"},
    {name: "Asesi Asesmen", status: "To Do"},
    {name: "Asesi Mendaftar", status: "Done"},
  ];
  const [percent, setPercent] = useState(0);

  const calculatePercentage = () => {
    const totalTasks = tasks.length;
    const compeletedTasks = tasks.filter(task => task.status === "Done").length;
    const percentage = (compeletedTasks / totalTasks) * 100;
    return Math.round(percentage * 10) / 10;
  }

  useEffect(() => {
    setPercent(calculatePercentage());
  }, [tasks]);
  console.log(percent);
  

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <main className="w-full">
        <div className="flex sm:flex-row flex-col gap-4 p-4 w-full">
          <div className="w-full p-4 bg-gray-200 rounded-lg">
            
            <h3 className="font-bold text-gray-500">Progress Percentage</h3>
            <ProgressCircle percent={percent} />
          </div>
          <div className="w-full p-4 bg-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-500 mb-3">Tech Stack</h3>
            <div className='flex flex-wrap gap-2'>
              <div className='flex items-center gap-0.5 border border-red-500 rounded-2xl pl-2 pr-2 p-1 w-auto '>
                <img src="/laravel-icon.png" alt="" className='h-5 w-5' />
                <h3 className='text-red-500 font-bold text-sm'>Laravel</h3>
              </div>
              <div className='flex items-center gap-0.5 border border-purple-900 rounded-2xl pl-2 pr-2 p-1 w-auto'>
                <img src="/pwan.png" alt="" className='h-4 w-9' />
                <h3 className='text-purple-900 font-bold text-sm'>Progressive Web App</h3>
              </div>
              <div className='flex items-center gap-0.5 border border-teal-800 rounded-2xl pl-2 pr-2 p-1 w-auto'>
                <img src="/mysql.png" alt="" className='h-5 w-5' />
                <h3 className='text-teal-800 font-bold text-sm'>MySQL</h3>
              </div>
              <div className='flex items-center gap-0.5 border border-cyan-700 rounded-2xl pl-2 pr-2 p-1 w-auto'>
                <img src="/alpinejs.png" alt="" className='h-5 w-5' />
                <h3 className='text-cyan-700 font-bold text-sm'>Alpinejs</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          id="todolist"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 pl-4 pr-4 w-full"
        >
          {tasks.map((task, index) => (

          <div key={index} className="flex items-center p-4 bg-gray-200 rounded-lg gap-3">
            {task.status === "Done" && <CheckCircleIcon className='h-6 w-6 text-green-500'/>}
            {task.status === "On Doing" && <ArrowPathIcon className="h-6 w-6 text-yellow-500 animate-spin" />}
            {task.status === "To Do" && <ClipboardDocumentListIcon className="h-6 w-6 text-blue-500" />}
            <div>
              <h3 className="text-black font-bold text-sm">{task.name}</h3>
              <p className="text-gray-500 text-xs">{task.status}</p>
            </div>
          </div>
          ))}
        </div>
      </main>
    </div>
  );
}
