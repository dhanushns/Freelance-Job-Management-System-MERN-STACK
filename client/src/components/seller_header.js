import React from "react";
import { Link } from "react-router-dom";

function SellerHeader(){
    return(
        <>
            <div className="header-modal">
                <div className="header-childs left-child">
                    <Link className="hide-decorations" to = "/">JobSync</Link>
                </div>
                <div className="header-childs right-child">
                    <div className="rc1 icons">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="rc3 icons">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="rc4 icons">
                        <i className="material-icons">person</i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerHeader;