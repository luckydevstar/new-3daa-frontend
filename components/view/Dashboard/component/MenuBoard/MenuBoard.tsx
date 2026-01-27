import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AtSign, BellRing, BookOpen, Briefcase, ChartBar, Handshake, LayoutDashboard, MessageCircle, Newspaper, PieChart, Settings, ShoppingBag, Store, User, Users, Video } from "lucide-react"

const MenuBoard = () => {
    return (
        <div className="flex-1 flex items-center bg-white/50 justify-center gap-8 px-16 py-6 rounded-xl">
            <div className="flex flex-wrap gap-8">
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-[#FFFFFF]">
                        <User className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">My Profile</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                    <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-1.5 bg-[#ff0000] text-white rounded-full">7</Badge>
                    <Card className="w-16 h-16 rounded-lg border-0 p-3 shadow-md bg-[#FFFFFF]">
                        <MessageCircle className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Messages</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-primaryMain">
                        <Users className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Community</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-white">
                        <LayoutDashboard className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Bookstand</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-[#FFFFFF]">
                        <Video className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Videos</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-primaryMain">
                        <ChartBar className="w-full h-full text-white transform -rotate-90" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">My Progress</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-white">
                        <Handshake className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Friends</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-primaryMain">
                        <ShoppingBag className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Store</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-white">
                        <PieChart className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Reports</h2>
                </div>
            </div>
            <div className="bg-[#488AFF] rounded-md flex flex-col gap-4 px-8 py-6">
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                    <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-1.5 bg-[#ff0000] text-white rounded-full">9</Badge>
                    <Card className="w-16 h-16 rounded-lg border-0 p-3 shadow-md bg-[#c90303]">
                        <BellRing className="w-full h-full text-white" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Notifications</h2>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                    <Card className="w-16 h-16 rounded-lg border-0 p-2 shadow-md bg-[#FFFFFF]">
                        <BookOpen className="w-full h-full text-primaryMain" />
                    </Card>
                    <h2 className="text-center text-xs font-semibold text-blsck/70">Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default MenuBoard;
