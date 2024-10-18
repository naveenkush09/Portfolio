import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsGeoAltFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



function Contactme() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9cck28m', 'template_bu4uzsm', form.current, {
            publicKey: '9YlotfUhiWj6M0rVF',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Send SUCCESS!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='cantainer-fuild ' id='cont' >
            <div className='row'>
                <div className='col-12 text-center fw-bolder text-success fs-1'>
                    Contact us
                </div>
            </div>
            <div className='row p-2'>
                <div className='col-12 text-center fw-bolder text-success fs-1'>
                    <h5>Please fill out the form on this section to contact with me</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 offset-md-1 '>
                    <div className='row ' >
                        <div className='col-2'>
                            <div className='fs-1'>
                                <Link to=''><BsGeoAltFill /></Link>
                            </div>
                        </div>
                        <div className='col-10'>
                            <h4>Address</h4>
                            <p>PADRAUNA, KUSHINAGAR (U.P.) </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='fs-1'>
                                <Link to=''><BsTelephoneFill /></Link>
                            </div>
                        </div>
                        <div className='col-10'>
                            <h4>PHONE NO.</h4>
                            <p>9838454929</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='fs-1'>
                                <Link to=''><BsBriefcaseFill /></Link>
                            </div>
                        </div>
                        <div className='col-10'>
                            <h4>Email</h4>
                            <p>nkushwaha9838@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form ref={form} onSubmit={sendEmail} className='border border-secondary'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-1'>
                                <Form.Control size="lg" type="text" placeholder="Name" name="your_name" />
                            </div>
                            <div className='col-md-6 p-1'>
                                <Form.Control size="lg" type="email" placeholder="Email" name="your_email" />
                            </div>
                        </div>
                        <div className='row m-2'>
                            <div className='col-sm-12 p-1'>

                                <Form.Control as="textarea" placeholder="Leave a comment here" name="message" style={{ height: '100px' }} />

                            </div>
                        </div>
                        <div className='row text-center p-3 m-2'>
                            <div className='col-12'>
                                <input type='submit' className='rounded-3  btn btn-outline-primary' value='Send' />
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contactme