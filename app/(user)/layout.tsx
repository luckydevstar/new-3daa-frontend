import { PropsWithChildren } from "react";

interface LayourProps {}

const Layout = ({children}: PropsWithChildren<LayourProps>) => {
    return (
        <div className="bg-amber-100">
            {children}
        </div>
    )
}

export default Layout;