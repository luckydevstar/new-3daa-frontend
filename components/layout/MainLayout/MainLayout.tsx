import { PropsWithChildren } from "react"
import { MainFooter, MainHeader } from "./components"

interface MainLayoutProps {

}

const MainLayout = ({ children }: PropsWithChildren<MainLayoutProps>) => {
    return (
        <div>
            <MainHeader />
            {children}
            <MainFooter />
        </div>
    )
}

export default MainLayout;
