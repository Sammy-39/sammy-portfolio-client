import React from 'react';
import { Link } from "react-scroll"

const MoveUp = () => {
  return(
    <Link to="root" spy={true} smooth={true} duration={1500}>
          <i className="fa fa-angle-up up"></i>
    </Link>
  )
}


export default MoveUp
