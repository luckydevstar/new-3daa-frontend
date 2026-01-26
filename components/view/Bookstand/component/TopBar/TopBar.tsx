import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const TopBar = () => {
    return (
        <div className="h-40 bg-primaryMain flex justify-between items-center px-13">
            <div className="flex items-center gap-6">
                <Button className="bg-white rounded-full text-black hover:bg-white cursor-pointer" size={"icon"}>
                    <ArrowLeft />
                </Button>

                <div className="flex flex-col">
                    <h3 className="text-white text-4xl font-bold">Bookstand</h3>
                    <h4 className="text-black text-3xl font-bold">Courses for you</h4>
                </div>
            </div>

            <Button className="bg-white text-black px-6 shadow-sm cursor-pointer hover:bg-white">Filter</Button>
        </div>
    )
}

export default TopBar;
