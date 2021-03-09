import { Fragment } from "react";
import '../App.css'
import './load.css'


function Loading() {


    
    return(
        <Fragment>
            <div className="body loading">
            Loading page...<br />
            <i className="fas fa-spinner"></i>
            </div>
        </Fragment>
    )
}

export default Loading;