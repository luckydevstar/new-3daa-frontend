import { CourseCarousel } from "./component/CourseCarousel";
import { AccountCreation } from "./component/AccountCreation";
import { Button } from "@/components/ui/button";
import Payment from "./component/Payment/Payment";

const Checkout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col py-20">
                <h2 className="text-6xl font-bold text-center">
                    Still Renders Training Programme <br />
                    <span className="text-primaryMain">
                        Apply Now
                    </span>
                </h2>

                <p className="text-lg text-center my-6">
                    Apply now and get our online still renders training programme fully funded.
                </p>

                <div className="grid grid-cols-2 items-center">
                    <div className="col-span-1">
                        <CourseCarousel />
                    </div>
                    <div className="col-span-1 flex justify-center">
                        {/* <AccountCreation /> */}
                        <Payment />
                    </div>
                </div>

                <div className="flex justify-end w-full mt-12">
                    <div className="flex gap-4">
                        <Button className="bg-blue-500 rounded-md px-4 py-1">LIVE CHAT</Button>

                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Chat with AppQual</h4>
                            <p className="text-sm">Help and advice available 24 hours a day, 7 days a week</p>
                            <p className="text-xs italic font-semibold">Please note: Live Chat is available in English only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
