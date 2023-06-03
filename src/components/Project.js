import React from 'react'
import "./styles/styles.css"

const Project = (props)=>{
    const specs = props.specs;
    const image = specs.image;
    const title = specs.title;
    const content = specs.content;
    const url = specs.url;

    return (
        <div className='projectCard'>
            <img src = {image} alt = {title}/>
            <h2>{title}</h2>
            <p>{content}</p>
            <a href= {url}>Github link</a>
        </div>
    )

}

export default Project;