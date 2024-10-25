import React from "react";
import Header from '../../components/seller_header';
import Footer from "../../components/footer";

function Proposals(){
    return (
        <>
        <Header/>
        <div className="pro-modal modal">
            <div className="modal-header">
                <h2>My Proposals</h2>
                <hr></hr>
            </div>
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
                            <label className="title">Proposal Submitted</label>
                            <div className="line"></div>
                            <label className="title">Hired</label>
                            <div className="line"></div>
                            <label className="title">In Progress</label>
                            <div className="line"></div>
                            <label className="title">Completed</label>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Proposals;