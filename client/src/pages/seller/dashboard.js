import React from 'react';
import Header from '../../components/seller_header'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard(){

    const navigate = useNavigate();

    const [totalProjects, setTotalProjects] = useState(0);
    const [pendingProjects, setPendingProjects] = useState(0);
    const [completedProjects, setCompletedProjects] = useState(0);
    const [name,setName] = useState(null);
    let projects;

    useEffect(() => {
        const email = sessionStorage.getItem("email");
      fetch('http://localhost:8000/seller/profile?email=' + email)
        .then(response => response.json())
        .then(data => {
            setName(data.name);
          projects = [...data.jobHistory, ...data.currentProject];
          const total = projects.length;
          const pending = projects.filter(project => project.status === 'in-progress').length;
          const completed = projects.filter(project => project.status === 'completed').length;
          setTotalProjects(total);
          setPendingProjects(pending);
          setCompletedProjects(completed);
        })
        .catch(error => {
          console.error('Error fetching dashboard data:', error);
        });
    }, []);

    return(
        <>
            <Header/>
            <div className="banner-modal modal">
            <div className="modal-header">
                <h2>Welcome to JobSync, {name}</h2>
            </div>
            <div className="modal-body">
                <div className="body-header">
                    <span>RECOMMENDED FOR YOU</span>
                </div>
                <div className="body-content">
                    <div className="left-childs">
                        <div className="l1">

                        </div>
                        <div className="l2">
                            <span className="l2-title">New Job Posts</span><br></br>
                            <span className="sub">Get tailored jobs for your needs.</span>
                        </div>
                    </div>
                    <div className="right-childs">
                        <Link className = "rc" to = "/seller/jobs">Get Job</Link>
                    </div>
                </div>
            </div>
            </div>
            <div className='dashboard-modal modal'>
                <div className='modal-header'>
                    <h2>Dashboard</h2>
                    <hr></hr>
                </div>
                <div className='modal-body'>
                    <div className='overview'>
                    <div className='childs c1'>
                        <label className='title'>All Projects</label>
                        <label className='count'>{totalProjects}</label>
                    </div>
                    <div className='childs c2'>
                        <label className='title'>Completed</label>
                        <label className='count'>{completedProjects}</label>
                    </div>
                    <div className='childs c3'>
                        <label className='title'>Pending</label>
                        <label className='count'>{pendingProjects}</label>
                    </div>
                    <div className='sperator'></div>
                    <div className='right-aside'>
                        <Link className = "raBtn" to = "/seller/proposals">My Proposals</Link>
                        <Link to = "/seller/projects" className = "raBtn">My Projects</Link>
                    </div>
                    </div>
                    <div className='dashboard-tbl'>
                        <ul class="responsive-table">
                            <li class="table-header">
                                <div class="col col-1">Job Id</div>
                                <div class="col col-2">Customer Name</div>
                                <div class="col col-3">Project Status</div>
                                <div class="col col-4">Payment Status</div>
                            </li>
                            <li class="table-row">
                                <div class="col col-1" data-label="Job Id">42235</div>
                                <div class="col col-2" data-label="Customer Name">John Doe</div>
                                <div class="col col-3" data-label="status">Pending</div>
                                <div class="col col-4" data-label="Payment Status">Pending</div>
                            </li>
                            {projects && (()=>{
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard;