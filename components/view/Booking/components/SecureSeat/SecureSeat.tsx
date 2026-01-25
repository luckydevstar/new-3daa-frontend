import { Button } from "@/components/ui/button"

const SecureSeat = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-24 flex justify-center flex-col items-center">
                <h1 className="text-6xl font-bold text-center">
                    <span className="text-black">Secure a Seat</span> <br />
                    <span className="text-primaryMain">Available Now</span>
                </h1>
                <p className="text-center max-w-2xl text-lg mt-6">
                    Secure your seat on our first still renderings course as well as gaining access to our community platform This September
                </p>

                <div className="flex gap-8 items-stretch mt-8">
                    <div className="max-w-96 rounded-md shadow-md">
                        <div className="h-52 rounded-md">
                            <img src={"/images/courses/course-sample.png"} className="w-full h-full object-cover rounded-t-md" />
                        </div>

                        <div className="flex flex-col px-6 pt-3 py-6">
                            <h1 className="text-2xl font-bold">
                                Still Renders <br />
                                Training Programme <br />
                                <span className="text-primaryMain">Book a Seat now</span>
                            </h1>

                            <p className="text-base text-mediumDark">
                                Learn at your own paxe - 6 Units - from scratch to expert level
                            </p>

                            <div className="flex items-center">
                                <span className="font-bold text-base mr-1">£3,000</span>
                                <span className="text-xs text-mediumDark">
                                    {`(Opt to pay in installments with`}
                                </span>
                                <img src={"/images/klarna.png"} className="w-16 h-auto -mx-2" />
                                <span className="text-xs text-mediumDark">
                                    {`)`}
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-mediumDark">
                                    Software:
                                </span>
                                <div className="flex gap-2 mt-1 mb-2">
                                    <img src={"/images/3dsmax.png"} className="h-10 w-auto" />
                                    <img src={"/images/corona.png"} className="h-10 w-auto" />
                                </div>
                            </div>

                            <Button className="bg-primaryMain w-full text-base font-semibold text-white">Enrol now</Button>
                        </div>
                    </div>

                    <div className="max-w-96 rounded-md shadow-md">
                        <div className="h-52">
                            <img src={"/images/finance.png"} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col px-6 pt-3 py-6">
                            <h1 className="text-2xl font-bold">
                                Student finance <br />
                                <span className="text-[#22B133]">Apply today</span>
                            </h1>

                            <p className="text-base text-mediumDark mt-2 mb-4">
                                First complete our application.
                                Once submitted, we will review your application, then contact you to let you know whether you are eligible or not.
                            </p>
                            <p  className="text-base text-mediumDark mb-4">
                                Start your course without the financial stress. <span className="text-black font-semibold">Check if you are eligible.</span>
                            </p>
                            <Button className="bg-[#22B133] w-full text-base font-semibold text-white">Apply today</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecureSeat;
