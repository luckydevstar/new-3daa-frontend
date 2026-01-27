import { TopProgrammes, TotalLearners } from "./component"

const Reports = () => {
    return (
        <div className="bg-whtie flex gap-8">
            <TotalLearners completed={1238} inProgress={264} />
            <TopProgrammes />
        </div>
    )
}

export default Reports;
