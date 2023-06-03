import React from "react";
import "./styles/styles.css"

const Experience = (props) =>{
    const specs = props.specs;
    const title = specs.title;
    const employer= specs.employer;
    const contents = specs.contents;

    return (
        <div className="experience">
            <h2>{title}</h2>
            <p>{employer}</p>
           {
            contents.map((content) =>{
                return(
                <li key = {content}>{content}</li>)
            })
           }
        </div>
    )
}

export default Experience;