import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container"> 
        <div className="row">
            <div className="col">
               <Link to='addnewperson'> <button type="button" className="btn btn-primary m-2">Add New Person </button> </Link> 
               <Link to='retriveInfo'> <button type="button" className="btn btn-primary m-2">Retrive Information</button></Link> 
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
