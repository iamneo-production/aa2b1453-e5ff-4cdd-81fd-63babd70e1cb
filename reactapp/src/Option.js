import React from 'react'
import {Link} from "react-router-dom"
// import Login from './Login'
// import Vlogin from './Vlogin'
import './Option.css'
function option() {
  return (
    <div id="bg">
        <br></br>
        <div className='cbox'>
           <div className='row'>
            <div className='column'>
               <Link to="/Vlogin">
                <img className="img1" src="https://cdn-icons-png.flaticon.com/128/10222/10222156.png"></img>
                <h1 className='h1'>Admin</h1>
                </Link>
                

            </div>
            <div className='column'>
                {/* <a> */}
            <Link to="/Login">
                <img className="img2" src="https://cdn-icons-png.flaticon.com/128/1992/1992516.png"></img>
                <h1 id="uo">User</h1>
                </Link>
                {/* </a> */}
            </div>
           </div>
        </div>
    </div>
  )
}

export default option