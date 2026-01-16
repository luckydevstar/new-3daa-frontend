import { DatePickerWithInput } from "@/components/partial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Signup = () => {
    return (
        <div
            className="flex items-center justify-center bg-primaryMain py-1"
            style={{minHeight: 'calc(100vh - 200px)'}}
        >
            <div className="flex flex-col items-center max-w-125 w-125 bg-white rounded-4xl shadow-sm px-20 py-10 gap-4">
                <div className="flex flex-col gap-2 items-center">
                    <img src={"/images/logo.png"} className="w-10 h-10" />

                    <h3 className="font-semibold text-lg text-lightDark">Login to Account</h3>
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <label className="text-lightDark text-sm">Email</label>
                    <Input
                        type="email"
                        className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                        placeholder="Email"
                    />
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <label className="text-lightDark text-sm">Password</label>
                    <Input
                        type="password"
                        className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                        placeholder="Password"
                    />
                    
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Button className="w-full bg-primaryMain text-white h-11 rounded-sm hover:bg-primaryMain cursor-pointer mt-3">
                        CONTINUE TO YOUR DASHBOARD
                    </Button>

                    <p className="text-center">
                        <span>Haven't got an account?</span>
                        <Link href={"/signup"} className="font-bold mx-1">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;