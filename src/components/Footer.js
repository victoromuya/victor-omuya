import  React from 'react'


export default function Footer(props){
    return(
          <footer className={props.darkMode ? 'dark' : " " }>
            <div class="container bottom_border">
            <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Contact</h5>
          
           
            <p><i class="fa fa-location-arrow"></i> Lagos State, Nigeria </p>
            <p><i class="fa fa-phone"></i>  +234 81 664 612 32  </p>
            <p><i class="fa fa-whatsapp"></i> +234 90 999 794 61  </p>
            <p><i class="fa fa fa-envelope"></i> viczik16@gmail.com  </p>
            </div>
            <div class=" col-sm-4 col-md  col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Project List</h5>

            <ul class="footer_ul_amrc">
                <li><a href="#">traveljornal project</a></li>
                <li><a href="#">ecommerce project</a></li>
                <li><a href="#">cbt project</a></li>
                <li><a href="#">Game</a></li>
                <li><a href="#">Meme Generator</a></li>
            </ul>
           
            </div>

            <div class=" col-sm-4 col-md  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Follow me</h5>
           

            <ul class="footer_ul2_amrc">
                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>twitter  <a href="#">@the_victoromuya</a></p></li>
                <li><a href="#"><i class="fab fa-github fleft padding-right"></i> </a><p>github  <a href="https://github.com/victoromuya">https://github.com/victoromuya</a></p></li>
                <li><a href="#"><i class="fab fa-linkedin fleft padding-right"></i> </a><p>linkedin  <a href="https://www.linkedin.com/in/victor-omuya-9b6198188/">https://www.linkedin.com/in/victor-omuya-9b6198188/</a></p></li>
                
                
            </ul>
          
            </div>
            </div>
            </div>


            <div class="container">
           
            
                <p class="">Copyright @2022 | Designed With <a href="https://reactjs.org/">React.js</a>  by <a href="#">Victor Omuya</a></p>

                <ul class="social_footer_ul">
                  
                    <li><a href="http://webenlance.com"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/victor-omuya-9b6198188/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/victoromuya"><i class="fab fa-github"></i></a></li>
                </ul>
          
            </div>

        </footer>

    )
}