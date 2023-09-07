import  React from 'react'


export default function Footer(props){
    return(
          <footer className={props.darkMode ? 'dark' : " " }>
            <div class="container">
                <p class="">Copyright @2022 | Designed With <a href="https://reactjs.org/">React.js</a>  by <a href="#">Victor Omuya</a></p>

                <ul class="social_footer_ul">
                    <li><a href="http://twitter.com/the_victoromuya"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/victor-omuya-9b6198188/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/victoromuya"><i class="fab fa-github"></i></a></li>
                </ul>
          
            </div>

        </footer>

    )
}