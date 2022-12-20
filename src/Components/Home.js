import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
import api from './api/api'
import Navbar from './Navbar/Navbar'
import { Counter } from '../features/counter/Counter';
const Home = () => {
    // let navigate = useNavigate()
    const [data, setData] = useState()
    const retriveData = async () => {
        const res = await api.get('/todos')
        setData(res?.data)
    }
    useEffect(() => {
        retriveData();


    }, [])


    return (
        <div>
            <Navbar />
            <Container>
                <Row >
                    {
                        data?.slice(1, 20).map((item) => {
                            return (

                                <Col lg={3} md={3} xs={12} key={item.id}>
                                    <div className='data__design_box'>
                                        <h4>{item?.title}</h4>
                                    </div>
                                </Col >

                            )
                        })
                    }

                </Row>
                <Row>
                    <Col>
                    <h2 className='text-center' style={{marginTop:"50px"}}>Counter Redux</h2>
                        <Counter />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Home