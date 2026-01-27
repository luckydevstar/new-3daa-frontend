import { ProfileLayout } from "@/components/layout/ProfileLayout"
import { PropsWithChildren } from "react"

const Layout = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <div className="h-40 bg-primaryMain" />
            <ProfileLayout>
                {children}
            </ProfileLayout>
        </>
    )
}

export default Layout;