import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RightNav(){

    const navigate = useNavigate();

    function toggle_dropBox(){
        var btn = document.getElementById('dropbox_btn');
        var dropbox = document.getElementById('dropbox');
        if(btn.classList.contains('fa-plus')){
            btn.classList.replace('fa-plus','fa-minus');
            dropbox.style.height = "max-content";
            dropbox.style.paddingTop = "20px";
        }
        else{
            btn.classList.replace('fa-minus','fa-plus');
            dropbox.style.height = 0;
            dropbox.style.paddingTop = "0"
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem("token");
            navigate("/login");
        } catch (err) {
            console.error("Logout error: ", err);
        }
    };

    return(
        <>
        <nav>
            <div className = 'rightNav' id = 'rightNav'>
                <ul className='childNavs'>
                    <li><Link to = '/buyer'>JobSync</Link></li>
                    <li><hr></hr></li>
                    <li><Link to="/Login">Profile</Link></li>
                    <li><Link to="/buyer/create_job">Create job post</Link></li>
                    <li><Link to="/buyer/my_post">Your job post</Link></li>
                    <li><hr></hr></li>
                    <li><Link to="/Login">Become a seller</Link></li>
                    <li><Link to="/Login">Settings</Link></li>
                    <li><Link to="/Login">Billing & Payment</Link></li>
                    <li><hr></hr></li>
                    <li><button style={{backgroundColor:"transparent",border:"none",fontSize:"20px"}} onClick={logout}>Logout</button></li>
                </ul>
            </div>
        </nav>
        </>
    )

}

export default RightNav;