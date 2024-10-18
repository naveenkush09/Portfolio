import React from 'react'
import { Link } from 'react-router-dom'

function Navbars() {
  return (
    <nav className='navbar navbar-expand-sm shadow' id="navbar-example3">
      <div className='fw-bolder ps-4'>Portfolio</div>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='container-fluid ' >
        <ul className='navbar-nav collapse navbar-collapse justify-content-center ' id='navbarSupportedContent'>
          <li className='nav-item'>
            <Link className='nav-link active text-info cusnav' to='#scrollspyHeading1'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to='#scrollspyHeading2 '>About</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to='#scrollspyHeading3'>Qulification</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to='#'>Contactme</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to='#'>Client</Link>
          </li>
        </ul>
        <div className='pe-2 fw-bolder'>
        <Link class="btn btn-outline-primary" to='mailto:nkushwaha98@gmail.com' role="button" aria-disabled="true">Hire me</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbars