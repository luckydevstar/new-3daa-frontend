import Image from "next/image";
import { AtSign, BellRing, BookOpen, Briefcase, Handshake, LayoutDashboard, MessageCircle, Newspaper, Settings, User } from "lucide-react";
import { Fragment } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Header = () => {
    return (
        <Fragment>
            <Image width={125} height={125} alt="logo" src="/images/logo.png" className="fixed top-2 left-[50vw] transform -translate-x-1/2 z-50 shadow-lg" />
            <div className="h-22.5 bg-white flex items-center justify-between px-10 sticky top-0 z-30" >
                <div className="w-10 h-10">
                    <img src={"/images/icons/icon-earth.png"} className="w-full h-full" />
                </div>
                <Popover>
                    <PopoverTrigger className="relative">
                        <div className="px-4 py-1.5 border border-black/50 rounded-md cursor-pointer hover:bg-black/5">
                            <Settings size={24} />
                        </div>
                        <div className="rounded-full bg-[#FF0000] absolute right-0 top-0 w-3.5 h-3.5 transform -translate-y-1/2 translate-x-1.25"></div>
                    </PopoverTrigger>
                    <PopoverContent side="bottom" align="end" className="w-100 px-6 py-6">
                        <h3 className="text-sm font-bold mb-4">App</h3>
                        <div className="flex flex-wrap gap-6 w-full justify-between">
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                                    <LayoutDashboard className="w-full h-full text-white" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Dashboard</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                                <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-1.5 bg-[#ff0000] text-white rounded-full">9</Badge>
                                <Card className="w-16 h-16 rounded-lg p-3 shadow-md bg-[#c90303]">
                                    <BellRing className="w-full h-full text-white" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Notifications</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer relative">
                                <Badge className="absolute top-0 right-0 tranform -translate-y-1/2 translate-x-1.5 bg-[#ff0000] text-white rounded-full">7</Badge>
                                <Card className="w-16 h-16 rounded-lg p-3 shadow-md bg-[#FFFFFF]">
                                    <MessageCircle className="w-full h-full text-[#76A0B5]" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Messages</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                                    <Handshake className="w-full h-full text-white" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Friends</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 w-full justify-between mt-6">
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                                    <Newspaper className="w-full h-full text-[#FF0000]" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">News</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                                    <BookOpen className="w-full h-full text-[#76A0B5]" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Learning</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                                    <User className="w-full h-full text-[#76A0B5]" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">My Profile</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                                    <AtSign className="w-full h-full text-white" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Community</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 w-full justify-start mt-6">
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#76A0B5]">
                                    <Briefcase className="w-full h-full text-white" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Jobs</h2>
                            </div>
                            <div className="flex flex-col justify-center gap-1 items-center cursor-pointer">
                                <Card className="w-16 h-16 rounded-lg p-2 shadow-md bg-[#FFFFFF]">
                                    <Settings className="w-full h-full text-[#76A0B5]" />
                                </Card>
                                <h2 className="text-center text-xs font-semibold text-blsck/70">Settings</h2>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Fragment>
    );
};

export default Header;
