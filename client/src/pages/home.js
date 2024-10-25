import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import searchBg from '../assets/images/home_search_bg.jpg';
import { Link } from 'react-router-dom';

// Icons
import dl1 from '../assets/images/domain1.png';
import dl2 from '../assets/images/domain2.png';
import web from '../assets/images/services/web.png';
import logoDesign from '../assets/images/services/logo_design.jpg';
import seo from '../assets/images/services/seo.png';
import architect from '../assets/images/services/architect.jpg';
import socialMedia from '../assets/images/services/social_media.png';
import swDev from '../assets/images/services/software_dev.png';
import videoAni from '../assets/images/services/video_ani.jpg';

function Home(){

    return(
        <>
        <Header/>
        {/* Search Bar Start Here */}
        <div className='search-container'>
            <img src = {searchBg} alt = 'search_bg_img'></img>
            <div className='search-modal'>
                <div className='modal-header'>
                    <h1>Find the right <span style={{color : "green"}}>freelance</span> service, right away</h1>
                </div>
                <div className='modal-body'>
                    <form className='search-form'>
                        <input type='text' placeholder='Search for Service...'></input>
                    </form>
                </div>
            </div>
        </div>
        {/* Search bar ends here */}

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
                    <Link className="hide-decorations list-title" to = "/services">Programming & Tech</Link>
                </div>
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
                <h2>Popular Services</h2>
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

        {/* Join Company Start Here */}
        <div className='modal join-modal'>
            <div className='modal-body'>
                <div className='join-title'>
                    <h1>Freelance services at your <span style = {{color:"green"}}>fingertips!</span></h1>
                </div>
                <div className='modal-footer'>
                    <Link className='hide-decorations join-link' to = "/">Join us</Link>
                </div>
            </div>
        </div>
        {/* Join Company Ends Here */}
        <Footer/>
        </>
    )
}

export default Home;