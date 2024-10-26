import React from "react";

// Icons
import dl1 from '../assets/images/domain1.png';
import dl2 from '../assets/images/domain2.png';
import dl3 from '../assets/images/domain3.png';
import dl4 from '../assets/images/domain4.png';
import web from '../assets/images/services/web.png';
import logoDesign from '../assets/images/services/logo_design.jpg';
import seo from '../assets/images/services/seo.png';
import architect from '../assets/images/services/architect.jpg';
import socialMedia from '../assets/images/services/social_media.png';
import swDev from '../assets/images/services/software_dev.png';
import videoAni from '../assets/images/services/video_ani.jpg';
import { useNavigate } from 'react-router-dom';

function Main(){

    const navigate = useNavigate();
    const handlePage = (e)=>{
        const key = e.target.value;
        navigate("/services?key="+key);
    }

    return(
        <>
         {/* Domain Categories Start Here */}
         <div className='domainList-modal modal'>
            <div className='modal-header'>
                <h2>Choose your Domain</h2>
            </div>
            <div className='modal-body'>
                <div className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl1}></img>
                    </div>
                    <button style={{border:"none",backgroundColor:"white"}} className="hide-decorations list-title" value={"pt"} onClick={handlePage}>Programming & Tech</button>
                </div>
                <div className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl2}></img>
                    </div>
                    <button style={{border:"none",backgroundColor:"white"}} className="hide-decorations list-title" to = "/" value={"gd"} onClick={handlePage}>Graphic & Design</button>
                </div>
                <div className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl3}></img>
                    </div>
                    <button style={{border:"none",backgroundColor:"white"}} className="hide-decorations list-title" to = "/" value={"dm"} onClick={handlePage}>Digital Marketing</button>
                </div>
                <div className='lists l1'>
                    <div className='domain_img'>
                        <img src={dl4}></img>
                    </div>
                    <button style={{border:"none",backgroundColor:"white"}} className="hide-decorations list-title" to = "/" value={"va"} onClick={handlePage}>Video & Animaton</button>
                </div>
            </div>
        </div>
        {/* Domain Categories Ends Here */}

        {/* Popular Services Starts here */}
        <div className='services-modal modal'>
            <div className='modal-header'>
                <h2>Popular Services</h2>
            </div>
            <div className='modal-body'>
                <a href="./buyer/services/category?key=Website Development" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Website Development</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={web} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=Logo Design" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Logo Design</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={logoDesign} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=SEO" className='srv s1'>
                    <div className='srv-header'>
                        <h3>SEO</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={seo} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=Architecture and interior Design" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Architecture and interior Design</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={architect} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=Social Media Marketing" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Social Media Marketing</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={socialMedia} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=software_development" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Software Development</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={swDev} alt="services"></img>
                    </div>
                </a>
                <a href="./buyer/services/category?key=Video Animation" className='srv s1'>
                    <div className='srv-header'>
                        <h3>Video Animation</h3>
                    </div>
                    <div className='srv-body'>
                        <img src={videoAni} alt="services"></img>
                    </div>
                </a>
            </div>
        </div>
        {/* Popular Services Ends Here */}
        </>
    )
}

export default Main