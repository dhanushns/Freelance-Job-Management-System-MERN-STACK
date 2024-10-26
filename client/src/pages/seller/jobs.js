import React, { useState, useEffect } from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';

function Jobs() {
    const navigate = useNavigate();
    const [jobs, loadJobs] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
            fetch('http://localhost:8000/seller/get-job-post',{
                method:"GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    loadJobs(data);
                });
        }, []);

    const submitForm = async (e)=>{
        e.preventDefault();
        try{
            const token = localStorage.getItem("token");
            const jobId = e.target.id;
            document.getElementById("job"+e.target.id).disabled = true;
            document.getElementById("job"+e.target.id).innerHTML = "Proposal Submitted";
            await fetch("http://localhost:8000/seller/apply-job?job_id="+jobId,{
                method:"POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
        }catch(err){
            console.log("Error : ", err);
        }
    }

    return (
        <>
            <Header />
            <div className="job-modal modal">
                <div className="modal-header">
                    <h2>Your Jobs</h2>
                </div>
                <hr></hr>
                <div className="modal-body">
                {jobs.filter(job => job.status === 'pending' || job.status === 'proposed').map((job, index) => (
                    <form key={index} id={job._id} className="posts p1" onSubmit={submitForm}>
                        <div className="post-header">
                            <h2>{job.title}</h2>
                        </div>
                        <hr />
                        <div className="post-body">
                            <div className="desc-div">
                                <h3>Description</h3>
                                <p>{job.description}</p>
                            </div>
                            <div className="childs c1">
                                <label className="c1-label">Proposal Deadline : {job.post_deadline}</label>
                                <label className="c1-label">Duration : {job.project_deadline}</label>
                                <label className="c1-label">Date Posted : {job.created_at}</label>
                                <label className="c1-label">Budget : {job.budget}</label>
                                <label className="c1-label">Skills : {job.skills.join(', ')}</label>
                            </div>
                            <div className="tracker">
                                <button className="title mark-btn" id={"job" + job._id}>
                                    Submit Proposal
                                </button>
                            </div>
                        </div>
                    </form>
                ))}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Jobs;
