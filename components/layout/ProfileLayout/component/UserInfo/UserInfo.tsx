import { Button } from "@/components/ui/button";
import { CheckSquare, CirclePlay, CirclePlus, ExternalLink, Globe, Info, Mail } from "lucide-react";

const USER_INFO = {
    name: "Simon Sample",
    role: "Director, Architect, 3D Artist",
    location: "London, UK",
    website: "johnturnervisuals.com",
}

const UserInfo = () => {
    return (
        <div className="relative px-4 py-7 w-80 shrink-0 rounded-2xl shadow-md bg-white h-max">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                        <Info size={16} />
                        <span>{USER_INFO.role}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe size={16} />
                        <span>{USER_INFO.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ExternalLink size={16} />
                        <span className="font-semibold">{USER_INFO.website}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 pb-2">
                    <Button className="w-full bg-primaryMain hover:bg-primaryMain cursor-pointer py-2 text-white">
                        <CirclePlus size={16} />
                        <span>Add Friend</span>
                    </Button>
                    <Button className="w-full bg-[#DEE8FF] hover:bg-[#DEE8FF] cursor-pointer py-2 text-primaryMain">
                        <Mail size={16} />
                        <span>Message</span>
                    </Button>
                </div>
                <div className="w-full relative">
                    <img src="/images/videos/video-cover.jpg" className="w-full h-auto rounded-sm" />
                    <div className="absolute top-0 w-full h-full hover:bg-black/20 transition duration-75 cursor-pointer flex items-center justify-center">
                        <CirclePlay size={56}  className="text-white" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <img src={"/images//cards/3daa-member-card.png"} className="w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default UserInfo;