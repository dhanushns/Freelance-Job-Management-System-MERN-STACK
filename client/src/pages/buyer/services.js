import React from 'react';
import Header from '../../components/buyer_header';
import Footer from '../../components/footer';
import RightNav from '../../components/rightNav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

//imgaes
import pt1 from '../../assets/images/pt/1.png';
import pt2 from '../../assets/images/pt/2.png';
import pt3 from '../../assets/images/pt/3.png';
import pt4 from '../../assets/images/pt/4.png';
import gd1 from '../../assets/images/gd/1.png';
import gd2 from '../../assets/images/gd/2.png';
import gd3 from '../../assets/images/gd/3.png';
import dm1 from '../../assets/images/dm/1.png';
import dm2 from '../../assets/images/dm/2.png';
import dm3 from '../../assets/images/dm/3.png';

import ico1 from '../../assets/images/pt/python.png'
import ico2 from '../../assets/images/pt/java.png'
import ico3 from '../../assets/images/pt/JavaScript.png'

import ico4 from '../../assets/images/gd/d1.png';
import ico5 from '../../assets/images/gd/d2.jpg';
import ico6 from '../../assets/images/gd/d3.png';

import ico7 from '../../assets/images/dm/d1.png';
import ico8 from '../../assets/images/dm/d2.png';
import ico9 from '../../assets/images/dm/d3.png';

import ico10 from '../../assets/images/va/d1.png';
import ico11 from '../../assets/images/va/d2.png';
import ico12 from '../../assets/images/va/d3.png';

import pt_banner from '../../assets/images/pt_banner.jpg';
import gd_banner from '../../assets/images/gd_banner.jpg';
import dm_banner from '../../assets/images/dm_banner.jpg';
import va_banner from '../../assets/images/va_banner.jpg';

import va1 from '../../assets/images/va/1.png';
import va2 from '../../assets/images/va/2.png';
import va3 from '../../assets/images/va/3.png';

