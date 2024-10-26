import React from "react";
import Header from '../components/header'
import Footer from '../components/footer';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registration(){

    const [showRegForm,setRegForm] = useState(true);
    const [selected,setSelect] = useState(0);
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstname : '',
        lastname : '',
        username : '',
        email : '',
        role : '',
        password : '',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        setRegForm(false);
    }

    const handleSelection = (button) =>{
        setSelect(button);
        document.getElementById("finalBtn").disabled = false;
    }

    const handleChange = (e)=>{
        setFormData(
            {...formData,
                [e.target.name]:e.target.value
            },
        );
    };

    const submitUserData = async (e) =>{
        e.preventDefault();
        let userRole;
        if(selected === 1){
            userRole = "buyer";
        }
        else {
            userRole = "seller";
        }

        try{
            await fetch("http://localhost:8000/signup",{
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify({
                    ...formData,
                    role:userRole,
                }),
            }).then(response=>response.json()).then(data=>{
                if(data.success){
                    navigate(data.redirect);
                }
                else{
                    alert("Error");
                    navigate("/");
                }
            });
        }catch(err){
            console.log("Error : ", err);
        }

    }

    return(
        <>
        <Header/>
       {showRegForm && (
         <div className="reg-modal" id = "reg">
         <div className="modal-header">
             <h3>JobSync Sign up</h3>
             <hr></hr>
         </div>
         <form className="modal-body ref-form" id = "regForm" onSubmit={handleSubmit}>
             <div className="form-inputs">
                 <div className="form-childs c1">
                    <input
                        type = "text"
                        name = "firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    >
                    </input>
                     <label>Firstname</label>
                 </div>
                 <div className="form-childs c2">
                    <input
                        type = "text"
                        name = "lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    >
                    </input>
                    <label>Lastname</label>
                 </div>
             </div>
             <div className="form-inputs">
                <input
                    type = "text"
                    name = "username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                >
                </input>
                <label>Username</label>
             </div>
             <div className="form-inputs">
                <input
                    type = "email"
                    name = "email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                >
                </input>
                <label>Email</label>
             </div>
             <div className="form-inputs">
                <input
                    type = "password"
                    name = "password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
             </div>
             <div className="form-footer">
                 <button type="submit">Create Account</button>
             </div>
         </form>
     </div>
       ) }

        {!showRegForm && (
            <div className="userType-modal" id = "userTypeForm">
            <div className="modal-body">
                <div className="modal-header">
                    <h3 className="title">Dhanush, your account has been <span className="green-txt">created!</span> What brings you to JobSync?</h3>
                    <span className="sub-txt">We want to tailor your experience so you'll feel right at home</span>
                </div>
                <form className="userTypes" onSubmit={submitUserData}>
                    <div className="form-body">
                    <div className="section s1" id = "buyer" onClick={()=> handleSelection(1)}
                        style = {{
                            border : selected === 1 ? "2px solid black" : ""
                        }}>
                        <div className="section-body">
                            <div className="section-img">

                            </div>
                            <div className="section-footer">
                                <h5 className="footer-title">Buying freelance services</h5>
                                <label className="footer-sub">I'm looking for talented people to work with</label>
                            </div>
                        </div>
                    </div>
                    <div className="section s1" id = "seller" onClick={()=>handleSelection(2)}
                    style = {{
                        border : selected === 2 ? "2px solid black" : ""
                    }}>
                        <div className="section-body">
                            <div className="section-img">

                            </div>
                            <div className="section-footer">
                                <h5 className="footer-title">Selling freelance service</h5>
                                <label className="footer-sub">I'd like to offer my services</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="form-footer">
                        <button className="btn" type="submit" id = "finalBtn" disabled = {true}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
        )}
        <Footer/>
        </>
    )
}

export default Registration;