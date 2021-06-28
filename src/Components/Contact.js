import React from 'react'
import gmail from './gmail.jpeg';
import linkedin from './linkedin.png';
import instagram from './instagram.jpeg';
import contact from './contact.jpeg';
import contact1 from './contact1.jpeg';
import mobile from './mobile.png'

export const Contact = () => {
    return (
        <>
        <div className="container">
        <div className="left">
            <h1 style={{transform:"translate(90px,100px)",color:"brown",fontFamily:"sans-serif",fontSize:"30px"}}>Mohammad Atif</h1>
            <h2 style={{transform:"translate(15px,70px)",color:"green",fontSize:"30px"}}>Mobile-<img src={mobile} alt="Gmail" width="30px" style={{transform:"translate(1px,10px)"}}></img>:7355612109</h2>
            <img src={contact} alt="Gmail" width="300px" style={{transform:"translate(130px,60px)"}}></img>
            <a href="mailto:sayyedmohdatif123@gmail.com">
            <img src={gmail} alt="Gmail" width="50" style={{transform:"translate(-200px,120px)",cursor:"arrow"}}></img>
            </a>
            <a href="https://www.linkedin.com/in/mohd-atif-06799a188/">
            <img src={linkedin} alt="Gmail" width="50" style={{transform:"translate(-100px,130px)",cursor:"arrow",display:"inline-block"}}></img>
            </a>
            <a href="https://www.instagram.com/mohammadatif381/">
            <img src={instagram} alt="Gmail" width="50" style={{transform:"translate(10px,130px)",cursor:"arrow",display:"inline-block"}}></img>
            </a>
        </div>
        <div className="right">
        <h1 style={{transform:"translate(30px,100px)",color:"blue",fontFamily:"sans-serif",fontSize:"30px"}}>Aman Pal Singh Rana</h1>
        <h2 style={{transform:"translate(20px,70px)",color:"green",fontSize:"30px"}}>Mobile-<img src={mobile} alt="Gmail" width="30px" style={{transform:"translate(1px,10px)"}}></img>:7706059995</h2>
            <img src={contact1} alt="Gmail" width="250px" style={{transform:"translate(110px,60px)"}}></img>
            <a href="mailto:amanpalsinghrana27@gmail.com">
            <img src={gmail} alt="Gmail" width="50" style={{transform:"translate(-120px,120px)",cursor:"arrow"}}></img>
            </a>
            <a href="https://www.linkedin.com/in/aman-pal-singh-rana-180837203/">
            <img src={linkedin} alt="Gmail" width="50" style={{transform:"translate(0px,130px)",cursor:"arrow",display:"inline-block"}}></img>
            </a>

        </div>
        </div>
        </>
    )
}
