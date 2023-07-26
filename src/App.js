import logo from './logo.svg';
import './App.css';

import 
{firstName, lastName, projectCards, experienceCards, positions, email}
from './components/constants'
import NameAnimation from './Welcome';
import Project from './components/Project';
import ParticlesComponent from './components/Particles';
import Experience from './components/Experience';
import ContactForm from './components/contact';

function App() {
  var position_text = "";

  positions.map((position)=>{position_text +=` ${position} |`});

  return (
    <div className="App">
      <ParticlesComponent className = "background"/>
      <div id='contents'>
        <h1>Hey There!</h1>
        <h2><NameAnimation name = {[firstName, lastName]}/></h2>
        <h3>{position_text}</h3>
        

        
      </div>
      <div id = "content">
        <div id = "experiences">
          <h2>Experiences</h2>
          {
            experienceCards.map((experience) =>{
              return(
              <Experience specs = {experience} id = {experience.contents}/>
            )})
          }
        </div>
        <br></br>
        
        <h2>Projects</h2>
          
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

