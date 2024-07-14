"use client";
import React from "react";

export default function Projects() {
  const Pages = [
    {
      id: 0,
      title: "Patinete City | Taller de reparación de patinetes",
      image: "/patinete.webp",
      URL: "http://patinetecity.es/",
    },
    {
      id: 1,
      title: "Tuoutlet24h | Joyería de plata y oro",
      image: "/tuoutlet24h.webp",
      URL: "http://tuoutlet24h.com/",
    },
    {
      id: 2,
      title: "Pilaraguileradesign | Diseño de Interiores",
      image: "mediterranean.webp",
      URL: "http://pilaraguileradesign.com/",
    },
    {
      id: 3,
      title: "Disfrutaaprendiendo | Blog de artículos",
      image: "disfrutaaprendiendo.png",
      URL: "https://disfrutaaprendiendo.com/",
    },
    {
      id: 4,
      title: "Rosa Escalona | Galería de Arte",
      image: "rosa-escalona.webp",
      URL: "https://rosaescalonajavea.com/",
    },
    {
      id: 5,
      title: "Terracottaorigen | Decoración Sostenible",
      image: "terracottaorigen.webp",
      URL: "http://terracottaorigen.com/",
    },
  ];

  return (
    <article className="flex flex-col items-center bg-slate-100">
      <h3 className="mt-12 text-2xl font-bold italic">
        Diseños de páginas web
      </h3>
      <ul className="grid grid-cols-1  md:grid-cols-2 max-w-7xl m-auto gap-5 mt-12 bg-white">
        {Pages.map(({ id, title, image, URL }) => (
          <li key={id} className="flex flex-col items-center font-bold italic">
            <a target="_blank" href={URL}>
              <img src={image} />
            </a>
            <a href={URL} target="_blank">
              {title}{" "}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
