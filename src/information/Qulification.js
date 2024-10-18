import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { BsFillMortarboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
function Qulification() {
    useEffect(()=>{
        AOS.init({duration:1000})
})
    return (
        <div className='container' >
            <div className='row p-2'>
                <div className='col-12 text-center fw-bolder text-primary fs-1 ' >
                    QUALIFICATION & EXPERIENCES
                </div>
            </div>
            <div className='row '>
                <div className='col-md-6 p-1'>
                    <Card  className='qulifi bg-light' data-aos="fade-up">
                        <Card.Body>
                            <div className='row '>
                                <div className='col-1 fs-2'>
                                    <BsFillMortarboardFill />
                                </div>
                                <div className='col-11 '>
                                    <Card.Title className='fs-5 pt-3'>Post Graducation</Card.Title>
                                    <Card.Text>
                                        I am Pursing Master Of Computer Application in Khwaja Moinuddin Chishti Language University, Lucknow
                                    </Card.Text>
                                </div>
                            </div>
                            <Card.Footer className='text-center'>
                                <Link to='https://kmclu.ac.in/' className='btn btn-outline-primary'>Show Now</Link>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-6 p-1 '>
                    <Card className='qulifi bg-light' data-aos="fade-up">
                        <Card.Body>
                            <div className='row '>
                                <div className='col-1 fs-2'>
                                    <BsFillMortarboardFill />
                                </div>
                                <div className='col-11'>
                                    <Card.Title className='fs-5 pt-3'>Graducation</Card.Title>
                                    <Card.Text>
                                        Bachelor Of Computer Application completed in Khwaja Moinuddin Chishti Language University, Lucknow
                                    </Card.Text>
                                </div>
                            </div>
                            <Card.Footer className='text-center'>
                                <Link to='https://kmclu.ac.in/' className='btn btn-outline-primary'>Show Now</Link>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default Qulification