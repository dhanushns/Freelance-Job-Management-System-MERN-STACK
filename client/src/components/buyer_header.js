import React from "react";
import { Link } from 'react-router-dom';
import RightNav from '../components/rightNav';

function toggle_menu(){
    const btn = document.getElementById('menu');
    const nav = document.getElementById('rightNav');
    if(btn.classList.contains('fa-bars')){
        btn.classList.replace('fa-bars','fa-close');
        nav.style.width = "250px";
    }
    else{
        btn.classList.replace('fa-close','fa-bars');
        nav.style.width = "0";
    }
}

function BuyerHeader(){
    return(
        <>
            <div className="header-modal">
                <div className="header-childs left-child">
                    <Link className="hide-decorations" to = "/">JobSync</Link>
                    <form className='search-form'>
                        <input type='text' placeholder='What service are you looking for today?'></input>
                    </form>
                </div>
                <div className="header-childs right-child">
                    <div className="rc1 icons">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="rc3 icons">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="rc2 icons">
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="rc4 icons">
                        <i className="material-icons">person</i>
                    </div>
                    <div className="rc4 icons" onClick={toggle_menu}>
                        <i className="fa fa-bars" id = "menu"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyerHeader;