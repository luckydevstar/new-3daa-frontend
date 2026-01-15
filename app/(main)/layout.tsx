import { MainLayout } from "@/components/layout/MainLayout"
import { PropsWithChildren } from "react"

interface LayoutProps {}

const Layout = ({children}: PropsWithChildren<LayoutProps>) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}

export default Layout;
