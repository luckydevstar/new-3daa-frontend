"use client";

/**
 * @author: @dorianbaffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  coverImg: string;
  isComingSoon?: boolean;
  duration: string;
  type: string;
}

export default function CourseCard({
  title,
  subtitle,
  description,
  coverImg,
  type,
  duration,
  isComingSoon = false,
}: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-96 mx-auto perspective-[1000px] rounded-sm">
      <div className={`relative w-full h-full shadow-md transition-transform duration-500 rounded-sm transform-3d ${isFlipped ? 'transform-[rotateY(180deg)]' : ''}`}>
        {
          isComingSoon && (
            <div className="absolute w-full h-full bg-white/50 top-0 left-0 overflow-hidden z-20">
              <div className="absolute -right-10 top-6 text-center text-xs text-white bg-primaryMain py-2 transform rotate-45 w-40">
                COMING SOON
              </div>
            </div>
          )
        }
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-md bg-white group overflow-hidden group">
         {
            !isComingSoon && (
              <Button className="top-2 right-2 text-white absolute z-10 cursor-pointer" size="icon" onClick={() => setIsFlipped(!isFlipped)}>
                <Repeat2 className="text-white" />
              </Button>
            )
          }

          <div className="w-full h-full absolute">
            <img src={coverImg} className="w-full h-full object-cover rounded-sm" />
          </div>

          <div className="w-full px-6 z-10 absolute bottom-0 bg-white rounded-b-sm flex flex-col gap-2 pb-6 -mb-25 group-hover:mb-0 transition-all duration-150">
            <img className="w-14 h-14 border-2 border-white rounded-full -mt-7" src={"/images/logo.png"} />

            <div className="flex flex-col mb-2">
              <h3 className="text-xl font-bold text-black">{title}</h3>
              <h3 className="text-xl font-bold text-primaryMain">{subtitle}</h3>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xs font-bold text-black">{type}</h4>
              <h4 className="text-xs font-bold text-black">{duration}</h4>
            </div>

            <div className="w-full">
              <Button className="bg-primaryMain rounded-sm text-white w-full mt-1 hover:bg-primaryMain cursor-pointer">Find out more</Button>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-sm transform-[rotateY(180deg)] shadow-md pb-6">
          <Button className="text-white cursor-pointer absolute top-2 right-2" size="icon" onClick={() => setIsFlipped(!isFlipped)}>
            <Repeat2 className="text-white" />
          </Button>

          <div className="pt-12 w-full h-full flex flex-col gap-2 px-6">
            <h4 className="text-sm font-bold text-black">About</h4>
            <div className="flex-1 overflow-auto">
              <p className="text-sm leading-5">
                {description}
              </p>
            </div>
            <div className="w-full flex gap-2">
              <Button className="bg-primaryMain rounded-sm text-white w-full mt-1 hover:bg-primaryMain cursor-pointer flex-1">Enroll now</Button>
              <Button className="bg-[#22B033] rounded-sm text-white w-full mt-1 hover:bg-primaryMain cursor-pointer flex-1">Get funding</Button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
