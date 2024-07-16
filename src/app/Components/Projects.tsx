"use client";
import React from "react";
import { ProjectItems } from "@/Data/ProjectItems";

export default function Projects() {
  return (
    <article className="flex flex-col items-center bg-slate-100">
      <h3 className="mt-12 text-2xl font-bold italic">
        Diseños de páginas web
      </h3>
      <ul className="grid grid-cols-1  md:grid-cols-2 max-w-7xl m-auto gap-10 mt-12">
        {ProjectItems.map(({ id, title, image, URL }) => (
          <li key={id} className="mb-10 flex flex-col items-center font-bold italic">
            <a target="_blank" href={URL}>
              <img  className="w-[600px] h-[300px] object-fill bg-white rounded-xl p-5 hover:scale-105 transition-all" alt={title} src={image} />
            </a>
            <a className="mt-3 hover:underline" href={URL} target="_blank">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
