import { PropsWithChildren } from "react"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"

interface UserLayout {

}

const UserLayout = ({children}: PropsWithChildren<UserLayout>) => {
    return (
        <div className="bg-[#fafafa]">
        <Header />
        {children}
        <Footer />
        </div>
    )
}

export default UserLayout;