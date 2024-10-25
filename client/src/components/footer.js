import React from "react";

function Footer(){
    return(
        <>
            <div className="footer-modal modal">
                <div className="modal-body">
                    <div className="footer f1">
                        <div className="title">
                            <h3>Category</h3>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Programming & Technical</li>
                                <li>Graphic & Design</li>
                                <li>Digital Marketing</li>
                                <li>Video & Animation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer f2">
                        <div className="title">
                            <h3>For Clients</h3>
                        </div>
                        <div className="content">
                            <ul>
                                <li>How JobSync Works</li>
                                <li>Customer Success Stories</li>
                                <li>Trust & Safety</li>
                                <li>Quilty Guide</li>
                                <li>JobSync Guides</li>
                                <li>JobSync Answer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer f3">
                        <div className="title">
                            <h3>For Freelancers</h3>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Become a JobSync Freelancer</li>
                                <li>Become an Agency</li>
                                <li>Kickstart</li>
                                <li>Community Hub</li>
                                <li>Forum</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer f4">
                        <div className="title">
                            <h3>About Company</h3>
                        </div>
                        <div className="content">
                            <ul>
                                <li>About Fiverr</li>
                                <li>Help & Support</li>
                                <li>Social Impact</li>
                                <li>Careers</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Partnerships</li>
                                <li>Careers</li>
                                <li>Creator Network</li>
                                <li>Affiliates</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="childs left-child">
                        <div className="lc1">
                            <span>JobSync</span>
                        </div>
                        <div className="lc2">
                            <span>© JobSync International Ltd. 2024</span>
                        </div>
                    </div>
                    <div className="right-child">
                        <i class = "fa fa-instagram"></i>
                        <i class = "fa fa-facebook"></i>
                        <i class = "fa fa-linkedin"></i>
                        <i class = "fa fa-pinterest"></i>
                        <i class = "fa fa-twitter"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;