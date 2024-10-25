import React from "react";
import Header from "../../components/buyer_header";
import Footer from "../../components/footer";
import RightNav from "../../components/rightNav";
import { Link } from "react-router-dom";

function ProfilesDashboard(){
    return(
        <>
        <Header/>
        <RightNav/>

        <div className="dashboard-modal">
            <div className="modal-header">
                <h2 className="title">Website Development</h2>
                <span>Create, build, and develop your website with skilled website developers</span>
            </div>
            <hr></hr>
            <div className="modal-body">
                <div className="result-header">
                    <span>100+ results</span>
                </div>
                <div className="body-content">
                    <Link to="/buyer/profile_view?name=Dhanush" target="_blank" className="profiles p1">
                        <i className="fa fa-heart fav"></i>
                        <div className="img-div">

                        </div>
                        <div className="about-div">
                            <div className="ad1 name">
                                <span>Dhanush</span>
                                <hr></hr>
                            </div>
                            <div className="ad2 Ratings">
                                <span>Ratings : 5.0</span>
                            </div>
                            <div className="ad3 price">
                                <span>From Rs.14,000</span>
                            </div>
                        </div>
                    </Link>
                    <div className="profiles p1">
                        <i className="fa fa-heart fav"></i>
                        <div className="img-div">

                        </div>
                        <div className="about-div">
                            <div className="ad1 name">
                                <span>Dhanush</span>
                                <hr></hr>
                            </div>
                            <div className="ad2 Ratings">
                                <span>Ratings : 5.0</span>
                            </div>
                            <div className="ad3 price">
                                <span>From Rs.14,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProfilesDashboard;