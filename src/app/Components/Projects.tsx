"use client";
import React from "react";
import { ProjectItems } from "@/Data/ProjectItems";

export default function Projects() {
  return (
    <article className="flex flex-col items-center bg-slate-100">
      <h3 className="mt-12 text-2xl font-bold italic">
        Diseños de páginas web
      </h3>
      <ul className="grid grid-cols-1  md:grid-cols-2 max-w-7xl m-auto gap-5 mt-12 bg-white">
        {ProjectItems.map(({ id, title, image, URL }) => (
          <li key={id} className="flex flex-col items-center font-bold italic">
            <a target="_blank" href={URL}>
              <img alt={title} src={image} />
            </a>
            <a href={URL} target="_blank">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
