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
            <div><a href= {url} target="_blank"><img src = "https://github.com/Chepakada/portfolio/blob/master/src/components/images/github.png?raw=true" id = "imgIcon"/></a></div>
            <img src = {image} alt = {title}/>
            <h2>{title}</h2>
            <p>{content}</p>
            
        </div>
    )

}

export default Project;