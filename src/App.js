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
          {items}
      </app>
      <Footer darkMode={darkMode}/>
     </div> 
  );
}

export default App;
