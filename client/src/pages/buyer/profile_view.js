import React from "react";
import Header from "../../components/buyer_header";
import Footer from "../../components/footer";
import RightNav from "../../components/rightNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfileView(){

    const location = useLocation();
    
    const id = new URLSearchParams(location.search).get('id');

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch('http://localhost:8000/buyer/profile-data?id='+id, {
            method: "GET",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(async (res) => {
                if (res.success) {
                    setData(res.user);
                } else {
                    navigate("/login");
                }
            });
    },);

    return(
        <>
        <Header/>
        <RightNav/>
        <div className="profile_view-modal">
            <div className="modal-body">
                <div className="left-aside">
                    <div className="profile-content">
                        <div className="profile-img">
                            <img src={data.profile_img || "defaultImagePath"}></img>
                        </div>
                        <div className="about-div">
                            <ul>
                                <li>
                                    <span>{data.display_name}</span>
                                </li>
                                <li>
                                    <span>Rating : {data.ratings} </span>
                                </li>
                                <li>
                                    <span>{data.bio}</span>
                                </li>
                                <li className="location">
                                    <div className="list-div">
                                        <i className="material-icons loc-icon">location_on</i><span>India</span> | 
                                    </div>
                                    <div className="list-div">
                                        <i className="material-icons loc-icon">chat_bubble</i><span>{data.languages}</span>
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
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="skill-div">
                        <div className="div-header">
                            <h3>Skills</h3>
                        </div>
                        <div className="div-content">
                        {data.skills && data.skills.length > 0 ? (
                                    data.skills.map((skill, index) => (
                                        <div key={index} className="skills s1">
                                            {skill}
                                        </div>
                                    ))
                                ) : (
                                <div className="skills s1">No skills available</div>
                            )}
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
                                        <span>{data.display_name}</span> | <span>@dhanushns</span>
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
                            Review Description
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