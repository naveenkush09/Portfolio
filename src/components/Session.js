import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
function Session() {
    return (
        <div className='container-fluid'>
            <footer className='row row-cols-1 row-cols-sm-3 row-cols-md-5  my-2 border-top'>
                <div className='col-md-4'>
                    <p className='text-body-secondary'>
                        <span>© 2024</span>
                    </p>

                </div>

                <div className='col-md-4 p-2'>

                    <button className='m-1'><Link href='#' className='nav-link p-0 btn-primary'>Home</Link></button>
                    <button className='m-1'><Link href='#' className='nav-link p-0 text-body-primary'>Projects</Link></button>
                    <button className='m-1'><Link href='#' className='nav-link p-0 text-body-primary'>About</Link></button>
                    <button className='m-1'><Link href='#' className='nav-link p-0 text-body-primary'>Contact</Link></button>
                </div>

                <div className='col-md-4 text-center'>
                <button type="button" className='btn btn-link fs-2' ><Link to='https://www.facebook.com/login/'><BsFacebook /></Link></button>
                            <button type="button" className='btn btn-link fs-2 '><Link to='https://www.linkedin.com/in/naveen-kumar-kushwaha-a0049a236/'><BsLinkedin /></Link></button>
                            <button type="button" className='btn btn-link fs-2'><Link to='https://github.com/naveenkush09'><BsGithub /></Link></button>
                            <button type="button" className='btn btn-link fs-2'><Link to='https://www.instagram.com/'></Link><BsInstagram /></button>

                </div>
            </footer>
        </div>
    )
}

export default Session