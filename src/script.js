import React from "react";
import './style.css'
import {Fa500Px} from "react-icons/fa";
import  {FaAmazon} from "react-icons/fa";
import { DiApple} from "react-icons/di";

const Introduction=()=>{
    return(
        <div>
        <h1 className="head">What i have learn in react</h1>
        <p>React is a javascript library</p>
        <h1 className="head">How intrest it is</h1>
        <p>React is a very intresting framework because you dont need to create many files like html and css</p>
        <Fa500Px className="icon"/>
        <FaAmazon className="icon"/>
        <DiApple className="icon"/> 

        <img className="img" src="https://res.cloudinary.com/dokxjg6yv/image/upload/v1688098333/cld-sample-4.jpg"></img>                                                                
        </div>

    )
}
export default Introduction;