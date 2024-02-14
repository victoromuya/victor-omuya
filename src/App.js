import React from 'react'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import Footer from './components/Footer.js'
import data from './data.js'


function App() {

  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
      setDarkMode(prevMode => !prevMode)
  }


  const items = data.map(function(item){
    return (
      <Card
        key = {item.id}
        item={item}
        darkMode= {darkMode}
        />
    )
  })

  return ( 
    <div className="App">
      <Navbar darkMode= {darkMode} toggleDarkMode={toggleDarkMode}/>
      <Header darkMode= {darkMode}/>

      <app className={darkMode ? "dark" : ""}>
      <div className='details'>
          <div className='aboutme'>
            <br />
                  <h4>About Me</h4>
                  <p>I am Victor Omuya. A Graduate of Comuputer Science from a Nigerian Higher
                      Institution. I am a trained, certified and practising Data Scientist/Analyst. I have several years of experience in exploring, cleaning, analyzing
                      mining and visualizing data. I am also skilled in machine learning, Natural Language Processing, Computer Vision and Web Scraping. I am available for 
                    data science, data analysis and data engineering roles. 
                  </p>
              </div>

          <div className='myproject'>
            <h4>Projects</h4>
          </div>
      </div>
          <div className='itemparent'>
            <div className='items col-lg-12'>
              {items}
            </div>
          </div>
      </app>
      <Footer darkMode={darkMode}/>
     </div> 
  );
}

export default App;
