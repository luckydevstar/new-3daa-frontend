import { CurrentProgress, MenuBoard, UserProfile } from "./component";
import { LearnerList } from "./component/LearnerList";
import { Reports } from "./component/Reports";

const Dashboard = () => {
    return (
        <div className="bg-primaryMain">
            <div className="max-w-7xl mx-auto py-20 flex flex-col gap-8">
                <h2 className="text-white text-2xl font-semibold text-center mb-4">My Dashboard</h2>

                <div className="flex w-full gap-8">
                    <UserProfile />
                    <MenuBoard />
                </div>

                <CurrentProgress />
                <Reports />
                <LearnerList />
            </div> 
        </div>
    )
}

export default Dashboard;
