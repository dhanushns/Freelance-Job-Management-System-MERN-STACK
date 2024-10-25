import React, { useState, useEffect } from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';

function Jobs() {
    const navigate = useNavigate();
    const [jobs, loadJobs] = useState([]);
    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch('http://localhost:8000/seller/getJobs')
            .then(response => response.json())
            .then(data => {
                loadJobs(data);
                console.log(data);
            });
    }, []);

    const submitForm = async (e)=>{
        e.preventDefault();
        try{
            const email = sessionStorage.getItem("email");
            const id = e.target.id;
            document.getElementById("job"+e.target.id).disabled = true;
            document.getElementById("job"+e.target.id).innerHTML = "Proposal Submitted";
            const resp = await fetch("http://localhost:8000/seller/applyJob?email="+email + "&job_id="+id);
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
                    {jobs.map((job, index) => (
                        <form key={index} id={job._id} className="posts p1" onSubmit={submitForm}>
                            <div className="post-header">
                                <h2>{job.title}</h2>
                            </div>
                            <hr></hr>
                            <div className="post-body">
                                <div className="desc-div">
                                    <h3>Description</h3>
                                    <p>{job.description}</p>
                                </div>
                                <div className="childs c1">
                                    <label className="c1-label">Proposal Deadline : {job.deadline}</label>
                                    <label className="c1-label">Duration : {job.expected_duration}</label>
                                    <label className="c1-label">Date Posted : {job.createdAt}</label>
                                    <label className="c1-label">Budget : {job.pay_per_hr}</label>
                                    <label className="c1-label">Skills : {job.skills.join(', ')}</label>
                                </div>
                                <div className="tracker">
                                    <button className="title mark-btn" id = {"job"+job._id}>
                                        {job.proposals.map((id,count)=>{
                                            if(id.seller_id === email){
                                                return "Probosal Submitted"
                                            }
                                            else return "Submit Proposal"
                                        })}
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
