import React from 'react'
import img from '../image/nav1.jpg'
import { Link } from 'react-router-dom'
import { BsFacebook, BsFillMortarboardFill, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
function Info() {
    return (
        <div className='container-fuild'>
            <div className='row p-2'>
                <div className='col-md-6 pt-5 p-3'>
                    <h3 className=' fs-4 text-danger fw-bolder ps-3'> Hello I'm </h3>
                    <h1 className='fw-bolder  text-warning '>Naveen Kumar Kushwaha</h1>
                    <p className='fw-semibold '>I am skilled and passiantate web developer with fresher in creating visually appealling and user-friendly website.</p>
                    <p className='fw-semibold  fs-6'><BsFillMortarboardFill /> "Graduated From <Link to='https://kmclu.ac.in/'> Khwaja Moinuddin Chishti Language University,Lucknow ,UP</Link>"</p>
                    <p className='fw-semibold  fs-6'><BsFillMortarboardFill /> "Post Graduate Pursing From<Link to='https://kmclu.ac.in/'> Khwaja Moinuddin Chishti Language University,Lucknow ,UP</Link>"</p>
                    <div className='row pt-3'>
                        <div className='col-md-7 '>
                            <button type="button" className='btn btn-link fs-2' ><Link to='https://www.facebook.com/login/'><BsFacebook /></Link></button>
                            <button type="button" className='btn btn-link fs-2 '><Link to='https://www.linkedin.com/in/naveen-kumar-kushwaha-a0049a236/'><BsLinkedin /></Link></button>
                            <button type="button" className='btn btn-link fs-2'><Link to='https://github.com/naveenkush09'><BsGithub /></Link></button>
                            <button type="button" className='btn btn-link fs-2'><Link to='https://www.instagram.com/'></Link><BsInstagram /></button>
                        </div>
                        <div className='col-md-5 fs-2 pt-3  '>
                            <Link class="btn btn-outline-primary" to='mailto:nkushwaha98@gmail.com' role="button" aria-disabled="true">Hire me</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-center'>
                        <img src={img} className='rounded float-start bbg'  alt='...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info 