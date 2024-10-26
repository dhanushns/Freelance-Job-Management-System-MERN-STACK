import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import searchBg from '../assets/images/home_search_bg.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './main';

function Home(){

    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch('http://localhost:8000/', {
                    method: 'GET',
                    credentials:'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();

                if (data.success) {
                    navigate(data.redirectUrl);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        checkUser();
    }, [navigate]);

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

        <Main/>

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