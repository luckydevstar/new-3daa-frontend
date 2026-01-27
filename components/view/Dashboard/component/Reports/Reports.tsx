import { TopProgrammes, TotalLearners } from "./component"

const Reports = () => {
    return (
        <div className="bg-white flex gap-4 flex-col rounded-xl px-16 pb-12">
            <h2 className="text-2xl font-bold text-center text-black mt-6 mb-3">Snapshot Reportsd</h2>
            <div className="flex gap-8 rounded-xl">
                <div className="shadow-xl rounded-xl">
                    <TotalLearners completed={1238} inProgress={264} />
                </div>
                <div className="shadow-xl rounded-xl flex-1 px-16">
                    <TopProgrammes />
                </div>
            </div>
        </div>
    )
}

export default Reports;
