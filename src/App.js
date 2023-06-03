import logo from './logo.svg';
import './App.css';
import 
{firstName, lastName, projectCards}
from './components/constants'
import NameAnimation from './Welcome';
import Project from './components/Project';
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent className = "background"/>
      <div id='content'>
        <h1>Hey There!</h1>
        <NameAnimation name = {[firstName, lastName]}/>
        
      </div>
      <div id = "content">
      {
          projectCards.map((project)=>{
          return(
            <Project specs = {project} key = {project.title}/>
          )})
        }
      </div>
    </div>
  );
}

export default App;

