import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

function OnboardSeller() {
  const [section, setSection] = useState(1);
  const [personalStatus, setPersonalStatus] = useState(0);
  const [profStatus, setProfStatus] = useState(0);
  const [accStatus, setAccStatus] = useState(0);
  const [option, setOption] = useState('');
  const [emailStatus, setEmailStatus] = useState(false);
  const [phoneStatus, setPhoneStatus] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    display_name: '',
    description: '',
    bio: '',
    languages: [],
    profile_img: '',
    domain: '',
    category: [],
    skills: [],
    personal_website: '',
  });

  const navigate = useNavigate();

  const [userEmail,setUserEmail] = useState(null);


  const uri = "http://localhost:8000";
  

  const handleFormChange = (e) => {

    const {name,value} = e.target;

    if(name === "profile_img"){
        setFormData(
            {
                ...formData,
                profile_img : URL.createObjectURL(e.target.files[0]),
            },
        )
    }
    else if(name === "category"){
        setFormData((prevData)=>{
            const newCategories = prevData.category.includes(value) ? prevData.category.filter((category)=>category!=value) : [...prevData.category,value];
            return {...prevData,category : newCategories};
        });
    }
    else if(name === "skills"){
        setFormData(
            {
                ...formData,
                skills : value.split(",").map((skill)=>skill.trim()),
            },
        )
    }
    else if(name === "languages"){
        setFormData(
            {
                ...formData,
                languages: value.split(",").map((lang)=>lang.trim()),
            },
        )
    }
    else{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  };

  
  const handleSelection = (e) => {
    setOption(e.target.value);
    setFormData((prevData)=>({
        ...prevData,
        category : []
    }))
  };

  
  const selectionChange = () => {
    if (option === 'Programming & Tech') {
      return (
        <>
          <ul>
            <li>
            <input type="checkbox" id="website-development" name="category" value="Website Development" onChange={handleFormChange} />
            <label htmlFor="website-development">Website Development</label>
            </li>
            <li>
            <input type="checkbox" id="website-maintenance" name="category" value="Website Maintenance" onChange={handleFormChange} />
            <label htmlFor="website-maintenance">Website Maintenance</label>
            </li>
            <li>
            <input type="checkbox" id="wordpress" name="category" value="WordPress" onChange={handleFormChange} />
            <label htmlFor="wordpress">WordPress</label>
            </li>
            <li>
            <input type="checkbox" id="shopify" name="category" value="Shopify" onChange={handleFormChange} />
            <label htmlFor="shopify">Shopify</label>
            </li>
            <li>
            <input type="checkbox" id="custom-websites" name="category" value="Custom Websites" onChange={handleFormChange} />
            <label htmlFor="custom-websites">Custom Websites</label>
            </li>
            <li>
            <input type="checkbox" id="web-applications" name="category" value="Web Applications" onChange={handleFormChange} />
            <label htmlFor="web-applications">Web Applications</label>
            </li>
            <li>
            <input type="checkbox" id="desktop-applications" name="category" value="Desktop Applications" onChange={handleFormChange} />
            <label htmlFor="desktop-applications">Desktop Applications</label>
            </li>
            <li>
            <input type="checkbox" id="game-development" name="category" value="Game Development" onChange={handleFormChange} />
            <label htmlFor="game-development">Game Development</label>
            </li>
            <li>
            <input type="checkbox" id="chatbot-development" name="category" value="Chatbot Development" onChange={handleFormChange} />
            <label htmlFor="chatbot-development">Chatbot Development</label>
            </li>
            <li>
            <input type="checkbox" id="browser-extensions" name="category" value="Browser Extensions" onChange={handleFormChange} />
            <label htmlFor="browser-extensions">Browser Extensions</label>
            </li>
            <li>
            <input type="checkbox" id="ai-development" name="category" value="AI Development" onChange={handleFormChange} />
            <label htmlFor="ai-development">AI Development</label>
            </li>
            <li>
            <input type="checkbox" id="apis-integrations" name="category" value="APIs & Integrations" onChange={handleFormChange} />
            <label htmlFor="apis-integrations">APIs & Integrations</label>
            </li>
            <li>
            <input type="checkbox" id="scripting" name="category" value="Scripting" onChange={handleFormChange} />
            <label htmlFor="scripting">Scripting</label>
            </li>
            <li>
            <input type="checkbox" id="plugins-development" name="category" value="Plugins Development" onChange={handleFormChange} />
            <label htmlFor="plugins-development">Plugins Development</label>
            </li>
            <li>
            <input type="checkbox" id="mobile-app-development" name="category" value="Mobile App Development" onChange={handleFormChange} />
            <label htmlFor="mobile-app-development">Mobile App Development</label>
            </li>
            <li>
            <input type="checkbox" id="cross-platform-apps" name="category" value="Cross-platform Apps" onChange={handleFormChange} />
            <label htmlFor="cross-platform-apps">Cross-platform Apps</label>
            </li>
            <li>
            <input type="checkbox" id="android-app-development" name="category" value="Android App Development" onChange={handleFormChange} />
            <label htmlFor="android-app-development">Android App Development</label>
            </li>
            <li>
            <input type="checkbox" id="ios-app-development" name="category" value="iOS App Development" onChange={handleFormChange} />
            <label htmlFor="ios-app-development">iOS App Development</label>
            </li>
            <li>
            <input type="checkbox" id="mobile-app-maintenance" name="category" value="Mobile App Maintenance" onChange={handleFormChange} />
            <label htmlFor="mobile-app-maintenance">Mobile App Maintenance</label>
            </li>
            <li>
            <input type="checkbox" id="Python Developers" name="category" value="Pyhton Developers" onChange={handleFormChange} />
            <label htmlFor="Python Developers">Python Developers</label>
            </li>
            <li>
            <input type="checkbox" id="Java Developers" name="category" value="Java Developers" onChange={handleFormChange} />
            <label htmlFor="Java Developers">Java Developers</label>
            </li>
            <li>
            <input type="checkbox" id="JavaScript Developers" name="category" value="JavaScript Developers" onChange={handleFormChange} />
            <label htmlFor="JavaScript Developers">JavaScript Developers</label>
            </li>
          </ul>
        </>
      );
    }
    if (option === 'Digital Marketing') {
      return (
        <>
          <ul>
            <li>
            <input type="checkbox" id="seo" name="category" value="Search Engine Optimization (SEO)" onChange={handleFormChange} />
            <label htmlFor="seo">Search Engine Optimization (SEO)</label>
            </li>
            <li>
            <input type="checkbox" id="sem" name="category" value="Search Engine Marketing (SEM)" onChange={handleFormChange} />
            <label htmlFor="sem">Search Engine Marketing (SEM)</label>
            </li>
            <li>
            <input type="checkbox" id="local-seo" name="category" value="Local SEO" onChange={handleFormChange} />
            <label htmlFor="local-seo">Local SEO</label>
            </li>
            <li>
            <input type="checkbox" id="ecommerce-seo" name="category" value="E-Commerce SEO" onChange={handleFormChange} />
            <label htmlFor="ecommerce-seo">E-Commerce SEO</label>
            </li>
            <li>
            <input type="checkbox" id="video-seo" name="category" value="Video SEO" onChange={handleFormChange} />
            <label htmlFor="video-seo">Video SEO</label>
            </li>
            <li>
            <input type="checkbox" id="social-media-marketing" name="category" value="Social Media Marketing" onChange={handleFormChange} />
            <label htmlFor="social-media-marketing">Social Media Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="paid-social-media" name="category" value="Paid Social Media" onChange={handleFormChange} />
            <label htmlFor="paid-social-media">Paid Social Media</label>
            </li>
            <li>
            <input type="checkbox" id="social-commerce" name="category" value="Social Commerce New" onChange={handleFormChange} />
            <label htmlFor="social-commerce">Social Commerce New</label>
            </li>
            <li>
            <input type="checkbox" id="influencer-marketing" name="category" value="Influencer Marketing" onChange={handleFormChange} />
            <label htmlFor="influencer-marketing">Influencer Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="community-management" name="category" value="Community Management" onChange={handleFormChange} />
            <label htmlFor="community-management">Community Management</label>
            </li>
            <li>
            <input type="checkbox" id="video-marketing" name="category" value="Video Marketing" onChange={handleFormChange} />
            <label htmlFor="video-marketing">Video Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="ecommerce-marketing" name="category" value="E-Commerce Marketing" onChange={handleFormChange} />
            <label htmlFor="ecommerce-marketing">E-Commerce Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="email-marketing" name="category" value="Email Marketing" onChange={handleFormChange} />
            <label htmlFor="email-marketing">Email Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="email-automations" name="category" value="Email Automations" onChange={handleFormChange} />
            <label htmlFor="email-automations">Email Automations</label>
            </li>
            <li>
            <input type="checkbox" id="guest-posting" name="category" value="Guest Posting" onChange={handleFormChange} />
            <label htmlFor="guest-posting">Guest Posting</label>
            </li>
            <li>
            <input type="checkbox" id="affiliate-marketing" name="category" value="Affiliate Marketing" onChange={handleFormChange} />
            <label htmlFor="affiliate-marketing">Affiliate Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="display-advertising" name="category" value="Display Advertising" onChange={handleFormChange} />
            <label htmlFor="display-advertising">Display Advertising</label>
            </li>
            <li>
            <input type="checkbox" id="public-relations" name="category" value="Public Relations" onChange={handleFormChange} />
            <label htmlFor="public-relations">Public Relations</label>
            </li>
            <li>
            <input type="checkbox" id="text-message-marketing" name="category" value="Text Message Marketing" onChange={handleFormChange} />
            <label htmlFor="text-message-marketing">Text Message Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="SEO" name="category" value="SEO" onChange={handleFormChange} />
            <label htmlFor="SEO">SEO</label>
            </li>
            <li>
            <input type="checkbox" id="Social Media Marketing" name="category" value="Social Media Marketing" onChange={handleFormChange} />
            <label htmlFor="Social Media Marketing">Social Media Marketing</label>
            </li>
            <li>
            <input type="checkbox" id="Video Marketing" name="category" value="Video Marketing" onChange={handleFormChange} />
            <label htmlFor="Video Marketing">Video Marketing</label>
            </li>
          </ul>
        </>
      );
    }
    if (option === 'Graphic Design') {
      return (
        <>
          <ul>
            <li>
            <input type="checkbox" id="logo-design" name="category" value="Logo Design" onChange={handleFormChange} />
            <label htmlFor="logo-design">Logo Design</label>
            </li>
            <li>
            <input type="checkbox" id="brand-style-guides" name="category" value="Brand Style Guides" onChange={handleFormChange} />
            <label htmlFor="brand-style-guides">Brand Style Guides</label>
            </li>
            <li>
            <input type="checkbox" id="business-cards-stationery" name="category" value="Business Cards & Stationery" onChange={handleFormChange} />
            <label htmlFor="business-cards-stationery">Business Cards & Stationery</label>
            </li>
            <li>
            <input type="checkbox" id="fonts-typography" name="category" value="Fonts & Typography" onChange={handleFormChange} />
            <label htmlFor="fonts-typography">Fonts & Typography</label>
            </li>
            <li>
            <input type="checkbox" id="website-design" name="category" value="Website Design" onChange={handleFormChange} />
            <label htmlFor="website-design">Website Design</label>
            </li>
            <li>
            <input type="checkbox" id="app-design" name="category" value="App Design" onChange={handleFormChange} />
            <label htmlFor="app-design">App Design</label>
            </li>
            <li>
            <input type="checkbox" id="ux-design" name="category" value="UX Design" onChange={handleFormChange} />
            <label htmlFor="ux-design">UX Design</label>
            </li>
            <li>
            <input type="checkbox" id="architecture-interior-design" name="category" value="Architecture & Interior Design" onChange={handleFormChange} />
            <label htmlFor="architecture-interior-design">Architecture & Interior Design</label>
            </li>
            <li>
            <input type="checkbox" id="landscape-design" name="category" value="Landscape Design" onChange={handleFormChange} />
            <label htmlFor="landscape-design">Landscape Design</label>
            </li>
            <li>
            <input type="checkbox" id="building-engineering" name="category" value="Building Engineering" onChange={handleFormChange} />
            <label htmlFor="building-engineering">Building Engineering</label>
            </li>
            <li>
            <input type="checkbox" id="lighting-design" name="category" value="Lighting Design" onChange={handleFormChange} />
            <label htmlFor="lighting-design">Lighting Design</label>
            </li>
            <li>
            <input type="checkbox" id="building-information-modeling" name="category" value="Building Information Modeling" onChange={handleFormChange} />
            <label htmlFor="building-information-modeling">Building Information Modeling</label>
            </li>
            <li>
            <input type="checkbox" id="landing-page-design" name="category" value="Landing Page Design" onChange={handleFormChange} />
            <label htmlFor="landing-page-design">Landing Page Design</label>
            </li>
            <li>
            <input type="checkbox" id="icon-design" name="category" value="Icon Design" onChange={handleFormChange} />
            <label htmlFor="icon-design">Icon Design</label>
            </li>
            <li>
            <input type="checkbox" id="Minimalist Logo Design" name="category" value="Minimalist Logo Design" onChange={handleFormChange} />
            <label htmlFor="Minimalist Logo Design">Minimalist Logo Design</label>
            </li>
            <li>
            <input type="checkbox" id="Illustration" name="category" value="Illustration" onChange={handleFormChange} />
            <label htmlFor="Illustration">Illustration</label>
            </li>
            <li>
            <input type="checkbox" id="Website design" name="category" value="Website design" onChange={handleFormChange} />
            <label htmlFor="Website design">Website design</label>
            </li>
          </ul>
        </>
      );
    }
    if (option === 'Video & Animation') {
      return (
        <>
          <ul>
            <li>
            <input type="checkbox" id="video-editing" name="category" value="Video Editing" onChange={handleFormChange} />
            <label htmlFor="video-editing">Video Editing</label>
            </li>
            <li>
            <input type="checkbox" id="visual-effects" name="category" value="Visual Effects" onChange={handleFormChange} />
            <label htmlFor="visual-effects">Visual Effects</label>
            </li>
            <li>
            <input type="checkbox" id="video-art" name="category" value="Video Art" onChange={handleFormChange} />
            <label htmlFor="video-art">Video Art</label>
            </li>
            <li>
            <input type="checkbox" id="intro-outro-videos" name="category" value="Intro & Outro Videos" onChange={handleFormChange} />
            <label htmlFor="intro-outro-videos">Intro & Outro Videos</label>
            </li>
            <li>
            <input type="checkbox" id="video-templates-editing" name="category" value="Video Templates Editing" onChange={handleFormChange} />
            <label htmlFor="video-templates-editing">Video Templates Editing</label>
            </li>
            <li>
            <input type="checkbox" id="subtitles-captions" name="category" value="Subtitles & Captions" onChange={handleFormChange} />
            <label htmlFor="subtitles-captions">Subtitles & Captions</label>
            </li>
            <li>
            <input type="checkbox" id="character-animation" name="category" value="Character Animation" onChange={handleFormChange} />
            <label htmlFor="character-animation">Character Animation</label>
            </li>
            <li>
            <input type="checkbox" id="animated-gifs" name="category" value="Animated GIFs" onChange={handleFormChange} />
            <label htmlFor="animated-gifs">Animated GIFs</label>
            </li>
            <li>
            <input type="checkbox" id="animation-for-kids" name="category" value="Animation for Kids" onChange={handleFormChange} />
            <label htmlFor="animation-for-kids">Animation for Kids</label>
            </li>
            <li>
            <input type="checkbox" id="animation-for-streamers" name="category" value="Animation for Streamers" onChange={handleFormChange} />
            <label htmlFor="animation-for-streamers">Animation for Streamers</label>
            </li>
            <li>
            <input type="checkbox" id="rigging" name="category" value="Rigging" onChange={handleFormChange} />
            <label htmlFor="rigging">Rigging</label>
            </li>
            <li>
            <input type="checkbox" id="nft-animation" name="category" value="NFT Animation" onChange={handleFormChange} />
            <label htmlFor="nft-animation">NFT Animation</label>
            </li>
            <li>
            <input type="checkbox" id="logo-animation" name="category" value="Logo Animation" onChange={handleFormChange} />
            <label htmlFor="logo-animation">Logo Animation</label>
            </li>
            <li>
            <input type="checkbox" id="lottie-web-animation" name="category" value="Lottie & Web Animation" onChange={handleFormChange} />
            <label htmlFor="lottie-web-animation">Lottie & Web Animation</label>
            </li>
            <li>
            <input type="checkbox" id="text-animation" name="category" value="Text Animation" onChange={handleFormChange} />
            <label htmlFor="text-animation">Text Animation</label>
            </li>
            <li>
            <input type="checkbox" id="Social Media Video" name="category" value="Social Media Video" onChange={handleFormChange} />
            <label htmlFor="Social Media Video">Social Media Video</label>
            </li>
            <li>
            <input type="checkbox" id="UGC Video" name="category" value="UGC Video" onChange={handleFormChange} />
            <label htmlFor="UGC Video">UGC Video</label>
            </li>
          </ul>
        </>
      );
    }
  };

  const handleSubmit = async () => {
    console.log(formData);
  };

  const sendOtp = async () =>{
    const resp = await fetch(uri + "/onboard_seller/send-otp?email=");
  }

  const submitForm = async ()=>{
    try{
      await fetch("http://localhost:8000/onboard",{
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(formData),
      }).then(responce=>responce.json()).then(data=>{
        if(data.success){
          navigate(data.redirect);
        }
      });
  }catch(err){
      console.log("Error : ", err);
  }
  }

  return (
    <>
      <Header />
      <div className="onboard-modal modal">
        <div className="modal-header">
          <label className={personalStatus === 1 ? 'title completed' : 'title'}>
            Personal Information
          </label>
          <div className={personalStatus === 1 ? 'line completed' : 'line'}></div>
          <label className={profStatus === 1 ? 'title completed' : 'title'}>
            Professional Information
          </label>
          {/* <div className={profStatus === 1 ? 'line completed' : 'line'}></div>
          <label className={accStatus === 1 ? 'title completed' : 'title'}>
            Account Security
          </label> */}
        </div>
        <hr></hr>
        <div className="modal-body">
          {section === 1 && (
            <div className="sections sec-1">
              <form className="personal-info-form onboard-form">
                <div className="form-inputs">
                  <input
                    type="text"
                    name="display_name"
                    value={formData.display_name}
                    onChange={handleFormChange}
                    required
                  />
                  <label>Display name</label>
                </div>
                <div className="form-inputs">
                  <textarea
                    className="desc-text"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                  <label>Description</label>
                </div>
                <div className="form-inputs">
                  <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleFormChange}
                    required
                  />
                  <label>Bio</label>
                </div>
                <div className="form-inputs">
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleFormChange}
                    required
                  />
                  <label>Languages (use commas to separate)</label>
                </div>
                <div className="form-footer">
                  <button
                    type="button"
                    onClick={() => {
                      setSection(section + 1);
                      setPersonalStatus(1);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="form-inputs file-input">
                <div className="img-div">
                  <div className="preview">
                    <img src={image}/>
                  </div>
                  <label>Profile Pic</label>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="img-input"
                  name='profile_img'
                  onChange={(e) => {
                    handleFormChange(e);
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
            </div>
          )}
          {section === 2 && (
            <div className="sections s2">
              <form className="professional-info-form onboard-form">
                <div className="form-inputs occupation">
                  Your Occupation
                  <select
                    className="selection"
                    name="domain"
                    value={formData.domain}
                    onChange={(event) => {
                      handleFormChange(event);
                      handleSelection(event);
                    }}
                  >
                    <option></option>
                    <option>Programming & Tech</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                    <option>Video & Animation</option>
                  </select>
                  {option !== '' && (
                    <div className="selc-list">
                      <div className="list-header">
                        {option === ''
                          ? ''
                          : `Choose two to five of your best skills in ${option}`}
                      </div>
                      <div className="selc-body">{selectionChange()}</div>
                    </div>
                  )}
                </div>
                <div className="form-inputs">
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleFormChange}
                    required
                  />
                  <label>Skills (use commas to separate)</label>
                </div>
                <div className="form-inputs">
                  <input
                    type="text"
                    name="personal_website"
                    value={formData.personal_website}
                    onChange={handleFormChange}
                  />
                  <label>Personal website</label>
                </div>
                <div className="form-footer">
                  <button
                    type="button"
                    onClick={() => {
                      setProfStatus(1);
                      submitForm();
                    }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* {section === 3 && (
                <div className="sections s3 account-sec">
                    <div className="section-header">
                        Account Security
                        <p>Trust and safety is a big deal in our company. Please verify your email and phone number so that we can keep your account secured</p>
                    </div>
                    <div className="section-body">
                        <div className="verify-div email-div">
                            <div className="title">
                                <div className="sub">
                                    <i className="fa fa-envelope"></i>
                                    <label>Email</label>
                                </div>
                                <input type='email' value={"dhanushns2004@gmail.com"} disabled = {true}></input>
                                {!emailStatus && (
                                  <button className="verifyBtn" onClick={()=>{
                                    setEmailStatus(true)
                                    
                                  }}>
                                    Get Otp
                                  </button>
                                )}
                                {emailStatus && (
                                  <button className="verifyBtn" onClick={()=>{

                                  }}>
                                    Verify
                                  </button>
                                )}
                            </div>
                            {emailStatus && (
                                <div className="otp-div">
                                    <input type="text"></input>
                                </div>
                            )}
                        </div>
                        <div className="verify-div number-div">
                            <div className="title">
                                <div className="sub">
                                    <i className="fa fa-phone"></i>
                                    <label>Phone</label>
                                </div>
                                <input type='number' name='phone_number'></input>
                                <button className="verifyBtn" onClick={()=>{
                                    setPhoneStatus(true)
                                    setAccStatus(1)
                                }}>
                                    {!phoneStatus ? "Get OTP" : "Verify"}
                                </button>
                            </div>
                            {phoneStatus && (
                                <div className="otp-div">
                                    <input type="text"></input>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
          )} */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OnboardSeller;
