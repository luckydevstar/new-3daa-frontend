import { DatePickerWithInput } from "@/components/partial"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AccountCreation = () => {
    return (
        <div className="flex flex-col items-center max-w-85 gap-4">
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl text-primaryMain text-left">Create an Account</h3>
                <p className="text-sm">
                    Create your account, then proceed with the checkout process. this will be your account that you log in with in September.
                </p>
            </div>

            <h4 className="text-base font-bold text-left w-full">Account Details</h4>

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
                <Button className="w-full bg-[#FFBD48] text-white h-11 rounded-sm hover:bg-primaryMain cursor-pointer mt-3">
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default AccountCreation;
