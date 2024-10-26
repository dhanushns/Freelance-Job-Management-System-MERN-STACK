import React from 'react';
import Header from '../../components/seller_header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import banner from '../../assets/images/pt_banner.jpg';

function Dashboard() {
    
    const [data, loadData] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [pending, setPending] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch('http://localhost:8000/seller/dashboard', {
            method: "GET",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(res => {
                loadData(res);

                const jobs = res.jobs || [];
                let completedCount = 0;
                let pendingCount = 0;

                jobs.forEach(job => {
                    if (job.status === "completed") {
                        completedCount++;
                    } else if (job.status === "in-progress") {
                        pendingCount++;
                    }
                });

                setCompleted(completedCount);
                setPending(pendingCount);
            })
            .catch(error => {
                console.error("Error fetching dashboard data:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="banner-modal modal">
                <div className="modal-header">
                    <h2>Welcome to JobSync, {data.display_name}</h2>
                </div>
                <div className="modal-body">
                    <div className="body-header">
                        <span>RECOMMENDED FOR YOU</span>
                    </div>
                    <div className="body-content">
                        <div className="left-childs">
                            {/* <div className="l1"></div> */}
                            <div className="l2">
                                <span className="l2-title">New Job Posts</span><br />
                                <span className="sub">Get tailored jobs for your needs.</span>
                            </div>
                        </div>
                        <div className="right-childs">
                            <Link className="rc" to="/seller/jobs">Get Job</Link>
                        </div>
                    </div>
                </div>
                <img src={banner}></img>
            </div>
            <div className='dashboard-modal modal'>
                <div className='modal-header'>
                    <h2>Dashboard</h2>
                    <hr />
                </div>
                <div className='modal-body'>
                    <div className='overview'>
                        <div className='childs c1'>
                            <label className='title'>All Projects</label>
                            <label className='count'>{data.jobs ? data.jobs.length : 0}</label>
                        </div>
                        <div className='childs c2'>
                            <label className='title'>Completed</label>
                            <label className='count'>{completed}</label>
                        </div>
                        <div className='childs c3'>
                            <label className='title'>Pending</label>
                            <label className='count'>{pending}</label>
                        </div>
                        <div className='sperator'></div>
                        <div className='right-aside'>
                            <Link className="raBtn" to="/seller/proposals">My Proposals</Link>
                            <Link to="/seller/projects" className="raBtn">My Projects</Link>
                        </div>
                    </div>
                    <div className='dashboard-tbl'>
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="col col-1">Job Id</div>
                                <div className="col col-2">Customer Name</div>
                                <div className="col col-3">Project Status</div>
                                <div className="col col-4">Payment Status</div>
                            </li>
                            {data.jobs && data.jobs.length > 0 ? (
                                data.jobs.map((job, index) => (
                                    <li className="table-row" key={index}>
                                        <div className="col col-1" data-label="Job Id">{index+1}</div>
                                        <div className="col col-2" data-label="Customer Name">{job.buyer_name}</div>
                                        <div className="col col-3" data-label="Project Status">{job.status}</div>
                                        <div className="col col-4" data-label="Payment Status">{job.payment_status}</div>
                                    </li>
                                ))
                            ) : (
                                <li className="table-row">
                                    <div className="col col-1" data-label="Job Id">No jobs found</div>
                                    <div className="col col-2" data-label="Customer Name"></div>
                                    <div className="col col-3" data-label="Project Status"></div>
                                    <div className="col col-4" data-label="Payment Status"></div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
