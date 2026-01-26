import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { TopBar } from "./component/TopBar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { BookstandGroup } from "./component/BookstandGroup"

const Bookstand = () => {
    const LIST = [
        {
            coverImgURL: "/images/course-books/still-renders.png",
            progress: 20
        },
        {
            coverImgURL: "/images/course-books/360-virtual-tour.png",
            progress: 50
        },
        {
            coverImgURL: "/images/course-books/flythrough.png",
            progress: 40
        },
        {
            coverImgURL: "/images/course-books/simulations.png",
            progress: 90
        },
        {
            coverImgURL: "/images/course-books/implementing-ai.png",
            progress: 80
        },

    ]

    return (
        <div>
            <TopBar />
            <div className="py-3 px-16 border-b border-b-black/20 flex justify-between">
                <Tabs defaultValue="all">
                    <TabsList variant="line">
                        <TabsTrigger className="cursor-pointer" value="all">All</TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="level-1">Level 1</TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="level-2">Level 2</TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="level-3">Level 3</TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="level-4">Level 4</TabsTrigger>
                        <TabsTrigger className="cursor-pointer" value="level-5">Level 5</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="w-65 bg-[#78788029]">
                    <InputGroup className="w-full">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-20 flex flex-col gap-20">
                <BookstandGroup list={LIST} />
                <BookstandGroup list={LIST} />
            </div>
        </div>
    )
}

export default Bookstand;
