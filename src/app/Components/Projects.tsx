"use client";
import React from "react";

export default function Projects() {
  const Pages = [
    {
      id: 0,
      title: "Patinete City | Taller de reparación de patinetes",
      image: "/patinete.webp",
      URL: "",
    },
    {
      id: 1,
      title: "Tuoutlet24h | Joyería de plata y oro",
      image: "/tuoutlet24h.webp",
      URL: "22",
    },
    {
      id: 2,
      title: "Pilaraguileradesign | Diseño de Interiores",
      image: "mediterranean.webp",
      URL: "22",
    },
    {
      id: 3,
      title: "Disfrutaaprendiendo | Blog de artículos",
      image: "disfrutaaprendiendo.png",
      URL: "22",
    },
    {
      id: 4,
      title: "Rosa Escalona | Galería de Arte",
      image: "rosa-escalona.webp",
      URL: "22",
    },
    {
      id: 5,
      title: "Terracottaorigen | Decoración Sostenible",
      image: "terracottaorigen.webp",
      URL: "22",
    },
  ];

  return (
    <article className="flex flex-col items-center bg-slate-100">
      <h3 className="mt-12 text-2xl font-bold italic">Diseños de páginas web</h3>
      <ul className="grid grid-cols-1  md:grid-cols-2 max-w-7xl m-auto gap-5 mt-12">
      {Pages.map(({ id, title, image, URL }) => (
          <li key={id} className="flex flex-col items-center font-bold italic"><img src={image}/>{title}</li>
        ))}
        </ul>
    </article>
  );
}
