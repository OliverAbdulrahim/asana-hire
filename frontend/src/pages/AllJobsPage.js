import JobList from "../components/jobs/JobList";
import {useState} from "react";
import BreadcrumbNav from "../components/ui/BreadcrumbNav";
import {getJsonPromise, loadingSpinner} from "../utils/PageUtils";
import {useEffect} from "react";

function AllJobsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedJobs, setLoadedJobs] = useState([]);

    useEffect(() => {
        getJsonPromise("http://localhost:8080/jobs")
            .then((data) => {
                setIsLoading(false)
                setLoadedJobs(data)
            });
    }, []);

    if (isLoading) {
        return loadingSpinner();
    } else {
        return (
            <div>
                <BreadcrumbNav path={
                    new Map([
                        ["Home", "/"],
                        ["View jobs", "/jobs"]
                    ])
                }/>
                <JobList jobs={loadedJobs}/>
            </div>
        )
    }
}

export default AllJobsPage
