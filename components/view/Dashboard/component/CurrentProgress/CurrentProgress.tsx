"use client"

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Progress } from "./component/Progress";
import { StatisticsChart } from "./component/Chart";

const CurrentProgress = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Card className="p-8 rounded-2xl shadow-md pb-12">
            <h3 className="text-2xl font-bold mt-4">My Current Progress</h3>
            <div className="py-4 px-20 flex items-center justify-center">
                <Progress setCurrentIndex={setCurrentIndex} />
            </div>
            <StatisticsChart currentIndex={currentIndex} />
        </Card>
    )
}

export default CurrentProgress;
