import React from "react"

import Footer from "./footer"
import mypic from "./img/sammy-pic.jpg"

const Contact = () =>{
    return(
        <div className="contact">
            <div className="contact-img">
                <img className="mypic" src={mypic} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Contact