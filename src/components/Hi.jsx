import React from "react";
import selfie from "/src/assets/selfie.jpeg"

function Hi() {
  return (
    <>
   <p>Hi there! My name is Ameenah, I am a junior software developer.I have a background in finance, psychology and education. I have a new found passion for coding and love baking !</p>
   <img src= {selfie} alt="A selfie of Ameenah"/>
   </>
  );
}
export default Hi;