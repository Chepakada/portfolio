import logo from './logo.svg';
import './App.css';


import 
{firstName, lastName, projectCards, experienceCards, positions, email}
from './components/Constants'
import NameAnimation from './Welcome';
import Project from './components/Project/Project';
import ParticlesComponent from './components/Particles';
import Experience from './components/Experience';
import ContactForm from './components/Contact';
import SocialLinks from './components/SocialIcons';
import { useEffect } from 'react';

function App() {
  var position_text = "";

  useEffect(()=>{
    document.title = "Prashant Lamichhane"
  })

  positions.map((position)=>{position_text +=` ${position} |`});

  return (
    <div className="App">
      <ParticlesComponent className = "background"/>
      <div id='contents'>
        <SocialLinks></SocialLinks>
        <div id = "topPart">
          <div id = "text">
        <h1>Hey There!</h1>
        <h2><NameAnimation name = {[firstName, lastName]}/></h2>
        <h3>{position_text}</h3>
        </div>
        <div className='proImage'>
          <img src = {"https://avatars.githubusercontent.com/u/92761252?v=4"} className = "Image"/>
        </div>
        </div>
        

        
      </div>
      <div id = "content">
        <div id = "experiences">
          <h2 className='heads'>Experiences</h2>
          {
            experienceCards.map((experience) =>{
              return(
              <Experience specs = {experience} id = {experience.contents}/>
            )})
          }
        </div>
        <br></br>
        
        <h2 className='heads'>Projects</h2>
          
          <div id = "projects">
            
          {
            projectCards.map((project)=>{
            return(
              <Project specs = {project} key = {project.title}/>
            )})
          }
          
        </div>
        <div id = "contact">
          <ContactForm email=""/>
        </div>
      </div>
    </div>
  );
}

export default App;

