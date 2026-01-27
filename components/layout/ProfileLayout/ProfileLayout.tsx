import { PropsWithChildren, Suspense } from "react";
import { Nav, UserInfo } from "./component";

const ProfileLayout = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <Nav>
                <Suspense fallback={<div className="h-9 w-65" />} >
                    <div className="h-9" />
                </Suspense>
            </Nav>
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex gap-8">
                    <UserInfo />
                    <>
                        {children}
                    </>
                </div>
            </div>
        </>
    )
}

export default ProfileLayout;
