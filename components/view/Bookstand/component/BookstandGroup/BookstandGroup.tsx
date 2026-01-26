import { Progress } from "@/components/ui/progress";

interface BookstandGroupProps {
    list: {
        coverImgURL: string;
        progress: number;
    }[];
}

const BookstandGroup = ({list}: BookstandGroupProps) => {
    return (
        <div className="relative w-full">
            <div className="flex gap-10 items-center w-full justify-center">
            {
                list.map((item, idx) => {
                    return (
                        <div className="flex flex-col gap-4 items-center justify-center cursor-pointer" key={idx} >
                            <div className="w-45">
                                <img src={item.coverImgURL} className="w-60 h-auto transform scale-[1.35]" />
                            </div>
                            <Progress value={item.progress} className="w-45" />
                        </div>
                    )
                })
            }
            </div>
            <div className="w-full border-t-transparent border-r-transparent border-b-primaryMain border-l-transparent border-t-0 border-r-24 border-b-40 border-l-24 rounded-lg -mt-8" />
        </div>
    )
}

export default BookstandGroup;
