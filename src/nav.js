import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

  const [showNavDisp,setShowNavDisp] = useState(false)

  const menu = (
    <nav>
      <div className="menu" onClick={()=>{handleOpen()}} >
        <div></div><div></div><div></div>
      </div>
    </nav>
  )

  const navDisp = (
    <div className="display">
      <b className="x" onClick={()=>handleClose()}>&times;</b>
      <Link className="a" to="/" onClick={()=>handleClose()}>
        <h1>Home</h1>
      </Link>
      <Link className="a" to="/about" onClick={()=>handleClose()}>              
        <h1>About</h1> 
      </Link>
      <Link className="a" to="/project" onClick={()=>handleClose()}>                       
        <h1>Projects</h1>          
      </Link>
      <Link className="a" to="/contact" onClick={()=>handleClose()}>                         
        <h1>Contact</h1>     
      </Link>
    </div>
  )

  const handleOpen = () => {
    setShowNavDisp(true)
  }

  const handleClose = () =>{
    setShowNavDisp(false)
  }

  return (
    <div>
      {!showNavDisp && menu}
      {showNavDisp && navDisp}
    </div>
  )
}

export default Nav
