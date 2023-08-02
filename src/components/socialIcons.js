import React from "react";
import { socialLinks } from "./Constants";
import "./styles/styles.css"

export default function SocialLinks(){
    return(
        <div className="socialIcons">
        {socialLinks.map((media)=>{
            return(
                <div className="socialIcon">
                    <a href = {media.url}>
                    <img src = {media.logo}/>
                    </a>
                </div>
            )
        }    
    )}
    </div>
    )
}