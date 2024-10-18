import React, { Fragment } from 'react'
import img from '../image/nav2.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Aboutme() {
    return (
        <Fragment>
            <div className='container-fuild scrollspy-example' data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
                <div className='row p-5' id="scrollspyHeading1">
                    <div className='col-md-6'>
                        <div className='text-center mt-3'>
                            <img src={img} className='rounded bbg'   alt='...' />
                        </div>
                    </div>
                    <div className='col-md-6 pt-5 p-3'>
                        <h4 className='text-center'>Frontend Developer</h4>
                        <h3>About me</h3>
                        <p>To work in an environment , where my skills are efficiently utilized towards the development of the
                            organization as well as personal development in the organization and where I can acquire good amount of
                            skills and knowledge for further growth in my profession.</p>
                        <div className='text-center'>
                            HTML
                            <ProgressBar animated variant="success" now={80} label={`${80}%`} />
                            CSS
                            <ProgressBar animated variant="success" now={85} label={`${85}%`} />
                            JavaScript
                            <ProgressBar animated variant="Warning" now={70} label={`${70}%`} />
                            Bootstrap 5
                            <ProgressBar animated variant="danger" now={60} label={`${60}%`} />
                            ReactJs
                            <ProgressBar animated variant="danger" now={50} label={`${50}%`} />
                            Core Java
                            <ProgressBar animated variant="success" now={85} label={`${85}%`} />
                            JDBC,Hibernate 
                            <ProgressBar animated variant="Warning" now={70} label={`${70}%`} />
                            Spring Framework
                            <ProgressBar animated variant='Warning' now={75} label={`${75}%`} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Aboutme