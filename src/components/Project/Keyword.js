import React from "react";

export default function Keyword(props){
    const word = props.word;
    const colors = ["(255, 255, 255, 0.5)", "(0, 128, 0, 0.5)", "(0, 0, 255, 0.5)", "(255, 192, 203, 0.5)"];
    function getRandInt() {
        return Math.floor(Math.random() * 4) + 1 || 0;
      }
    
    const styles= () => {
        const color = colors[getRandInt()];
        return{
            border:`1px solid rgba${color}`,
            boxShadow: `inset 1px 5px  20px 1px  rgba${color}`,
            
    }
    }

    return(
        <div className="keyword" style={styles()}>
            <p>{word}</p>
        </div>
    )
}