function Services(){

    const navigate = useNavigate();

    const location = useLocation();
    
    const data = new URLSearchParams(location.search).get('key');

    const [service,setService] = useState(data);

    const handlePage = (e)=>{
        const data = e.target.value;
        console.log(data);
        navigate("/buyer/services/category?key="+data);
    }

    return(
        <>
        <Header/>
        <RightNav/>
        
        <main>
            {service === 'pt' && (
                <>
                    <div className='categories-banner-modal modal'>
                        <div className='modal-body'>
                            <div className='modal-header'>
                                <h2 className='title'>Programming & Tech</h2><br></br>
                                <span className='sub'>You think it. A programmer develops it.</span>
                            </div>
                            <div className='body-content'>
                                <button>How JobSync Works</button>
                            </div>
                            <img src={pt_banner}></img>
                        </div>
                    </div>

                    {/* Popular Tech Starts Here*/}
                    <div className='domainList-modal modal' style={{marginTop: "50px"}}>
                        <div className='modal-header'>
                            <h2>Most Popular in Programming & Tech</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Python Developer' src={ico1}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Python Developers">
                                    <div className="hide-decorations list-title">Python Developers</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Java Developer' src={ico2}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="JavaScript Developers">
                                    <div className="hide-decorations list-title">Java Developer</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='JavaScript Developer' src={ico3}></img>
                                </div>
                                <button  className='domain-title' onClick={handlePage} value="JavaScript Developers">
                                    <div className="hide-decorations list-title">JavaScript Developers</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Popular Tech Ends Here*/}

                    {/* Explore Content Starts Here */}
                    <div className='explore-modal modal'>
                        <div className='modal-header'>
                            <h2>Explore Programming & Tech</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='exp e1'>
                                <div className='img-div'>
                                    <img src={pt1}></img>
                                </div>
                                <div className='links'>
                                    <ul>
                                        <li><button className='exp-links' value='Website Development' onClick={handlePage}>Website Development</button></li>
                                        <li><button className='exp-links' value='Website Maintenance' onClick={handlePage}>Website Maintenance</button></li>
                                        <li><button className='exp-links' value='WordPress' onClick={handlePage}>WordPress</button></li>
                                        <li><button className='exp-links' value='Shopify' onClick={handlePage}>Shopify</button></li>
                                        <li><button className='exp-links' value='Custom Websites' onClick={handlePage}>Custom Websites</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={pt3}></img>
                                </div>
                                <div className='links'>
                                <ul>
                                    <li><button className='exp-links' value='Web Applications' onClick={handlePage}>Web Applications</button></li>
                                    <li><button className='exp-links' value='Desktop Applications' onClick={handlePage}>Desktop Applications</button></li>
                                    <li><button className='exp-links' value='Game Development' onClick={handlePage}>Game Development</button></li>
                                    <li><button className='exp-links' value='Chatbot Development' onClick={handlePage}>Chatbot Development</button></li>
                                    <li><button className='exp-links' value='Browser Extensions' onClick={handlePage}>Browser Extensions</button></li>
                                </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={pt2}></img>
                                </div>
                                <div className='links'>
                                <ul>
                                    <li><button className='exp-links' value='Software Development' onClick={handlePage}>Software Development</button></li>
                                    <li><button className='exp-links' value='AI Development' onClick={handlePage}>AI Development</button></li>
                                    <li><button className='exp-links' value='APIs & Integrations' onClick={handlePage}>APIs & Integrations</button></li>
                                    <li><button className='exp-links' value='Scripting' onClick={handlePage}>Scripting</button></li>
                                    <li><button className='exp-links' value='Plugins Development' onClick={handlePage}>Plugins Development</button></li>
                                </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={pt4}></img>
                                </div>
                                <div className='links'>
                                <ul>
                                    <li><button className='exp-links' value='Mobile App Development' onClick={handlePage}>Mobile App Development</button></li>
                                    <li><button className='exp-links' value='Cross-platform Apps' onClick={handlePage}>Cross-platform Apps</button></li>
                                    <li><button className='exp-links' value='Android App Development' onClick={handlePage}>Android App Development</button></li>
                                    <li><button className='exp-links' value='iOS App Development' onClick={handlePage}>iOS App Development</button></li>
                                    <li><button className='exp-links' value='Mobile App Maintenance' onClick={handlePage}>Mobile App Maintenance</button></li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Explore Content Ends Here */}
                </>
            )}
            {service === 'gd' && (
                <>
                    <div className='categories-banner-modal modal'>
                        <div className='modal-body'>
                            <div className='modal-header'>
                                <h2 className='title'>Graphic & Design</h2><br></br>
                                <span className='sub'>Designs to make you stand out.</span>
                            </div>
                            <div className='body-content'>
                                <button>How JobSync Works</button>
                            </div>
                            <img src={gd_banner}></img>
                        </div>
                    </div>

                    {/* Popular Tech Starts Here*/}
                    <div className='domainList-modal modal' style={{marginTop:"50px"}}>
                        <div className='modal-header'>
                            <h2>Most popular in Graphics & Design</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Minimalist Logo Design' src={ico4}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Minimalist Logo Design">
                                    <div className="hide-decorations list-title">Minimalist Logo Design</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Illustration' src={ico5}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Illustration">
                                    <div className="hide-decorations list-title">Illustration</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Website design' src={ico6}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Website design">
                                    <div className="hide-decorations list-title">Website design</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* Popular Tech Ends Here*/}

                    {/* Explore Content Starts Here */}
                    <div className='explore-modal modal'>
                        <div className='modal-header'>
                            <h2>Explore Graphics & Design</h2>
                        </div>
                        <div className='modal-body'>
                            <div className="exp e1">
                                <div className="img-div">
                                <img src={gd1}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Logo Design" onClick={handlePage}>Logo Design</button></li>
                                        <li><button className="exp-links" value="Brand Style Guides" onClick={handlePage}>Brand Style Guides</button></li>
                                        <li><button className="exp-links" value="Business Cards & Stationery" onClick={handlePage}>Business Cards & Stationery</button></li>
                                        <li><button className="exp-links" value="Fonts & Typography" onClick={handlePage}>Fonts & Typography</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={gd2}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Website Design" onClick={handlePage}>Website Design</button></li>
                                        <li><button className="exp-links" value="App Design" onClick={handlePage}>App Design</button></li>
                                        <li><button className="exp-links" value="UX Design" onClick={handlePage}>UX Design</button></li>
                                        <li><button className="exp-links" value="Landing Page Design" onClick={handlePage}>Landing Page Design</button></li>
                                        <li><button className="exp-links" value="Icon Design" onClick={handlePage}>Icon Design</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={gd3}></img>
                                </div>
                                <div className="links">
                                <ul>
                                    <li><button className='exp-links' value='Architecture & Interior Design' onClick={handlePage}>Architecture & Interior Design</button></li>
                                    <li><button className='exp-links' value='Landscape Design' onClick={handlePage}>Landscape Design</button></li>
                                    <li><button className='exp-links' value='Building Engineering' onClick={handlePage}>Building Engineering</button></li>
                                    <li><button className='exp-links' value='Lighting Design' onClick={handlePage}>Lighting Design</button></li>
                                    <li><button className='exp-links' value='Building Information Modeling' onClick={handlePage}>Building Information Modeling</button></li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Explore Content Ends Here */}
                </>
            )}
            {service === 'dm' && (
                <>
                    <div className='categories-banner-modal modal'>
                        <div className='modal-body'>
                            <div className='modal-header'>
                                <h2 className='title'>Digital Marketing</h2><br></br>
                                <span className='sub'>Build your brand. Grow your business.</span>
                            </div>
                            <div className='body-content'>
                                <button>How JobSync Works</button>
                            </div>
                            <img src={dm_banner}></img>
                        </div>
                    </div>

                    {/* Popular Tech Starts Here*/}
                    <div className='domainList-modal modal' style={{marginTop:"50px"}}>
                        <div className='modal-header'>
                            <h2>Most popular in Digital Marketing</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='SEO' src={ico7}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="SEO">
                                    <div className="hide-decorations list-title">SEO</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Social Media Marketing' src={ico8}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Social Media Marketing">
                                    <div className="hide-decorations list-title">Social Media Marketing</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Video Marketing' src={ico9}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Video Marketing">
                                    <div className="hide-decorations list-title">Video Marketing</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                        </div>


                    </div>
                    {/* Popular Tech Ends Here*/}

                    {/* Explore Content Starts Here */}
                    <div className='explore-modal modal'>
                        <div className='modal-header'>
                            <h2>Explore Digital Marketing</h2>
                        </div>
                        <div className='modal-body'>
                            <div className="exp e1">
                                <div className="img-div">
                                <img src={dm3}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Search Engine Optimization (SEO)" onClick={handlePage}>Search Engine Optimization (SEO)</button></li>
                                        <li><button className="exp-links" value="Search Engine Marketing (SEM)" onClick={handlePage}>Search Engine Marketing (SEM)</button></li>
                                        <li><button className="exp-links" value="Local SEO" onClick={handlePage}>Local SEO</button></li>
                                        <li><button className="exp-links" value="E-Commerce SEO" onClick={handlePage}>E-Commerce SEO</button></li>
                                        <li><button className="exp-links" value="Video SEO" onClick={handlePage}>Video SEO</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={dm2}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Social Media Marketing" onClick={handlePage}>Social Media Marketing</button></li>
                                        <li><button className="exp-links" value="Paid Social Media" onClick={handlePage}>Paid Social Media</button></li>
                                        <li><button className="exp-links" value="Social Commerce" onClick={handlePage}>Social Commerce</button></li>
                                        <li><button className="exp-links" value="Influencer Marketing" onClick={handlePage}>Influencer Marketing</button></li>
                                        <li><button className="exp-links" value="Community Management" onClick={handlePage}>Community Management</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                <img src={dm1}></img>
                                </div>
                                <div className="links">
                                <ul>
                                    <li><button className='exp-links' value='Marketing Strategy' onClick={handlePage}>Marketing Strategy</button></li>
                                    <li><button className='exp-links' value='Marketing Concepts & Ideation' onClick={handlePage}>Marketing Concepts & Ideation</button></li>
                                    <li><button className='exp-links' value='Marketing Advice' onClick={handlePage}>Marketing Advice</button></li>
                                    <li><button className='exp-links' value='Web Analytics' onClick={handlePage}>Web Analytics</button></li>
                                    <li><button className='exp-links' value='Conversion Rate Optimization' onClick={handlePage}>Conversion Rate Optimization (CRO)</button></li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Explore Content Ends Here */}
                </>
            )}
            {service === 'va' && (
                <>
                    <div className='categories-banner-modal modal'>
                        <div className='modal-body'>
                            <div className='modal-header'>
                                <h2 className='title'>Video & Animation</h2><br></br>
                                <span className='sub'>Bring your story to life with creative videos.</span>
                            </div>
                            <div className='body-content'>
                                <button>How JobSync Works</button>
                            </div>
                            <img src={va_banner}></img>
                        </div>
                    </div>

                    {/* Popular Tech Starts Here*/}
                    <div className='domainList-modal modal' style={{marginTop:"50px"}}>
                        <div className='modal-header'>
                            <h2>Most popular in Video & Animation</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Video Editing' src={ico10}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Video Editing">
                                    <div className="hide-decorations list-title">Video Editing</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='Social Media Video' src={ico11}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="Social Media Video">
                                    <div className="hide-decorations list-title">Social Media Video</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                            <div className='lists l1 servicesCategory'>
                                <div className='domain_img'>
                                    <img alt='UGC Video' src={ico12}></img>
                                </div>
                                <button className='domain-title' onClick={handlePage} value="UGC Vides">
                                    <div className="hide-decorations list-title">UGC Video</div>
                                    <div className='arrow'>
                                        <i className='fa fa-arrow-right'></i>
                                    </div>
                                </button>
                            </div>
                        </div>


                    </div>
                    {/* Popular Tech Ends Here*/}

                    {/* Explore Content Starts Here */}
                    <div className='explore-modal modal'>
                        <div className='modal-header'>
                            <h2>Explore Video & Animation</h2>
                        </div>
                        <div className='modal-body'>
                            <div className="exp e1">
                                <div className="img-div">
                                    <img src={va2}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Video Editing" onClick={handlePage}>Video Editing</button></li>
                                        <li><button className="exp-links" value="Visual Effects" onClick={handlePage}>Visual Effects</button></li>
                                        <li><button className="exp-links" value="Video Art" onClick={handlePage}>Video Art</button></li>
                                        <li><button className="exp-links" value="Intro & Outro Videos" onClick={handlePage}>Intro & Outro Videos</button></li>
                                        <li><button className="exp-links" value="Video Templates Editing" onClick={handlePage}>Video Templates Editing</button></li>
                                        <li><button className="exp-links" value="Subtitles & Captions" onClick={handlePage}>Subtitles & Captions</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                    <img src={va3}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Character Animation" onClick={handlePage}>Character Animation</button></li>
                                        <li><button className="exp-links" value="Animated GIFs" onClick={handlePage}>Animated GIFs</button></li>
                                        <li><button className="exp-links" value="Animation for Kids" onClick={handlePage}>Animation for Kids</button></li>
                                        <li><button className="exp-links" value="Animation for Streamers" onClick={handlePage}>Animation for Streamers</button></li>
                                        <li><button className="exp-links" value="Rigging" onClick={handlePage}>Rigging</button></li>
                                        <li><button className="exp-links" value="NFT Animation" onClick={handlePage}>NFT Animation</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='exp e1'>
                                <div className='img-div'>
                                    <img src={va1}></img>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><button className="exp-links" value="Logo Animation" onClick={handlePage}>Logo Animation</button></li>
                                        <li><button className="exp-links" value="Lottie & Web Animation" onClick={handlePage}>Lottie & Web Animation</button></li>
                                        <li><button className="exp-links" value="Text Animation" onClick={handlePage}>Text Animation</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Explore Content Ends Here */}
                </>
            )}
        </main>

        <Footer/>
        </>
    )
}

export default Services;