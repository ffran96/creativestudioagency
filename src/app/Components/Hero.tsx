'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { HeroItem } from '@/Data/HeroItems'

export default function Hero() {
  return (
    <Carousel>
      <CarouselContent>
        {HeroItem.map(({ id, image, title, slogan, subtitle }) => (
          <CarouselItem key={id} className="flex bg-cover bg-center h-svh w-svw relative">
            <img className='absolute object-cover w-full mix-blend-overlay h-full' src={image} />
            <div className='bg-gradient-to-r from-[#0692e3] via-violet-600 to-[#9b51e0] size-full absolute opacity-60'></div>
            <div className='flex flex-col gap-5 max-w-4xl m-auto z-10 '>
              <h1 className='uppercase text-xl font-semibold text-white'>{title}</h1>
              <h2 className='text-7xl font-bold text-white leading-snug'>{slogan}</h2>
              <p className='text-white font-semibold text-lg'>{subtitle}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden lg:inline-flex absolute bottom-0 left-20 size-14 hover:bg-[#0692e3] hover:border-[#0692e3] hover:text-gray-50' />
      <CarouselNext className='hidden lg:inline-flex absolute bottom-0 right-20 size-14 hover:bg-[#0692e3] hover:border-[#0692e3] hover:text-gray-50' />
    </Carousel>
  )
}

/* bg-[url('/photo-laptop-with-cool-wallpaper-ambiance_568301-918.jpg')] */
/* background-image: linear-gradient(90deg, #0045FF 0%, #BD29F2 100%); */
/* bg-gradient-to-r from-[#0692e3] to-[#9b51e0] */