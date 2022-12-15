import {Table} from "flowbite-react"

function JobTableEntry(props) {
    return (
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <a href={`/jobs/${props.id}`}>{props.title}</a>
                </Table.Cell>
                <Table.Cell>
                    {props.team}
                </Table.Cell>
                <Table.Cell>
                    {props.status}
                </Table.Cell>
                <Table.Cell>
                    <a href={`mailto:${props.hiringManagerEmail}`}>{props.hiringManagerEmail}</a>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    );
}

export default JobTableEntry
