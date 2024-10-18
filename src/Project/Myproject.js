import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsFillMortarboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
function Myproject() {
  return (
    <div className='container-fuild m-4' id='client'>
      <div className='row p-2 '>
        <div className='col-md-4  fw-bolder text-primary fs-4'>
          About Projects
          <h4>Created Projects To Improve Workflow</h4>
        </div>
        <div className='col-md-4 p-2'>
          <Card className='qulifi bg-light'>
            <Card.Body>
              <div className='text-center fs-1'><BsFillMortarboardFill /></div>
              <Card.Title className='fs-5 pt-3'><span>College Management System</span></Card.Title>
              <Card.Text>
              <b>Project Description:</b> It is provide the searching facility based on various Factor. Such as College ,course, Batch and
              Session
              </Card.Text>

              <Card.Footer className='text-center'>
                <Link to='http://navcollege.000webhostapp.com' className='btn btn-outline-primary'>Show Now</Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4 p-2'>
          <Card className='qulifi bg-light'>
            <Card.Body >
              <div className='text-center fs-1'><BsFillMortarboardFill /></div>
              <Card.Title className='fs-5 pt-3'><span>Shoping Site</span></Card.Title>
              <Card.Text>
                I am Pursing Master Of Computer Application in Khwaja Moinuddin Chishti Language University, Lucknow
              </Card.Text>

              <Card.Footer className='text-center'>
                <Link to='' className='btn btn-outline-primary'>Show Now</Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='row p-2 '>
        <div className='col-md-4 '>

        </div>
        <div className='col-md-4 p-2'>
          <Card className='qulifi bg-light'>
            <Card.Body>
              <div className='text-center fs-1'><BsFillMortarboardFill /></div>
              <Card.Title className='fs-5 pt-3'><span>CBSE Side</span></Card.Title>
              <Card.Text>
                I am Pursing Master Of Computer Application in Khwaja Moinuddin Chishti Language University, Lucknow
              </Card.Text>

              <Card.Footer className='text-center'>
                <Link to='' className='btn btn-outline-primary'>Show Now</Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4 p-2'>
          <Card className='qulifi bg-light'>
            <Card.Body>
              <div className='text-center fs-1'><BsFillMortarboardFill /></div>
              <Card.Title className='fs-5 pt-3'><span>Pagging </span></Card.Title>
              <Card.Text>
                I am Pursing Master Of Computer Application in Khwaja Moinuddin Chishti Language University, Lucknow
              </Card.Text>

              <Card.Footer className='text-center'>
                <Link to='' className='btn btn-outline-primary'>Show Now</Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Myproject