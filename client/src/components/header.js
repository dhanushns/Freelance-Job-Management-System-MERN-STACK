import React from "react";
import { Link } from 'react-router-dom';

function Header(){
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
                    <div className="rc1">
                        <Link className="hide-decorations" to = "/">Become a seller</Link>
                    </div>
                    <div className="rc3">
                        <Link className="hide-decorations" to= "/Login">Log in</Link>
                    </div>
                    <div className="rc2">
                        <Link className="hide-decorations" to= "/Signin">Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;