import React from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";

function MyProjects(){
    return(
        <>
        <Header/>
        <div className="myPro-modal modal">
            <div className="modal-header">
                <h2>My Projects</h2>
            </div>
            <hr></hr>
            <div className="modal-body">
            <div className="posts p1">
                <div className="post-header">
                    <h2>I need a Software Engineer</h2>
                </div>
                <hr></hr>
                <div className="post-body">
                    <div className="desc-div">
                        <h3>Description</h3>
                        <p>asldkfsldhfsjldfh</p>
                    </div>
                    <div className="childs c1">
                        <label className="c1-label">Proposal Deadline : 21/2/2024</label>
                        <label className="c1-label">Duration : 15 hrs</label>
                        <label className="c1-label">Date Posted : 23/1/2024</label>
                        <label className="c1-label">Budget : 14000</label>
                        <label className="c1-label">Skills : Java, Pyhton</label>
                    </div>
                    <div className="tracker">
                        <label className="title title-active">Proposal Submitted</label>
                        <div className="line line-active"></div>
                        <label className="title title-active">Hired</label>
                        <div className="line line-active"></div>
                        <button className="title mark-btn">Mark in Progress</button>
                        <div className="line"></div>
                        <button className="title mark-btn">Mark completed</button>
                        <div className="line"></div>
                        <label className="title mark-btn">Payment</label>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MyProjects;