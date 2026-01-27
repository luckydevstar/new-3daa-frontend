import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AtSign, BellRing, BookOpen, Briefcase, Handshake, LayoutDashboard, MessageCircle, Newspaper, Settings, User } from "lucide-react"

const MenuBoard = () => {
    return (
        <div className="flex-1 flex items-center bg-white/50">
            <div className="">
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                        <User className="w-full h-full text-[#76A0B5]" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">My Profile</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                    <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-[6px] bg-[#ff0000] text-white rounded-full">7</Badge>
                    <Card className="w-16 h-16 rounded-lg p-3 shadow-md bg-[#FFFFFF]">
                        <MessageCircle className="w-full h-full text-[#76A0B5]" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Messages</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                        <AtSign className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Community</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                        <LayoutDashboard className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Bookstand</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                        <Newspaper className="w-full h-full text-[#FF0000]" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Videos</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                        <LayoutDashboard className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">My Progress</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                        <Handshake className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Friends</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                        <LayoutDashboard className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Store</h2>
                </div>
            </div>
            <div className="bg-[#488AFF] rounded-md flex flex-col gap-4">
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                    <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-1.5 bg-[#ff0000] text-white rounded-full">9</Badge>
                    <Card className="w-16 h-16 rounded-lg p-3 shadow-md bg-[#c90303]">
                        <BellRing className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Notifications</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                        <BookOpen className="w-full h-full text-[#76A0B5]" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default MenuBoard;
