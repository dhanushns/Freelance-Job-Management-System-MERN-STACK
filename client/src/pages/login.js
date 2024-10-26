import React from 'react';
import '../assets/style.css'
import { Link, useAsyncValue } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email : '',
        password : ''
    });

    const handleChanges =(e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name] : e.target.value,
            }
        )
    }

    const submitForm = async (e)=>{
        e.preventDefault();
        try{
            const resp = await fetch("http://localhost:8000/login",{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(formData)
            }).then(response=>response.json()).then(data=>{
                if(data.token){
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('user',JSON.stringify(data.user));
                    navigate(data.redirectUrl);
                }
                else{
                    console.log("Login Error",data.message);
                }
            });
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <Header/>
        <div className='login-modal'>
            <div className='modal-header'>
                <h3>JobSync Log in</h3>
            </div>
            <form className='modal-body lg-form' onSubmit={submitForm}>
                <div className='form-childs c1'>
                    <input name = "email" value={formData.email} onChange={handleChanges} id = 'email' type='email' required onKeyUp={(event)=>{
                        var txt = document.getElementById(event.target.id).value;
                       if(txt != ""){
                            document.getElementById("lblEmail").classList.add('active');
                       }
                       else{
                        document.getElementById("lblEmail").classList.remove('active');
                       }
                    }}></input>
                    <label id = 'lblEmail'>Email</label>
                </div>
                <div className='form-childs c1'>
                    <input name = "password" value={formData.password} onChange={handleChanges} id = 'pass' type='password' required onKeyUp={(event)=>{
                        var txt = document.getElementById(event.target.id).value;
                        if(txt != ""){
                            document.getElementById("lblpass").classList.add('active');
                        }
                        else{
                            document.getElementById("lblpass").classList.remove('active');
                        }
                    }}></input>
                    <label id = 'lblpass'>Password</label>
                </div>
                <a className='c3'>Forget Password?</a>
                <div className='form-footer'>
                    <button type='submit'>Login</button><br></br>
                    <div className='c4'>
                        <Link to = "../Signup" className='regLink'>New User? Create Account</Link>
                    </div>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )

}

export default Login;