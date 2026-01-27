import { ExternalLink, Globe, Info } from "lucide-react"

const UserProfile = () => {
    return (
        <div className="rounded-md bg-white relative px-8 py-6 flex flex-col w-62">
            <a className="absolute right-0 top-0 underline text-primaryMain text-sm cursor-pointer" href="#">View</a>
            <h3 className="text-xl font-bold text-black">Your Profile</h3>

            <div className="flex items-center gap-4">
                <div className="border-3 border-white transform rotate-45 w-24 h-24 overflow-hidden rounded-xl shadow-xl">
                    <img
                        src={"/images/avatar/tutor.jpg"}
                        className="transform -rotate-45 scale-150 w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-black">John Turner</h3>
                    <div className="flex items-center gap-3">
                        <Info size={16} />
                        <span>Director, Architect, 3D Artist</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe size={16} />
                        <span>London, UK</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ExternalLink size={16} />
                        <span className="font-semibold">johnturnersvisuals.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
