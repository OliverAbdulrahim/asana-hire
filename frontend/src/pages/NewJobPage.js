import BreadcrumbNav from "../components/ui/BreadcrumbNav";
import {Button, Card, Label, TextInput} from "flowbite-react";

function NewJobPage() {
    return (
        <div>
            <BreadcrumbNav path={
                new Map([
                    ["Home", "/"],
                    ["View jobs", "/jobs"],
                    ["Create a job", "/jobs/new"]
                ])
            }/>
            <Card>
                <div className="flex justify-between">
                    <h5 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Create a job flow
                    </h5>
                </div>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    Use the form below to instantiate a new position on Asana.
                </p>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="jobTitle"
                            value="Job title"
                        />
                    </div>
                    <TextInput
                        id="title"
                        type="text"
                        required={true}
                        helperText="Enter this in Title Case format. Don't include any dates, just the title itself.
                        We'll use this to title the projects we generate."
                    />
                    <div className="mt-4 mb-2 block">
                        <Label
                            htmlFor="jobTitle"
                            value="Hiring manager email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        required={true}
                        helperText="Enter the hiring manager's email. We'll use this to streamline your communication
                        with them."
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Button href="/jobs/new">Create</Button>
                </div>
            </Card>
        </div>
    );
}

export default NewJobPage
