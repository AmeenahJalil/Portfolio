import React from "react";
import "../App.css"

function Contact (){
 return(
    <>
    <h2>Contact Me</h2>
    <h3>If you would like to get in touch with me to learn more about my projects, or for any other queries please do! I look forward to hearing from you!</h3>
    <label>
        Full Name: <input name="myInput" />
      </label>
      <hr/>
      <label>
      Email Address: <input name="myInput" />
      </label>
      <hr/>
      <label>
      Message:  <input name="myInput" />
      </label>
      <hr/>






   
    <h2></h2>
    {/* <input>email@domain.ltd</input> */}
    <h2></h2>
    {/* <input>Please enter your message here ...</input> */}
    <button>Submit</button>
    
    </>
 )  
}
export default Contact; 