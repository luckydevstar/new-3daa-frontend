import { ExternalLink, Globe, Info } from "lucide-react"

const UserProfile = () => {
    return (
        <div className="rounded-xl bg-white relative px-6 py-4 flex flex-col w-86 gap-4">
            <a className="absolute right-4 top-3 underline text-primaryMain text-sm cursor-pointer" href="#">View</a>
            <h3 className="text-xl font-bold text-black text-center mb-4">Your Profile</h3>

            <div className="flex items-center gap-4">
                <div className="border-3 border-white w-20 h-20 rounded-md shadow-xl">
                    <img
                        src={"/images/avatar/boy.jpg"}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl font-bold text-black pb-2">John Turner</h3>
                    <div className="flex items-center gap-1">
                        <Info size={16} />
                        <span className="text-sm">Director, Architect, 3D Artist</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Globe size={16} />
                        <span className="text-sm">London, UK</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ExternalLink size={16} />
                        <span className="font-semibold text-sm">johnturnersvisuals.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
