import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import moment from 'moment';
export class NavBar extends Component {
  render() {
    
    return (
      <>
       
        {/* <nav className="navbar fixed-top  navbar-expand-lg bg-dark"> */}
        <nav className="navbar fixed-top  navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-WebApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Home</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" href="/">About</Link></li> */}
        {/* <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li> */} 
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
        
      {/* </ul> */}
      {/* {/* <div className="d-flex"> */}
       
      {/* </div> */}
      <i className="clock">{moment().format('MMMM Do YYYY, h:mm:s a')}</i>
   </div> 
</nav>
      
      </>
    )
  }
}

export default NavBar
