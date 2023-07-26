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
            <a href= {url} target="_blank"><img src = "https://anamoladhikari.site/assets/github-3b4e1609.png" id = "imgIcon"/></a>
            <img src = {image} alt = {title}/>
            <h2>{title}</h2>
            <p>{content}</p>
            
        </div>
    )

}

export default Project;