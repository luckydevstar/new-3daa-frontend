import UserLayout from "@/components/layout/UserLayout/UserLayout";
import { PropsWithChildren } from "react";

interface LayourProps {}

const Layout = ({children}: PropsWithChildren<LayourProps>) => {
    return (
        <UserLayout>
            {children}
        </UserLayout>
    )
}

export default Layout;