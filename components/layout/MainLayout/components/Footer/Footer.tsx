import { MAIN_BOTTOM_NAVIGATIONS } from "@/constants"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <div className="h-32 bg-white">
            <div className="max-w-7xl h-full mx-auto">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-4">
                        <img src={"/images/logo.png"} className="w-16 h-16" />
                        <h2 className="text-xl font-black text-primaryMain">
                            Architectural <br />
                            Academy
                        </h2>
                    </div>

                    <div className="flex items-center gap-5">
                    {
                        MAIN_BOTTOM_NAVIGATIONS.map((nav, index) => {
                            return (
                                <React.Fragment key={nav.url}>
                                    <Link href={nav.url} className="text-primaryMain font-semibold text-sm">
                                        {nav.name}
                                    </Link>

                                    {index !== MAIN_BOTTOM_NAVIGATIONS.length - 1 && (
                                        <div className="border-r border-primaryMain border-solid h-3" />
                                    )}
                                </React.Fragment>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
