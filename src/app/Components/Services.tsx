import { ServicesItems } from "@/Data/ServicesItems";
import React from "react";

export default function Services() {
  return (
    <article className="flex flex-col gap-5 font-medium bg-slate-100">
      <h3 className="mt-16 uppercase flex justify-center text-[#0045FF]">
        --- Nuestros servicios ---
      </h3>
      <h2 className="flex justify-center text-6xl font-bold text-center">
        Agencia de marketing digital
      </h2>
      <p className="flex justify-center text-center">
        Transforma tu presencia online con nuestra Agencia de Marketing Digital
        en la Comunidad Valenciana.
      </p>

      <ul className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-5 mt-16">
        {ServicesItems.map(({ id, service, icon, description }) => (
          <li
            className="group hover:bg-gradient-to-t from-[#9b51e0] via-violet-600 to-blue-500 flex flex-col justify-center items-center bg-white w-96 h-[300px] rounded-3xl"
            key={id}
          >
            <div className=" flex items-center justify-center text-white size-20 bg-gradient-to-t from-[#9b51e0] via-violet-600 to-blue-500 rounded-full group-hover:bg-none group-hover:bg-white group-hover:text-black">
              O
              <img src={icon} />
            </div>
            <h3 className="group-hover:text-white mt-5 text-2xl font-bold">
              {service}
            </h3>
            <p className="group-hover:text-white mt-5 text-center px-8">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
