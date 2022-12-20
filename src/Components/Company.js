import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Navbar from './Navbar/Navbar'
import {Link} from 'react-router-dom'

const Company = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Container style={{height:"100vh"}}>
                <Row>
                    <Col  lg={2}></Col>
                    <Col  lg={8} className='company-details-box'>
                        <div className='company-details'>
                            <h2><b>Company: </b>M8 IT Solutions Pvt Ltd</h2>
                            <p><b>Address: </b> 3rd Floor, Vue Grande, 339, Chinnaswamy Road, Siddhapudur, Balasundaram Layout, B.K.R Nagar, Coimbatore, Tamil Nadu 641044</p>
                            <h5><b>Phone: </b>1231231233</h5>
                            <h5><b>Email: </b> abc@gmail.com</h5>

                            <Link to='/'>Home</Link>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Company