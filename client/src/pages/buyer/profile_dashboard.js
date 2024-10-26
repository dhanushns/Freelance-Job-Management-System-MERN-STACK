import React, { useState, useEffect } from "react";
import Header from "../../components/buyer_header";
import Footer from "../../components/footer";
import RightNav from "../../components/rightNav";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProfilesDashboard() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const res = new URLSearchParams(location.search).get("key");

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch('http://localhost:8000/buyer/get-profiles', {
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
                    setData(res.data);
                } else {
                    navigate("/login");
                }
            });
    }, [navigate]);

    const handleProfile = (e)=>{
        const data = e.target.value;
        if(data){
            navigate("/buyer/profile_view");
        }
    }

    return (
        <>
            <Header />
            <RightNav />

            <div className="dashboard-modal">
                <div className="modal-header">
                    <h2 className="title">{res}</h2>
                    <span>Create, build, and develop your website with skilled {res}</span>
                </div>
                <hr />
                <div className="modal-body">
                    <div className="result-header">
                        <span>{data.filter(profile => profile.domain === res || (profile.category && profile.category.includes(res))).length} results</span>
                    </div>
                    <div className="body-content">
                    {data.filter(profile =>
                            profile.domain === res || (profile.category && profile.category.includes(res))
                        )
                        .map((profile, index) => (
                            <a href={`/buyer/profile_view?id=${profile.user_id}`} target="_blank" key={index} className="profiles p1" style={{ backgroundColor: "#fff" }}>
                            <i className="fa fa-heart fav"></i>
                            {/* <div className="img-div">
                                <img src={profile.profile_img || "defaultImagePath"} alt={`${profile.display_name}'s profile`} />
                            </div> */}
                            <div className="about-div">
                                <div className="ad1 name">
                                <span>{profile.display_name}</span>
                                <hr />
                                </div>
                                <div className="ad2 Ratings">
                                <span>Ratings: {profile.ratings || "N/A"}</span>
                                </div>
                                <div className="ad3 bio">
                                <span>{profile.bio}</span>
                                </div>
                            </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilesDashboard;
