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
                  <h4>About Me</h4>
                  <p>My name is Victor Omuya. I am a Graduate of Comuputer Science from a Nigerian Higher
                      Institution and a trained Software Engineer. I have several years of experience building web applications with python,
                      as well as using react.js for building responsive frontend. Contact me for full-stack, backend and frontend 
                      developement jobs. 
                  </p>
              </div>

          <div className='myproject'><h4>Projects</h4></div>
      </div>
          <div className='items'>
            {items}
          </div>
      </app>
      <Footer darkMode={darkMode}/>
     </div> 
  );
}

export default App;
