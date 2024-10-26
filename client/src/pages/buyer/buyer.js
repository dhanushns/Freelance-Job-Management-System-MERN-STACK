import React, { useEffect } from "react";
import Header from "../../components/buyer_header"
import Footer from '../../components/footer';
import RightNav from "../../components/rightNav";
import { Link } from "react-router-dom";

import Main from '../main';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import banner from '../../assets/images/pt_banner.jpg';

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
    },[data,navigate]);

    return(
        <>
        <Header/>
        <RightNav/>
        <div className="banner-modal modal">
            <div className="modal-header">
                <h2>Welcome to JobSync, {data.firstname}</h2>
            </div>
            <div className="modal-body">
                <div className="body-header">
                    <span>RECOMMENDED FOR YOU</span>
                </div>
                <div className="body-content">
                    <div className="left-childs">
                        {/* <div className="l1">

                        </div> */}
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
            <img src={banner}></img>
        </div>
        <div style={{marginTop:"100px"}}></div>
        <Main/>
        <Footer/>
        </>
    )
}

export default Buyer;