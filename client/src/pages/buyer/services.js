import React from 'react';
import Header from '../../components/buyer_header';
import Footer from '../../components/footer';
import RightNav from '../../components/rightNav';
import { Link } from 'react-router-dom';

function Services(){
    return(
        <>
        <Header/>
        <RightNav/>
        <div className='categories-banner-modal modal'>
            <div className='modal-body'>
                <div className='modal-header'>
                    <h2 className='title'>Programming & Tech</h2><br></br>
                    <span className='sub'>You think it. A programmer develops it.</span>
                </div>
                <div className='body-content'>
                    <button>How JobSync Works</button>
                </div>
            </div>
        </div>

        {/* Popular Tech Starts Here*/}
        <div className='domainList-modal modal' style={{marginTop:"50px"}}>
            <div className='modal-header'>
                <h2>Most Popular in Programming & Tech</h2>
            </div>
            <div className='modal-body'>
                <Link to = "/buyer/services/category?key=python" className='lists l1 servicesCategory'>
                    <div className='domain_img'>
                        <img></img>
                    </div>
                    <div className='domain-title'>
                        <div className="hide-decorations list-title">Python Developers</div>
                        <div className='arrow'>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </Link>
                <Link to = "/buyer/services" className='lists l1 servicesCategory'>
                    <div className='domain_img'>
                        <img></img>
                    </div>
                    <div className='domain-title'>
                        <div className="hide-decorations list-title">HTML && CSS Developers</div>
                        <div className='arrow'>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </Link>
                <Link to = "/buyer/services" className='lists l1 servicesCategory'>
                    <div className='domain_img'>
                        <img></img>
                    </div>
                    <div className='domain-title'>
                        <div className="hide-decorations list-title">Javascript Developers</div>
                        <div className='arrow'>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </Link>
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

                    </div>
                    <div className='links'>
                        <ul>
                            <li><Link className='exp-links'>Website Development</Link></li>
                            <li><Link className='exp-links'>Website Maintenance</Link></li>
                            <li><Link className='exp-links'>Word Press</Link></li>
                            <li><Link className='exp-links'>Shopify</Link></li>
                            <li><Link className='exp-links'>Custome Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='exp e1'>
                    <div className='img-div'>

                    </div>
                    <div className='links'>
                        <ul>
                            <li><Link className='exp-links'>Website Development</Link></li>
                            <li><Link className='exp-links'>Website Maintenance</Link></li>
                            <li><Link className='exp-links'>Word Press</Link></li>
                            <li><Link className='exp-links'>Shopify</Link></li>
                            <li><Link className='exp-links'>Custome Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='exp e1'>
                    <div className='img-div'>

                    </div>
                    <div className='links'>
                        <ul>
                            <li><Link className='exp-links'>Website Development</Link></li>
                            <li><Link className='exp-links'>Website Maintenance</Link></li>
                            <li><Link className='exp-links'>Word Press</Link></li>
                            <li><Link className='exp-links'>Shopify</Link></li>
                            <li><Link className='exp-links'>Custome Websites</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
         {/* Explore Content Ends Here */}

        <Footer/>
        </>
    )
}

export default Services;