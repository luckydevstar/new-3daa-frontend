"use client";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { PlayCircleIcon, Search } from "lucide-react";
import { TopBar } from "../Bookstand/component/TopBar";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { UnitGroup } from "./component/UnitGroup";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BookstandDetail = () => {
    const UNIT_LIST_1 = [
        {
            coverImgURL: "/images/unit-images/1-introduction-to-3daa.jpg",
            progress: 94,
            title: "1 Introduction to 3D Architectural Visualisations"
        },
        {
            coverImgURL: "/images/unit-images/2-3d-modelling-with-autodesk-3dsmax.png",
            progress: 0,
            title: "2 3D Modelling with Autodesk 3ds Max"
        },
        {
            coverImgURL: "/images/unit-images/3-camera-and-composition.jpg",
            progress: 0,
            title: "3 Camera and Composition"
        },
        {
            coverImgURL: "/images/unit-images/4-lighting-and-materials.png",
            progress: 0,
            title: "4 Lighting and Materials"
        },
        {
            coverImgURL: "/images/unit-images/5-3d-environments.jpg",
            progress: 0,
            title: "5 3D Environments"
        },
        {
            coverImgURL: "/images/unit-images/6-rendering-with-chaos-corona.jpg",
            progress: 0,
            title: "6 Rendering with Chaos Corona"
        },
    ]

    const UNIT_LIST_2 = [
        {
            coverImgURL: "/images/unit-images/1-introduction-to-3daa.jpg",
            progress: 94,
            title: "1 Introduction to 3D Architectural Visualisations"
        },
        {
            coverImgURL: "/images/unit-images/2-3d-modelling-with-autodesk-3dsmax.png",
            progress: 0,
            title: "2 3D Modelling with Autodesk 3ds Max"
        },
        {
            coverImgURL: "/images/unit-images/3-camera-and-composition.jpg",
            progress: 0,
            title: "3 Camera and Composition"
        },
        {
            coverImgURL: "",
            progress: 0,
            title: ""
        },
        {
            coverImgURL: "",
            progress: 0,
            title: ""
        },
        {
            coverImgURL: "",
            progress: 0,
            title: ""
        },
    ]

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <TopBar />
            <div className="flex justify-end py-3 px-16">
                <div className="w-65 bg-[#78788029]">
                    <InputGroup className="w-full">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-12">
                <div className="relative">
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="w-85">
                                <img src={"/images/course-books/still-renders.png"} className="transform scale-[1.3]" />
                            </div>
                            <Progress value={21} className="w-82" />
                        </div>

                        <Card className="rounded-r-md px-8 py-4 max-w-150 z-0 -mt-3 h-min border-gray-300 flex flex-col gap-0">
                            <h2 className="text-2xl font-bold text-black">Still Renders</h2>
                            <div className="flex gap-8 items-center py-4">
                                <div className="relative h-48">
                                    <img src={"/images/course-videos/course-video-cover-1.png"} className="h-full w-auto" />

                                    <div className="flex items-center justify-center bg-black/60 absolute left-0 top-0 z-10 h-full w-full">
                                        <PlayCircleIcon size={45} className="text-white cursor-pointer" />
                                    </div>
                                </div>

                                <img src={"/images/badges/badge-1.png"} className="h-42" />
                            </div> 

                            <div>
                                <h4 className="text-black text-lg font-bold">About</h4>
                                <p className="text-sm text-black">
                                    This self-paced online 3D still renders course takes you from beginner to professional level, teaching you how to create
                                    photorealistic still renders using Autodesk 3ds Max and Chaos Corona. Accessible from anywhere, covering the full workflow, 
                                    from modelling to advanced lighting, material,s and rendering.
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <a href="#" className="text-primaryMain font-semibold text-sm mt-5">Download full description</a>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full z-10 border-t-transparent border-r-transparent border-b-primaryMain border-l-transparent border-t-0 border-r-24 border-b-40 border-l-24 rounded-lg -mt-8" />
                </div>

                <div className="mt-12 mb-4 px-6 flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-black">Total Untis: 9</h4>
                    <div className="flex flex-col gap-12">
                        <UnitGroup list={UNIT_LIST_1} onClickUnit={() => setOpen(true)} />
                        <UnitGroup list={UNIT_LIST_2} />
                    </div>
                </div>
            </div>

            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogTitle></DialogTitle>
                <DialogContent className="px-8 py-8 min-w-200">
                    <div className="flex gap-8 items-center">
                        <div className="flex flex-col gap-2 shrink-0">
                            <img src={"/images/unit-images/1-introduction-to-3daa.jpg"} className="w-44 h-65 object-cover" />

                            <Button className="bg-primaryMain w-full text-white py-2 text-sm hover:bg-primaryMain cursor-pointer">Open Workbook</Button>
                            <Button className="bg-white w-full border-primaryMain border rounded-sm text-primaryMain py-2 text-sm hover:bg-white cursor-pointer">Specification PDF</Button>
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-xl font-bold mb-4">
                                Unit 1 <br />
                                Introduction to <br />
                                3D Architectural Visualisations
                            </h4>

                            <p className="text-xs text-lightDark">LARA Reference: 603/5303/X</p>
                            <p className="text-xs text-lightDark">Credits: 144</p>

                            <div className="mt-8">
                                <h2 className="text-lg font-bold text-black">About</h2>
                                <p className="text-base text-lightDark">
                                    This unit provides learners with a foundational understanding of the principles and techniques used in creating 3D visualisations of architectural designs. Introducing learners to the software, concepts, and skills necessary to communicate and present ideas effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default BookstandDetail;
