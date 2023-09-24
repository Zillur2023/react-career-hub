import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }
    return (
        <div>
            
            <div className="flex flex-col md:flex-row">
                <div className="border-2 w-8/12">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>{job.job_title}</h2>
                    <h2>{job.company_name}</h2>
                </div>
                <div className="border-2 w-4/12">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary capitalize">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;