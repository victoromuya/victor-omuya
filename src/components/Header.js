import React from 'react'


export default function Header(props){
    return (
        <section className={props.darkMode ? "dark" : ""}>
            <div className='hero'>

                <div className='home-text'>
                        <div class="wrapper nine">
                            <div>
                                <h2 className='name'>VICTOR OMUYA</h2>
                                <h3 className="rotate">
                                    <span>D</span>
                                    <span>A</span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>-</span>
                                    <span>S</span>
                                    <span>C</span>
                                    <span>I</span>
                                    <span>E</span>
                                    <span>N</span>
                                    <span>T</span><span>I</span><span>S</span><span>T</span>
                                </h3>
                            </div>
                        </div>
                </div>
                
            </div> 

             
        </section>
    )
}