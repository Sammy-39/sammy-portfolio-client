import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

const Preloader = () =>{
    return(
        <div className="loader">
            <CircularProgress size="50px"/>
        </div>
    )
}

export default Preloader