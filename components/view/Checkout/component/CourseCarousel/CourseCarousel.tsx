"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react";

const CourseCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="w-full h-120 bg-[#D0D1D2]" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-120 bg-[#D0D1D2]" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-120 bg-[#D0D1D2]" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-120 bg-[#D0D1D2]" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Carousel className="w-full mt-4">
                <CarouselContent className="w-full flex">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/4">
                            <div className="bg-[#D0D1D2] h-36">
                            </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default CourseCarousel;
