import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Payment = () => {
    return (
        <div>
            <div className="flex flex-col max-w-85 gap-4">
                <div className="flex justify-between">
                    <h2 className="font-bold text-primaryMain text-[28px] leading-7">
                        Confirm your purchase
                    </h2>

                    <div className="border-l h-min pl-4 border-lightDark">
                        <span className="text-2xl text-primaryMain">£3,000.</span>
                        <span className="text-sm text-primaryMain">00</span>
                    </div>
                </div>

                <p className="text-xs">
                Please select your payment option and confirm your purchase. You'll receive a confirmation email shortly, and we'll continue to be in touch leading up to the course opening.
                </p>
                
                <div className="w-full">
                    <label className="text-xs font-bold">Payment method</label>

                    <div className="flex gap-4 items-center justify-between mt-4 w-full">
                        <img src={"/images/cards/klarna.png"} className="w-auto h-11" />
                        <img src={"/images/cards/paypal.png"} className="w-auto h-11" />
                        <img src={"/images/cards/card.png"} className="w-auto h-11" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold">Name of account holder</label>
                    <Input
                        className="w-full text-xs h-10"
                        placeholder="Name of account holder"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold">Card number</label>
                    <Input
                        className="w-full text-xs h-10"
                        placeholder="Card Number"
                    />
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-xs font-bold">Sort code</label>
                        <Input
                            className="w-full text-xs h-10"
                            placeholder="Sort code"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-xs font-bold">CVC</label>
                        <Input
                            className="w-full text-xs h-10"
                            placeholder="CVC"
                        />
                    </div>
                </div>
            </div>

            <Button
                className="w-full h-12 text-sm font-bold bg-primaryMain text-white mt-6"
            >
                Confirm purchase
            </Button>
        </div>
    )
}

export default Payment;
