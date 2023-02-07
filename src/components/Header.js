import React from 'react'
import profileimage from '../images/vicpic.jpg'

export default function Header(props){
    return (
        <section className={props.darkMode ? "dark" : ""}>
            <div className='hero'>
           
                <div className='pro-img'>
                    
                        <img src={profileimage} alt = "" className='hero-photo'/> 
                  
                    <frame className={props.darkMode ? "dark" : ""}><p>I am passionate about what I do with a very high appetite for daily growth!</p> 
                        <div className='profile-contacts'>
                            <p><i class="fa fa-location-arrow"></i> Lagos State, Nigeria </p>
                            <p><i class="fa fa-phone"></i>       +234 81 664 612 32  </p>
                            <p><i class="fa fa-whatsapp"></i>     +234 90 999 794 61  </p>
                            <p><i class="fa fa fa-envelope"></i>     viczik16@gmail.com  </p>
                        </div>
                    </frame> 
                </div>

                <div className='home-text'>
                        <div class="wrapper nine">
                            <div>
                                <h2 className='name'>VICTOR OMUYA</h2>
                                <h3 class="rotate">
                                    <span>S</span>
                                    <span>O</span>
                                    <span>F</span>
                                    <span>T</span>
                                    <span>W</span>
                                    <span>A</span>
                                    <span>R</span>
                                    <span>E</span>
                                    <span>-</span>
                                    <span> E</span>
                                    <span>N</span><span>G</span><span>I</span><span>N</span>
                                    <span>E</span>
                                    <span>E</span>
                                    <span>R</span>
                                </h3>
                            </div>
                        </div>
                </div>
                
                

            </div> 

            <div className='aboutme'>
                <h4>About Me</h4>
                <p>My name is Victor Omuya. I am Graduate of Comuputer Science from a Nigerian Higher
                    Institution and a trained Software Engineer. I have several years of experience building web applications with python,
                    as well as using react for building responsive frontend. Contact me for full stack, backend or frontend 
                    developement jobs. 
                </p>
            </div>

            <div className='myproject'><h4>Projects</h4></div>

             
        </section>
    )
}