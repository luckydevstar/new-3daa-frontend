"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const CourseUnits = () => {
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
        <div className="max-w-7xl mx-auto py-12">
            <div className="flex flex-col">
                <h2 className="text-6xl font-bold">
                    <span className="text-black">Course </span>
                    <span className="text-primaryMain">Units</span>
                </h2>
                <p className="text-lg text-black mt-6 max-w-100">
                    Work you way through our course at your own pace, in your own time... Become a pro
                </p>
            </div>

            <div className="grid grid-cols-2 gap-20 items-center">
                <div className="col-span-1 flex flex-col gap-12">
                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-primaryMain flex items-center justify-center p-5 shrink-0">
                            <img src="/images/icons/icon-person.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                1. Introduction to 3D Architectural Visualisations
                            </h4>
                            <p className="text-black text-base">
                                Intro to the principles, software, and skills surrounding 3D Architectural Visualisations.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-[#FFBD48] flex items-center justify-center p-5">
                            <img src="/images/icons/icon-layer.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                2. 3D Modelling with Autodesk 3ds Max
                            </h4>
                            <p className="text-black text-base">
                                3D model basic to complex objects and scenes with 3ds Max.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-primaryMain flex items-center justify-center p-5 shrink-0">
                            <img src="/images/icons/icon-camera.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                3. Camera and Composition
                            </h4>
                            <p className="text-black text-base">
                                Set up cameras and understand composition
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-primaryMain flex items-center justify-center p-5 shrink-0">
                            <img src="/images/icons/icon-light.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                4. Lighting and Materials
                            </h4>
                            <p className="text-black text-base">
                                Create and apply lighting and materials with realism.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-primaryMain flex items-center justify-center p-5 shrink-0">
                            <img src="/images/icons/icon-gear.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                5. 3D Environments
                            </h4>
                            <p className="text-black text-base">
                                Set up realistic 3D environments.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="w-19 h-19 rounded-full bg-primaryMain flex items-center justify-center p-5 shrink-0">
                            <img src="/images/icons/icon-gear.png" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-black">
                                6. Rendering with Chaos Corona
                            </h4>
                            <p className="text-black text-base">
                                Rendering final, full quality 3D seenes for photorealistics 3D Architectural Visualisations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    1. Introduction to 3D architectural Visualisations
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    2. 3D Modelling with Autodesk 3ds Max
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    3. Camera and Composition
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    4. Lighting and Materials
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    5. 3D Environments
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <h3 className="text-center font-semibold text-primaryMain mb-3">
                                    6. Rendering with Chaos Corona
                                </h3>
                                <img src={"/images/works/work-sample-3.png"} className="w-full h-auto" />
                                <img src={"/images/works/work-sample-4.png"} className="w-full h-auto" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CourseUnits;
