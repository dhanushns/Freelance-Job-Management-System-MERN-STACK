import React, { useState } from "react";
import Header from "../../components/buyer_header";
import Footer from "../../components/footer";
import RightNav from "../../components/rightNav";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function MyPost() {
    const [jobs, loadJobs] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch('http://localhost:8000/buyer/get-job-post',{
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
    }, [jobs]);

    const handleHire = (jobId, sellerId) => {
    fetch('http://localhost:8000/buyer/hire?job_id='+jobId+'&seller_id='+sellerId, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: 'hired' }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadJobs(prevJobs =>
                prevJobs.map(job => {
                    if (job._id === jobId) {
                        job.proposals = job.proposals.map(proposal => ({
                            ...proposal,
                            status: proposal.seller_id === sellerId ? 'hired' : 'disabled',
                        }));
                    }
                    return job;
                })
            );
        }
    })
    .catch(error => {
        console.error('Error hiring:', error);
    });
};


    return (
        <>
            <Header />
            <RightNav />
            <div className="myPost-modal modal">
                <div className="modal-header">
                    <h2>Job Posted by you</h2>
                    <hr></hr>
                </div>
                <div className="modal-body">
                    {jobs.map((job, index) => (
                        <div className="posts p1" key={job._id}>
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
                                    <label className="c1-label">Proposal Deadline : {job.post_deadline}</label>
                                    <label className="c1-label">Duration : {job.project_deadline}</label>
                                    <label className="c1-label">Date Posted : {new Date(job.created_at).toLocaleDateString()}</label>
                                    <label className="c1-label">Budget : {job.budget}</label>
                                    <label className="c1-label">Skills : {job.skills.join(', ')}</label>
                                </div>
                                <div className="tracker">
                                    <label className={`title ${job.status === 'proposed' ? 'active' : ''}`}>Proposal Submitted</label>
                                    <div className={`line ${job.status === 'proposed' ? 'active' : ''}`}></div>

                                    <label className={`title ${job.status === 'hired' ? 'active' : ''}`}>Hired</label>
                                    <div className={`line ${job.status === 'hired' ? 'active' : ''}`}></div>

                                    <label className={`title ${job.status === 'in-progress' ? 'active' : ''}`}>In Progress</label>
                                    <div className={`line ${job.status === 'in-progress' ? 'active' : ''}`}></div>

                                    <label className={`title ${job.status === 'completed' ? 'active' : ''}`}>Completed</label>
                                </div>
                                <div className="prop-rec">
                                    <div className="title">Proposals Received</div>
                                    <div className="list-prop-body">
                                        {job.proposals.map((proposal, propIndex) => (
                                            <div key={propIndex} className="contact-modal">
                                                <div className="profile-content">
                                                    <div className="profile-img">
                                                        <img src= {proposal.profile_img}></img>
                                                    </div>
                                                    <div className="about-div">
                                                        <label>{proposal.name}</label>
                                                        <button
                                                            className="hireBtn"
                                                            onClick={() => handleHire(job._id, proposal.seller_id)}
                                                            disabled={proposal.status === 'hired' || proposal.status === 'disabled'}
                                                        >
                                                            Hire me
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyPost;
