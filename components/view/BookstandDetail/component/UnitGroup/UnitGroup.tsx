import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BookstandGroupProps {
    list: {
        coverImgURL: string;
        progress: number;
        title: string;
    }[];
    onClickUnit?: () => void;
}

const UnitGroup = ({list, onClickUnit}: BookstandGroupProps) => {
    return (
        <div className="relative w-full">
            <div className="flex gap-3 items-center w-full justify-between px-16">
            {
                list.map((item, idx) => {
                    return (
                        item.coverImgURL ?
                        <div className="flex shrink-0 flex-col gap-4 cursor-pointer w-42 h-64 shadow-md rounded-md bg-white" key={idx} onClick={onClickUnit} >
                            <div className="w-full h-43">
                                <img src={item.coverImgURL} className="w-full h-full object-cover rounded-t-md" />
                            </div>
                            <div className="px-3 pb-3 -mt-10 flex-1">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{backgroundColor: item.progress ? "#279634" : "#488AFF"}}>
                                    <span className="text-white text-sm">{item.progress}</span>
                                    <span className="text-xs text-white">%</span>
                                </div>
                                <p className="font-semibold text-xs mt-2">{item.title}</p>
                            </div>
                        </div>
                        :
                        <div className="w-42" key={idx} />
                    )
                })
            }
            </div>
            <div className="w-full border-t-transparent border-r-transparent border-b-primaryMain border-l-transparent border-t-0 border-r-24 border-b-40 border-l-24 rounded-lg -mt-6" />
        </div>
    )
}

export default UnitGroup;
