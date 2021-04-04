import React,{useState} from 'react'

import Typewriter from 'typewriter-effect'

function Card(props) {

    const styles={
        container:{
            fontFamily:"Courier New",
            backgroundColor:"#001a00",
            minWidth:"30%",
            minHeight:"50vh",  
            height:"100%", 
            float:"left", 
            margin:"20px", 
            borderWidth:"5px",
            borderColor:"#4AF626",
            borderRadius:"5px",
            padding:"10px",
            display:"flex",
            padding:"10px",
            flexDirection:"column",
        },
    
    }
    return (
        <div style={styles.container}>
            <div style={{display:"flex"}}>
                <Typewriter
                    onInit={(typewriter)=>{
                    typewriter
                        .pauseFor(5555)
                        .typeString(props.children.toString())
                        .pauseFor(1000)
                        .start();
                    }
                }/>
            </div>

            <br/>
            
            <div style={{display:"flex"}}>
                <Typewriter
                    onInit={(typewriter)=>{
                    typewriter
                        .pauseFor(7000)
                        .pasteString(props.content1 )
                        .start();
                    }
                }/>
            </div>

            <br/>
            
            <div style={{display:"flex"}}>
                <Typewriter
                    onInit={(typewriter)=>{
                    typewriter
                        .pauseFor(7000)
                        .pasteString(props.content2)
                        .start();
                    }
                }/>
            </div>
            
        </div>
    )

}



export default Card