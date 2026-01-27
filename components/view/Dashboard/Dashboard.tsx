import { CurrentProgress, MenuBoard, UserProfile } from "./component";
import { Reports } from "./component/Reports";

const Dashboard = () => {
    return (
        <div className="bg-primaryMain">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-xl">My Dashboard</h2>

                <div className="flex w-full gap-16">
                    <UserProfile />
                    <MenuBoard />
                </div>

                <CurrentProgress />
                <Reports />
            </div> 
        </div>
    )
}

export default Dashboard;
