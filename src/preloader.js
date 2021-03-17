import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

const Preloader = () =>{
    return(
        <div className="loader">
            <CircularProgress color="white" size="70px"/>
        </div>
    )
}

export default Preloader