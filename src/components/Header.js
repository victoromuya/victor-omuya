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

             
        </section>
    )
}