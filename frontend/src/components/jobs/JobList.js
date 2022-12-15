import {Button, Card, Table} from "flowbite-react"
import JobTableEntry from "./JobTableEntry";

function JobList(props) {
    return (
        <div>
            <Card>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Job title
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Team
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Hiring manager
                        </Table.HeadCell>
                    </Table.Head>
                    {props.jobs.map((job) =>
                        <JobTableEntry
                            key={job.id}
                            id={job.id}
                            title={job.title}
                            originalSourceId={job.originalSourceId}
                            managerSourceId={job.managerSourceId}
                            status={job.status}
                            team={job.team}
                            hiringManagerEmail={job.hiringManagerEmail}
                            madeHire={job.madeHire}
                        />
                    )}
                </Table>
                <div className="flex flex-col items-center">
                    <Button href="/jobs/new">Create a new job</Button>
                </div>
            </Card>
        </div>
    );
}

export default JobList
