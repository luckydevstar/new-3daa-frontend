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

                    <h3 className="font-bold text-3xl">
                        <span className="text-black pr-2">Join</span>
                        <span className="text-primaryMain">3DAA</span>
                    </h3>

                    <h3 className="font-semibold text-lg text-lightDark">Create an Account</h3>
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col gap-1 flex-1">
                        <label className="text-lightDark text-sm">First Name</label>
                        <Input
                            className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <label className="text-lightDark text-sm">Surname</label>
                        <Input
                            className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                            placeholder="Surname"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1 w-full relative">
                    <label className="text-lightDark text-sm">Email</label>
                    <Input
                        type="email"
                        className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                        placeholder="Email"
                    />
                    <Button variant={"link"} className="text-primaryMain underline cursor-pointer absolute right-0 -bottom-8 text-xs">Verify</Button> 
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <label className="text-lightDark text-sm">Password</label>
                    <Input
                        type="password"
                        className="h-11 px-2 py-2 font-sm text-black rounded-sm"
                        placeholder="Password"
                    />
                    
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <label className="text-lightDark text-sm">Birthdate</label>
                    <DatePickerWithInput className="h-11" />
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Button className="w-full bg-primaryMain text-white h-11 rounded-sm hover:bg-primaryMain cursor-pointer mt-3">
                        CONTINUE TO YOUR DASHBOARD
                    </Button>

                    <p className="text-center">
                        <span>By continuing, you agree to 3daa's</span> <br/>
                        <Link href={"/terms-of-service"} className="font-bold mx-1">Terms of Service</Link>
                        <span>and acknowledge you've read our</span>
                        <Link href={"/privacy-policy"} className="font-bold mx-1">Privacy Policy.</Link>
                        <Link href={"/terms-of-service"} className="font-bold">Notice at collecdtion</Link>
                    </p>

                    <p className="text-center">
                        <span>Already a memeber?</span>
                        <Link href={"/login"} className="font-bold mx-1">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;