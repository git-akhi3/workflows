import React from 'react'
import DnDFlow from './Components/DnDflow'
import NavScrollExample from './Components/Navbar';
const App = () => {
  return (
    <div className="app">
    <div>
      <NavScrollExample/>
    </div>
    <div style={{ position:"absolute",width:"100%", height:"100%"}}>
      <DnDFlow/>
    </div>
    </div>
  )
  
};

export default App;