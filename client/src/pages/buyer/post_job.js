import React from "react";
import Header from '../../components/buyer_header';
import Footer from '../../components/footer'
import RightNav from "../../components/rightNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostJob(){

    const [domain,setDomain] = useState("");
    const navigate = useNavigate();

    const [formData,setFromData] = useState({
        title : '',
        description : '',
        domain : '',
        category : '',
        budget : '',
        project_deadline : '',
        post_deadline : '',
        skills : []
    });

    const handleChanges = (e)=>{
        const {name,value} = e.target;
        if(name === "skills"){
            setFromData(
                {
                    ...formData,
                    skills : value.split(",").map((skill)=>skill.trim())
                }
            )
        }
        else{
            setFromData(
                {
                    ...formData,
                    [e.target.name] : e.target.value
                }
            )
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("http://localhost:8000/buyer/post-job", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text();
            if (data) {
                alert("Job successfully created");
                navigate("/buyer");
            } else {
                navigate("/login");
                alert("Session Expired..Login again");
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    };
    

    const handleDoaminChanges = (e)=>{
        setDomain(e.target.value);
    }

    const getOptions = ()=>{
        if(domain === 'Programming & Tech'){
            return(
                <>
                <option value="website-development">Website Development</option>
                <option value="website-maintenance">Website Maintenance</option>
                <option value="wordpress">WordPress</option>
                <option value="shopify">Shopify</option>
                <option value="custom-websites">Custom Websites</option>

                <option value="web-applications">Web Applications</option>
                <option value="desktop-applications">Desktop Applications</option>
                <option value="game-development">Game Development</option>
                <option value="chatbot-development">Chatbot Development</option>
                <option value="browser-extensions">Browser Extensions</option>

                <option value="ai-development">AI Development</option>
                <option value="apis-integrations">APIs & Integrations</option>
                <option value="scripting">Scripting</option>
                <option value="plugins-development">Plugins Development</option>

                <option value="mobile-app-development">Mobile App Development</option>
                <option value="cross-platform-apps">Cross-platform Apps</option>
                <option value="android-app-development">Android App Development</option>
                <option value="ios-app-development">iOS App Development</option>
                <option value="mobile-app-maintenance">Mobile App Maintenance</option>
                </>
            )
        }
        if(domain === 'Graphic & Design'){
            return(
                <>
                    <option value="logo-design">Logo Design</option>
                    <option value="brand-style-guides">Brand Style Guides</option>
                    <option value="business-cards-stationery">Business Cards & Stationery</option>
                    <option value="fonts-typography">Fonts & Typography</option>
                    
                    <option value="website-design">Website Design</option>
                    <option value="app-design">App Design</option>
                    <option value="ux-design">UX Design</option>

                    <option value="architecture-interior-design">Architecture & Interior Design</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="building-engineering">Building Engineering</option>
                    <option value="lighting-design">Lighting Design New</option>
                    <option value="building-information-modeling">Building Information Modeling</option>

                    <option value="landing-page-design">Landing Page Design</option>
                    <option value="icon-design">Icon Design</option>
                </>
            )
        }
        if(domain === 'Digital Marketing'){
            return(
                <>
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="sem">Search Engine Marketing (SEM)</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="ecommerce-seo">E-Commerce SEO</option>
                    <option value="video-seo">Video SEO</option>
                    
                    <option value="social-media-marketing">Social Media Marketing</option>
                    <option value="paid-social-media">Paid Social Media</option>
                    <option value="social-commerce">Social Commerce New</option>
                    <option value="influencer-marketing">Influencer Marketing</option>
                    <option value="community-management">Community Management</option>
                    
                    <option value="video-marketing">Video Marketing</option>
                    <option value="ecommerce-marketing">E-Commerce Marketing</option>
                    <option value="email-marketing">Email Marketing</option>
                    <option value="email-automations">Email Automations</option>
                    <option value="guest-posting">Guest Posting</option>
                    
                    <option value="affiliate-marketing">Affiliate Marketing</option>
                    <option value="display-advertising">Display Advertising</option>
                    <option value="public-relations">Public Relations</option>
                    <option value="text-message-marketing">Text Message Marketing</option>
                </>
            )
        }
        if(domain === 'Video & Animation'){
            return(
                <>
                    <option value="video-editing">Video Editing</option>
                    <option value="visual-effects">Visual Effects</option>
                    <option value="video-art">Video Art New</option>
                    <option value="intro-outro-videos">Intro & Outro Videos</option>
                    <option value="video-templates-editing">Video Templates Editing</option>
                    <option value="subtitles-captions">Subtitles & Captions</option>
                    
                    <option value="character-animation">Character Animation</option>
                    <option value="animated-gifs">Animated GIFs</option>
                    <option value="animation-for-kids">Animation for Kids</option>
                    <option value="animation-for-streamers">Animation for Streamers</option>
                    <option value="rigging">Rigging</option>
                    <option value="nft-animation">NFT Animation</option>
                    
                    <option value="logo-animation">Logo Animation</option>
                    <option value="lottie-web-animation">Lottie & Web Animation</option>
                    <option value="text-animation">Text Animation New</option>
                </>
            )
        }
    }

    return(
        <>
        <Header/>
        <RightNav/>
        <div className="jobPost-modal modal">
            <div className="modal-header">
                <h1>Create a Job</h1>
                <hr></hr>
            </div>
            <div className="modal-body">
                <form className="jobpost-form" onSubmit={submitForm}>
                    <div className="form-inputs">
                        <input name='title' value={formData.title} onChange={handleChanges} type = "text" required></input>
                        <label>Job Title</label>
                    </div>
                    <div className="form-inputs">
                        <textarea name="description" value={formData.description} onChange={handleChanges} className="desc-text job-inp" type = "text"></textarea>
                        <label>Description</label>
                    </div>
                    <div className="form-inputs">
                        <select name="domain" value={formData.domain} required className="doamin-list job-inp" type = "text" onChange={(e)=>{
                            handleDoaminChanges(e);
                            handleChanges(e);
                        }}>
                            <option>select</option>
                            <option>Programming & Tech</option>
                            <option>Graphic & Design</option>
                            <option>Digital Marketing</option>
                            <option>Video & Animation</option>
                        </select>
                        <label>Doamin</label>
                    </div>
                    <div className="form-inputs">
                        <select className="serv-list job-inp" type = "text" name = "category" value={formData.category} onChange={handleChanges} required>
                            <option>select</option>
                            {getOptions()}
                        </select>
                        <label>Service Category</label>
                    </div>
                    <div className="form-inputs">
                        <input name="budget" value={formData.pay_per_hr} onChange={handleChanges} required type = "text"></input>
                        <label>Budget</label>
                    </div>
                    <div className="form-inputs">
                        <input name="project_deadline" value={formData.expected_duration} onChange={handleChanges} required type = "date"></input>
                        <label>Project Deadline</label>
                    </div>
                    <div className="form-inputs">
                        <input name="project_deadline" value={formData.deadline} required onChange={handleChanges} type = "date"></input>
                        <label>Job post deadline</label>
                    </div>
                    <div className="form-inputs">
                        <input name="skills" value={formData.skills} required onChange={handleChanges} type = "text"></input>
                        <label>Skills</label>
                    </div>
                    <div className="form-footer">
                        <button type="submit">Create job post</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default PostJob;