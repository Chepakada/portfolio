import React from 'react'
import "../styles/styles.css"
import Keyword from './Keyword';
import {v4 as uuidv4} from "uuid";


const Project = (props)=>{
    const specs = props.specs;
    const image = specs.image;
    const title = specs.title;
    const content = specs.content;
    const url = specs.url;
    const keywords = specs.keywords;
    
    
    


    return (
        <div className='projectCard'>
            <div className='linkGit'><a href= {url} target="_blank" rel = "noreferrer"><img src = "https://github.com/Chepakada/portfolio/blob/master/src/components/images/github.png?raw=true" id = "imgIcon" alt = {title}/></a></div>
            <img src = {image} alt = {title}/>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className="keywords">
                {keywords.map((key)=>{
                    return(
                        <div>
                            <Keyword word = {key} key = {uuidv4()}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )

}

export default Project;