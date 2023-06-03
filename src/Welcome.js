import Typewriter from 'typewriter-effect';


import "./App.css"



const NameAnimation = (props)=>{

    const name = props.name;
    console.log(name)
    console.log(name[0])
     return (<Typewriter 
      id = "something"
        skipAddStyles={true}
        onInit={(typewriter) => {
          typewriter.typeString(`${name[0]} ${name[1]}`)
            .start();
        }}
      />)
}

export default NameAnimation