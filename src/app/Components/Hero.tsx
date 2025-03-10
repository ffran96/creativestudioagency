"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroItem } from "@/Data/HeroItems";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {HeroItem.map(({ id, image, title, slogan, subtitle }) => (
          <CarouselItem key={id} className="flex h-svh  w-svw relative">
            <video autoPlay playsInline preload="auto" loop muted className="absolute object-cover w-full h-full" src={image} />
            <div className="bg-gradient-to-r from-[#064ce3] to-[#9b51e0] size-full absolute opacity-60"></div>
            <div className="flex flex-col gap-5 md:max-w-4xl m-auto z-10 max-w-80">
              <h1 className="uppercase text-md lg:text-xl font-semibold text-white">
                {title}
              </h1>
              <h2 className="text-lg lg:text-7xl font-bold text-white leading-snug">
                {slogan}
              </h2>
              <p className="text-white font-semibold text:xs lg:text-lg">
                {subtitle}
              </p>
              <div className="flex bg-white w-44 h-12 rounded-lg items-center justify-center font-medium text-[#0620e3] cursor-pointer hover:bg-gradient-to-r from-[#0692e3] via-violet-600 to-[#9b51e0] hover:text-white">
                Pide presupuesto {<ArrowRight className="h-4 w-4 ml-1" />}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:inline-flex absolute bottom-0 left-20 size-14 hover:bg-[#0692e3] hover:border-[#0692e3] hover:text-gray-50" />
      <CarouselNext className="hidden lg:inline-flex absolute bottom-0 right-20 size-14 hover:bg-[#0692e3] hover:border-[#0692e3] hover:text-gray-50" />
    </Carousel>
  );
}
