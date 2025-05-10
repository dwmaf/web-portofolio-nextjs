"use client";

import Sidebar from "./components/sidebar";
import { useState } from "react";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      
      <main className="gap-3 w-full items-start">
        <div className="lg:flex lg:justify-between px-6 py-12 md:px-12 md:py-16  lg:px-10 lg:py-0">
          <div
            id="kiri"
            className="lg:w-1/2 lg:flex-col lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:pt-20 lg:pl-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold ">
              Dawam Agung Fathoni
            </h1>
            <h2 className="text-lg font-medium mt-3 text-slate-200">
              Full Stack Web Developer, Character Illustrator
            </h2>
            <p className="mt-4 text-blue-custom">
              I love to build website that can bring usefulness
            </p>

            <div className="flex-col mt-20 mb-17 hidden lg:flex">
              <div className="flex items-center gap-3 group">
                <div className="h-[1px] w-10 group-hover:w-20 group-hover:bg-white bg-blue-200"></div>
                <a
                  href=""
                  className="text-blue-200 text-xs font-bold group-hover:text-white"
                >
                  ABOUT
                </a>
              </div>

              <div className="flex items-center gap-3 mt-5 group">
                <div className="h-[1px] w-10 group-hover:w-20 group-hover:bg-white bg-blue-200"></div>
                <a
                  href=""
                  className="text-blue-200 text-xs font-bold group-hover:text-white"
                >
                  EXPERIENCE
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5 group">
                <div className="h-[1px] w-10 group-hover:w-20 group-hover:bg-white bg-blue-200"></div>
                <a
                  href=""
                  className="text-blue-200 text-xs font-bold group-hover:text-white"
                >
                  PROJECTS
                </a>
              </div>
            </div>
            <div className="flex mt-8 items-center gap-5">
              <img src="/github.png" alt="github" className="w-6 h-6" />
              <img src="/linkedin.png" alt="linkedin" className="w-6 h-6" />
              <img src="/ig.png" alt="instagram" className="w-6 h-6" />
            </div>
          </div>
          <div id="kanan" className="lg:w-1/2 pt-20 ">
            <h2 className="text-sm font-bold text-slate-200 mb-4">ABOUT</h2>
            <p className="mb-4 text-blue-custom text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              adipisci repudiandae error, debitis, saepe minus necessitatibus
              illum et totam nemo maiores. Nostrum excepturi, optio soluta
              praesentium omnis ratione! Necessitatibus excepturi modi possimus
              doloribus ducimus exercitationem enim fuga cumque omnis dicta
              repellat, minima ullam explicabo beatae natus quibusdam quia illo
              tempore repellendus ipsa dignissimos nihil? Libero dolorum
              eligendi ullam odio soluta, eos officiis placeat. Ullam mollitia
              nesciunt exercitationem voluptatem nam minima, fugiat perferendis
              veritatis omnis quas quia culpa tempore reprehenderit magni
              placeat consequuntur repellendus odio itaque aspernatur architecto
              molestiae voluptate consectetur deserunt! Magnam odio dolores
              consectetur corrupti eaque fugiat alias? Repellendus!{" "}
            </p>
            <h2 className="text-sm font-bold text-slate-200 mb-4 mt-24">
              EXPERIENCE
            </h2>
            <div className="gap-5 flex flex-col ">
              {/* KP LSP UNTAN */}
              <div className="sm:flex sm:group lg:hover:bg-slate-800 lg:p-4 rounded-2xl">
                <h6 className="sm:w-1/4 w-full text-blue-custom text-sm mb-2">
                  Juny - Sept 2019
                </h6>
                <div className="sm:w-3/4 flex flex-col w-full">
                  <h6 className="mb-2 group-hover:text-teal-200 font-bold flex items-center gap-2">
                    <span>Kerja Praktik</span>
                    <span className="text-xs leading-none">•</span>
                    <span>LSP UNTAN</span>
                  </h6>
                  <p className="mb-2 text-blue-custom text-sm w-full">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam adipisci repudiandae error, debitis, saepe minus
                    necessitatibus illum et totam nemo maiores. Nostrum
                    excepturi, optio soluta praesentium omnis ratione!
                    Necessitatibus excepturi modi possimus doloribus ducimus
                    exercitationem enim fuga cumque omnis dicta repellat, minima
                    ullam explicabo beatae natus quibusdam quia illo tempore
                    repellendus ipsa dignissimos nihil?
                  </p>
                  <div className="flex gap-2 text-sm">
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      PHP
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Laravel
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Bootstrap
                    </div>
                  </div>
                </div>
              </div>
              {/* Bangkit */}
              <div className="flex group hover:bg-slate-800 p-4 rounded-2xl">
                <h6 className="w-1/4 text-blue-custom text-sm">
                  Juny - Sept 2019
                </h6>
                <div className="w-3/4 flex flex-col">
                  <h6 className="mb-2 group-hover:text-teal-200 font-bold ">
                    <span>Kerja Praktik</span>
                    <span className="text-xs leading-none">•</span>
                    <span>LSP UNTAN</span>
                  </h6>
                  <p className="mb-2 text-blue-custom text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam adipisci repudiandae error, debitis, saepe minus
                    necessitatibus illum et totam nemo maiores. Nostrum
                    excepturi, optio soluta praesentium omnis ratione!
                    Necessitatibus excepturi modi possimus doloribus ducimus
                    exercitationem enim fuga cumque omnis dicta repellat, minima
                    ullam explicabo beatae natus quibusdam quia illo tempore
                    repellendus ipsa dignissimos nihil?
                  </p>
                  <div className="flex gap-2 text-sm">
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Kotlin
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Tensorflow
                    </div>
                  </div>
                </div>
              </div>
              {/* PMKM */}
              <div className="flex group hover:bg-slate-800 p-4 rounded-2xl">
                <h6 className="w-1/4 text-blue-custom text-sm">
                  Juny - Sept 2019
                </h6>
                <div className="w-3/4 flex flex-col">
                  <h6 className="mb-2 group-hover:text-teal-200 font-bold ">
                    <span>Kerja Praktik</span>
                    <span className="text-xs leading-none">•</span>
                    <span>LSP UNTAN</span>
                  </h6>
                  <p className="mb-2 text-blue-custom text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam adipisci repudiandae error, debitis, saepe minus
                    necessitatibus illum et totam nemo maiores. Nostrum
                    excepturi, optio soluta praesentium omnis ratione!
                    Necessitatibus excepturi modi possimus doloribus ducimus
                    exercitationem enim fuga cumque omnis dicta repellat, minima
                    ullam explicabo beatae natus quibusdam quia illo tempore
                    repellendus ipsa dignissimos nihil?
                  </p>
                  <div className="flex gap-2 text-sm">
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      PHP
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Laravel
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Bootstrap
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-sm font-bold text-slate-200 mb-4 mt-24">
                PROJECTS
              </h2>
              {/* Saputipu */}
              <div className="flex lg:p-4 rounded-2xl gap-4">
                <img src="" alt="bangkit" className="w-1/4 "/>
                <div className="w-3/4 flex flex-col">
                  <h6 className="mb-2 hover:text-teal-200 font-bold ">
                    Saputipu
                  </h6>
                  <p className="mb-2 text-blue-custom text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam adipisci repudiandae error, debitis, saepe minus
                    necessitatibus illum et totam nemo maiores. Nostrum
                    excepturi, optio soluta praesentium omnis ratione!
                    Necessitatibus excepturi modi possimus doloribus ducimus
                    exercitationem enim fuga cumque omnis dicta repellat, minima
                    ullam explicabo beatae natus quibusdam quia illo tempore
                    repellendus ipsa dignissimos nihil?
                  </p>
                  <div className="flex gap-2 text-sm">
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Kotlin
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Tensorflow
                    </div>
                  </div>
                </div>
              </div>
              {/* Web Profil LSP UNTAN */}
              <div className="flex flex-col-reverse sm:flex-row lg:p-4 rounded-2xl gap-4 w-full">
                <img src="/web-profil-lsp-1.png" alt="" className="w-[160px] h-[100px] object-cover object-top rounded border border-slate-200 flex-shrink-0"/>
                <div className="sm:w-3/4 flex flex-col w-full">
                  <h6 className="mb-2 hover:text-teal-200 font-bold ">
                    Web Profil LSP UNTAN
                  </h6>
                  <p className="mb-2 text-blue-custom text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam adipisci repudiandae error, debitis, saepe minus
                    necessitatibus illum et totam nemo maiores. Nostrum
                    excepturi, optio soluta praesentium omnis ratione!
                    Necessitatibus excepturi modi possimus doloribus ducimus
                    exercitationem enim fuga cumque omnis dicta repellat, minima
                    ullam explicabo beatae natus quibusdam quia illo tempore
                    repellendus ipsa dignissimos nihil?
                  </p>
                  <div className="flex gap-2 text-sm">
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Kotlin
                    </div>
                    <div className="rounded-xl bg-teal-950 text-teal-300 py-1 px-3">
                      Tensorflow
                    </div>
                  </div>
                </div>
              </div>
              {/* Web Profil Kec Pemangkat */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
