import React, { useState, useEffect } from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";

function MyProjects() {
    const [projects, loadProjects] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch('http://localhost:8000/seller/get-projects',{
            method:"GET",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                loadProjects(data);
            });
    }, [projects]);

    return (
        <>
            <Header />
            <div className="myPro-modal modal">
                <div className="modal-header">
                    <h2>My Projects</h2>
                </div>
                <hr />
                <div className="modal-body">
                    {projects.map((project, index) => (
                        <div className="posts p1" key={index}>
                            <div className="post-header">
                                <h2>{project.title || "Untitled Project"}</h2>
                            </div>
                            <hr />
                            <div className="post-body">
                                <div className="desc-div">
                                    <h3>Description</h3>
                                    <p>{project.description || "No description provided."}</p>
                                </div>
                                <div className="childs c1">
                                    <label className="c1-label">Proposal Deadline: {project.proposalDeadline}</label>
                                    <label className="c1-label">Duration: {project.duration || "N/A"}</label>
                                    <label className="c1-label">Date Posted: {new Date(project.datePosted).toLocaleDateString()}</label>
                                    <label className="c1-label">Budget: {project.budget || "N/A"}</label>
                                    <label className="c1-label">Skills: {project.skills ? project.skills.join(', ') : "N/A"}</label>
                                </div>
                                <div className="tracker">
                                <label className={'title ' + (project.status === 'submitted' ? 'title-active' : '')}>Proposal Submitted</label>
                                    <div className={'line ' + (project.status === 'submitted' ? 'line-active' : '')}></div>
                                    <label className={'title ' + (project.status === 'hired' ? 'title-active' : '')}>Hired</label>
                                    <div className={'line ' + (project.status === 'hired' ? 'line-active' : '')}></div>
                                    <button className={'title mark-btn ' + (project.status === 'in-progress' ? 'title-active' : '')}>Mark In Progress</button>
                                    <div className={'line ' + (project.status === 'in-progress' ? 'line-active' : '')}></div>
                                    <button className={'title mark-btn ' + (project.status === 'completed' ? 'title-active' : '')}>Mark Completed</button>
                                    <div className='line'></div>
                                    <label className="title mark-btn">Payment</label>
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

export default MyProjects;
