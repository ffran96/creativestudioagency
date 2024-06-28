import React from "react";
import {stadistics} from "@/Data/stadistics"

export default function Stadistics() {
  return (
    <article className="absolute pt-16 bg-slate-100 w-full">
      <div className="flex  justify-center max-w-7xl m-auto">
        <div className="relative w-[1380px] h-[254px] rounded-xl overflow-hidden ">
          <img
            className="absolute object-cover w-full h-full "
            src="/abs_bg_3.jpg"
          />
          <div className=" flex justify-around bg-gradient-to-r from-[#0692e3] via-violet-600 to-[#9b51e0] size-full  opacity-60 ">
            {stadistics.map(({ id, icon, value, description }) => (
              <div key={id} className="flex md:flex-col justify-center gap-5 items-center z-10  ">
                <div className="text-white font-extrabold text-3xl">{icon}</ div>
                <div className="text-white font-extrabold text-3xl">{value}</ div>
                <div className="text-white font-extrabold text-3xl">{description}</ div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
