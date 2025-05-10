'use client'
import { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/sidebar";
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar}></Sidebar>
      <main className="flex flex-col gap-8 p-4">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Open Sidebar
        </button>
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl mb-2">
            Projects
          </h1>
          <h5 className="text-gray-600 dark:text-gray-400 text-sm">
            Proyek-proyek website yang pernah saya kerjakan
          </h5>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-full">
          {/* Web Profil LSP UNTAN */}
          <div
            id="web profil lsp untan"
            className="rounded-lg bg-gray-100 dark:bg-gray-800 p-1 max-w-[400px] border border-gray-300 dark:border-gray-400"
          >
            <img
              src="/web-profil-lsp-1.png"
              alt="Web Profil LSP UNTAN"
              className="w-full h-45 object-cover object-top rounded-tl-lg rounded-tr-lg"
            />
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 ml-3 mt-2">
              Web Profil LSP UNTAN
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 ml-3 mr-3">
              Website profil yang menampilkan profil dari LSP UNTAN, hasil dari
              Kerja Praktek di Instansi LSP UNTAN
            </p>
            <div className="flex gap-2 mb-2 ml-3 items-center">
              <img src="/php.png" alt="Laravel" className="h-5 w-8" />
              <img src="/laravel-icon.png" alt="Laravel" className="h-6 w-6" />
              <img
                src="/mysql.png"
                alt="MySQL"
                className="h-6 w-6 bg-white rounded"
              />
              <img src="/bootstrap.png" alt="MySQL" className="h-6 w-7" />
            </div>
          </div>

          {/* Web Profil Kec Pemangkat */}
          <div
            id="web profil kec pemangkat"
            className="rounded-lg bg-gray-100 dark:bg-gray-800 p-1 max-w-[400px] border border-gray-300 dark:border-gray-400"
          >
            <img
              src="web-profil-pmgkt.png"
              alt="Web Profil Kec Pemangkat"
              className="w-full h-45 object-cover object-top rounded-tl-lg rounded-tr-lg"
            />
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 ml-3 mt-2">
              Web Profil Kec Pemangkat
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 ml-3 mr-3">
              Website profil Kec Pemangkat yang menampilkan informasi berupa
              Perangkat desa,
            </p>
            <div className="flex gap-2 mb-2 ml-3">
              <img src="/php.png" alt="Laravel" className="h-5 w-8" />
              <img src="/laravel-icon.png" alt="Laravel" className="h-6 w-6" />
              <img
                src="/mysql.png"
                alt="MySQL"
                className="h-6 w-6 bg-white rounded"
              />
              <img src="/bootstrap.png" alt="MySQL" className="h-6 w-7" />
            </div>
          </div>

          {/* Spam, Scam */}
          <div
            id="Bangkit"
            className="rounded-lg bg-gray-100 dark:bg-gray-800 p-1 max-w-[400px] border border-gray-300 dark:border-gray-400"
          >
            <img
              src=""
              alt="Spam, Scam"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 ml-3 mt-2">
              Sapu Tipu
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 ml-3 mr-3">
              Aplikasi android untuk mengidentifikasi apakah suatu text
            </p>
            <div className="flex gap-2 mb-2 ml-3">
              <img src="/kotlin.png" alt="Laravel" className="h-6 w-6" />
              <img src="/tensorflow.png" alt="MySQL" className="h-6 w-6" />
            </div>
          </div>
          {/* Pendaftaran  */}
          <div
            id="Bangkit"
            className="rounded-lg bg-gray-100 dark:bg-gray-800 p-1 max-w-[400px] border border-gray-300 dark:border-gray-400"
          >
            <img
              src=""
              alt="Spam, Scam"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 ml-3 mt-2">
              Web Pendaftaran LSP UNTAN
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 ml-3 mr-3">
              Website pendaftaran sertifikasi di LSP UNTAN
            </p>
            <div className="flex gap-2 mb-2 ml-3 items-center">
              <img src="/php.png" alt="Laravel" className="h-5 w-8" />
              <img src="/laravel-icon.png" alt="Laravel" className="h-6 w-6" />
              <img src="/tailwind.png" alt="Laravel" className="h-5 w-8" />
              <img
                src="/alpinejs.png"
                alt="MySQL"
                className="h-6 w-6 rounded bg-white"
              />
              <img
                src="/mysql.png"
                alt="MySQL"
                className="h-6 w-6 bg-white rounded"
              />
            </div>
          </div>
          {/* Portofolio */}
          <div
            id="Bangkit"
            className="rounded-lg bg-gray-100 dark:bg-gray-800 p-1 max-w-[400px] border border-gray-300 dark:border-gray-400"
          >
            <img
              src=""
              alt="Spam, Scam"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-bold text-gray-800 dark:text-white mb-2 ml-3 mt-2">
              Web Portofolio
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 ml-3 mr-3">
              Website portofolio yang menampilkan portofolio-portofolio
            </p>
            <div className="flex gap-2 mb-2 ml-3 items-center">
              <img src="/js.png" alt="MySQL" className="h-6 w-6" />
              <img src="/nextjs.png" alt="MySQL" className="h-6 w-6" />
              <img src="/react.png" alt="MySQL" className="h-6 w-6" />
              <img src="/tailwind.png" alt="Laravel" className="h-5 w-8" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
