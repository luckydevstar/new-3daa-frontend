import { MAIN_NAVIGATIONS } from "@/constants"
import Link from "next/link"

const Header = () => {
    return (
        <div className="flex items-center h-20 px-14">
            <Link href={"/"} className="flex-1 flex items-center gap-2">
                <img
                    src={"/images/logo.png"}
                    className="w-8 h-8"
                    />
                <h4 className="font-bold text-primaryMain text-lg">
                    Architectural Academy
                </h4>
            </Link>

            <div className="flex items-center gap-8">
            {
                MAIN_NAVIGATIONS.map((nav) => {
                    return (
                        <Link
                            href={nav.url}
                            className="font-semibold text-black hover:cursor-pointer"
                            key={nav.url}
                        >
                            {nav.name}
                        </Link>
                    )
                })
            }
            </div>

            <div className="flex-1 flex items-center gap-2 justify-end">
                <Link href={"/login"}>
                    <button className="text-white bg-primaryMain text-sm font-bold rounded-sm px-4 py-1.5 cursor-pointer">
                        Login
                    </button>
                </Link>
                <Link href={"/sign-up"}>
                    <button className="text-black bg-secondaryMain text-sm font-bold rounded-sm px-4 py-1.5 cursor-pointer">
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header;
