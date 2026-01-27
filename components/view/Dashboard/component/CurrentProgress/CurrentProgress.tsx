"use client"

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Progress } from "./component/Progress";
import { StatisticsChart } from "./component/Chart";
import { Button } from "@/components/ui/button";

const CurrentProgress = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Card className="p-8 rounded-2xl shadow-md pb-12 px-16">
            <h3 className="text-2xl font-bold mt-4 text-center">Your Progress</h3>
            <div className="py-4 px-20 flex items-center justify-center">
                <Progress setCurrentIndex={setCurrentIndex} />
            </div>
            <StatisticsChart currentIndex={currentIndex} />

            <div className="flex justify-center pt-6">
                <Button className="bg-primaryMain text-base font-semibold text-white rounded-sm px-6 py-6 cursor-pointer hover:bg-primaryMain">
                    CONTINUE LEARNING
                </Button>
            </div>
        </Card>
    )
}

export default CurrentProgress;
