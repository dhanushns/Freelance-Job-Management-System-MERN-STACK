import React from "react";
import Header from "../../components/buyer_header";
import Footer from "../../components/footer";
import RightNav from "../../components/rightNav";

function ProfileView(){
    return(
        <>
        <Header/>
        <RightNav/>
        <div className="profile_view-modal">
            <div className="modal-body">
                <div className="left-aside">
                    <div className="profile-content">
                        <div className="profile-img">

                        </div>
                        <div className="about-div">
                            <ul>
                                <li>
                                    <span>Dhanush</span> | <span>@dhanushns</span>
                                </li>
                                <li>
                                    <span>Rating : 5.4 </span>
                                </li>
                                <li>
                                    <span>I design from Heart</span>
                                </li>
                                <li className="location">
                                    <div className="list-div">
                                        <i className="material-icons loc-icon">location_on</i><span>India</span> | 
                                    </div>
                                    <div className="list-div">
                                        <i className="material-icons loc-icon">chat_bubble</i><span>English, Tamil, Telugu</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="desc-div">
                        <div className="div-header">
                            <h3>About Me</h3>
                        </div>
                        <div className="div-para">
                            <p>alkfslkfdsdf</p>
                        </div>
                    </div>
                    <div className="skill-div">
                        <div className="div-header">
                            <h3>Skills</h3>
                        </div>
                        <div className="div-content">
                            <div className="skills s1">
                                Python
                            </div>
                            <div className="skills s1">
                                Python
                            </div>
                            <div className="skills s1">
                                Python
                            </div>
                            <div className="skills s1">
                                Python
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-aside">
                    <div className="contact-modal">
                        <div className="profile-content">
                            <div className="profile-img">

                            </div>
                            <div className="about-div">
                                <ul>
                                    <li>
                                        <span>Dhanush</span> | <span>@dhanushns</span>
                                    </li>
                                </ul>
                                <ul>
                                    <button className="contactBtn">
                                    <i className="fa fa-send"></i>
                                    Contact me</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="review-modal">
            <div className="modal-header">
                <span>Reviews</span>
            </div>
            <div className="modal-body">
                <div className="reviews r1">
                    <div className="header">
                        <div className="img">

                        </div>
                        <div className="info">
                            <span>Dhanush</span><br></br>
                            <span>India</span>
                        </div>
                    </div>
                    <hr style={{border:"1px solid #d3d3d3"}}></hr>
                    <div className="body">
                        <span>Ratings : 5</span>
                        <p>
                            sakfhaksjdfhaskjdfhaskjfh
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProfileView;