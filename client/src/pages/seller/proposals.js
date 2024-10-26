import React, { useEffect, useState } from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function Proposals() {
    const navigate = useNavigate();
    const [proposals, setProposals] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {
        try {
            const response = await fetch('http://localhost:8000/seller/get-proposals', {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();

            const proposals = await Promise.all(data.map(async (proposal) => {
                const jobResponse = await fetch("http://localhost:8000/seller/job?job_id="+proposal.job_id, {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const jobData = await jobResponse.json();
                return { ...proposal, job: jobData };
            }));

            setProposals(proposals);
        } catch (error) {
            console.error("Error fetching proposals:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="pro-modal modal">
                <div className="modal-header">
                    <h2>My Proposals</h2>
                    <hr />
                </div>
                <div className="modal-body" style={{flexDirection:"column"}}>
                    {proposals.map((proposal, index) => (
                        <div className="posts p1" key={index}>
                            <div className="post-header">
                                <h2>{proposal.job.title}</h2>
                            </div>
                            <hr />
                            <div className="post-body">
                                <div className="desc-div">
                                    <h3>Description</h3>
                                    <p>{proposal.job.description}</p>
                                </div>
                                <div className="childs c1">
                                    <label className="c1-label">Proposal Deadline: {proposal.job.post_deadline}</label>
                                    <label className="c1-label">Duration: {proposal.job.project_deadline}</label>
                                    <label className="c1-label">Date Posted: {new Date(proposal.job.created_at).toLocaleDateString()}</label>
                                    <label className="c1-label">Budget: {proposal.job.budget}</label>
                                    <label className="c1-label">Skills: {proposal.job.skills.join(', ')}</label>
                                </div>
                                <div className="tracker">
                                    <label className={`title ${proposal.status === 'pending' ? 'active' : ''}`}>Proposal Submitted</label>
                                    <div className={`line ${proposal.status === 'pending' ? 'active' : ''}`}></div>

                                    <label className={`title ${proposal.status === 'hired' ? 'active' : ''}`}>Hired</label>
                                    <div className={`line ${proposal.status === 'hired' ? 'active' : ''}`}></div>

                                    <label className={`title ${proposal.status === 'in-progress' ? 'active' : ''}`}>In Progress</label>
                                    <div className={`line ${proposal.status === 'in-progress' ? 'active' : ''}`}></div>

                                    <label className={`title ${proposal.status === 'completed' ? 'active' : ''}`}>Completed</label>
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

export default Proposals;
