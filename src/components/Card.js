import React from 'react'
// import star from '../images/star.JPG'



//const name = ["anu", "kola", "tola"]

//const uppercase = name.map(function (names) { 
  //  return names[0].toUpperCase()
//})


export default function Card(props){

    let badgeText
    if (props.item.completed === 0){
        badgeText = "COMPLETED"
    }
    else if (props.item.completed === 1 ){
        badgeText = "WORK ONGOING"
    }
    
    return (
        <div className='wow fadeInUp' data-wow-delay="0.1s">
            <main className={props.darkMode ? "dark": ""}>
                <div className="card">
                    <a href={props.item.projectUrl}>
                            {badgeText && <div className='card-badge'>{badgeText}</div>}

                            <img src= {props.item.imageUrl} alt="" className='card-image'/> 
                                    <div class="middle">
                                        <div class="text">View Project</div>
                                    </div>

                            <div className='card-stats'>
                                <span>{props.item.title}</span>
                            </div>
                            <p>{props.item.description}</p>
                            
                    </a>
            
                    
            </div>
        </main>
        </div>
       
    )
}