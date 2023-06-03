import Typewriter from 'typewriter-effect';


import "./App.css"



const NameAnimation = (props)=>{

    const name = props.name;

     return (<Typewriter 
      id = "something"
        skipAddStyles={true}
        onInit={(typewriter) => {
          typewriter.typeString(`It's ${name[0]} ${name[1]}`)
            .start();
        }}
      />)
}

export default NameAnimation