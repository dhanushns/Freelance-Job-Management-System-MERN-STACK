import React, { useEffect } from "react";
import Header from "../../components/buyer_header"
import Footer from '../../components/footer';
import RightNav from "../../components/rightNav";
import { Link } from "react-router-dom";

import dl1 from '../../assets/images/domain1.png'
import dl2 from '../../assets/images/domain2.png';
import web from '../../assets/images/services/web.png';
import logoDesign from '../../assets/images/services/logo_design.jpg';
import seo from '../../assets/images/services/seo.png';
import architect from '../../assets/images/services/architect.jpg';
import socialMedia from '../../assets/images/services/social_media.png';
import swDev from '../../assets/images/services/software_dev.png';
import videoAni from '../../assets/images/services/video_ani.jpg';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Buyer(){

    const [data,setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }

        fetch("http://localhost:8000/buyer/user-data",{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(responce=>responce.json()).then(result=>{
            if(result.data){
                setData(result.data);
            }
            else navigate("/login");
        }).catch(err=> console.log("Error fetching data : ",err));
    },[data]);

    return(
        <>
        <Header/>
        <RightNav/>
        <div className="banner-modal modal">
            <div className="modal-header">
                <h2>Welcome to JobSync, {data.firstname
                    
                    }</h2>
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
                            <span className="l2-title">Post a Project/Job</span><br></br>
                            <span className="sub">Get tailored offers for your needs.</span>
                        </div>
                    </div>
                    <div className="right-childs">
                        <Link className = "rc" to = "/buyer/create_job">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Domain Categories Start Here */}
        <div className='domainList-modal modal' style={{marginTop:"100px"}}>
            <div className='modal-header'>
                <h2>Choose your Domain</h2>
            </div>
            <div className='modal-body'>
                <Link to = "/buyer/services?category=programming&tech" className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl1}></img>
                    </div>
                    <span className="hide-decorations list-title">Programming & Tech</span>
                </Link>
                <div className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl2}></img>
                    </div>
                    <Link className="hide-decorations list-title" to = "/">Graphic & Design</Link>
                </div>
                <div className='lists l1'>
                    <Link className="hide-decorations list-title" to = "/">Digital Marketing</Link>
                </div>
                <div className='lists l1'>
                    <Link className="hide-decorations list-title" to = "/">Video & Animaton</Link>
                </div>
            </div>
        </div>
        {/* Domain Categories Ends Here */}

        {/* Popular Services Starts here */}
        <div className='services-modal modal'>
            <div className='modal-header'>
                <h2>Explore popular services on JobSync</h2>
            </div>
            <div className='modal-body'>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Website Development</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={web} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Logo Design</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={logoDesign} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>SEO</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={seo} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Architecture and interior Design</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={architect} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Social Media Marketing</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={socialMedia} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Software Development</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={swDev} alt="services"></img>
                    </div>
                </div>
                <div className='srv s1'>
                    <div className='srv-header'>
                        <h3>Video Animation</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={videoAni} alt="services"></img>
                    </div>
                </div>
            </div>
        </div>
        {/* Popular Services Ends Here */}
        <Footer/>
        </>
    )
}

export default Buyer;