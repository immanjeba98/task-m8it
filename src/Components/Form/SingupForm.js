import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingupForm = () => {
    const init = {
        name: '',
        password: '',
        email: '',
        phonenumber: '',
        profession: ''
    }
    let navigate = useNavigate();
    const [formData, setData] = useState(init)
    const [formError, setFormError] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formData))
        if (Object.keys(validate(formData)).length === 0) {
            let dataLocal = JSON.stringify(formData)
            localStorage.setItem("data", dataLocal)
            navigate('/login')
        }

    }

    const validate = (values) => {
        let error = {}
        const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const regexPhone = /^\d{10}$/
        if (!values.name) {
            error.name = "Enter Name"
        }
        if (!values.password) {
            error.password = "Enter password"
        }
        else if (!regexPass.test(values.password)) {
            error.password = "Please strengthen the password";
        }
        if (!values.email) {
            error.email = "Enter email"
        }
        else if (!regex.test(values.email)) {
            error.email = "Invalid email";
        }
        if (!values.phonenumber) {
            error.phonenumber = "Enter phone number"
        }
        else if (!regexPhone.test(values.phonenumber)) {
            error.phonenumber = "Invalid Phonenumber";
        }
        if (!values.profession) {
            error.profession = "Select Profession"
        }
        return error
    }
    const handleKeyPressNumber = (e) => {
        var key = e.key;
        var regex = /^[0-9]*$/;
        if (!regex.test(key)) {
            e.preventDefault();
            e.toUpperCase();
        }

    }
    return (
        <div className='signup__form'>
            <Container>
                <Row>
                    <Col lg={2} md={2} xs={12}></Col>
                    <Col lg={8} md={8} xs={12}>
                        <h1 >Register Form</h1>
                        <form className='form_bg' onSubmit={handleSubmit}>
                            <input
                                className='input-custom-css'
                                placeholder='Name'
                                onChange={handleChange}
                                name='name'
                                value={formData.name}
                            />
                            <p className='error-msg'>{formError.name}</p>
                            <input
                                type='password'
                                className='input-custom-css' placeholder='Password'
                                onChange={handleChange}
                                name='password'
                                value={formData.password}
                            />
                            <p className='error-msg'>{formError.password}</p>
                            <input
                                className='input-custom-css' placeholder='Email'
                                onChange={handleChange}
                                name='email'
                                value={formData.email}
                            />
                            <p className='error-msg'>{formError.email}</p>
                            <input
                                className='input-custom-css' placeholder='Phone number'
                                onChange={handleChange}
                                name='phonenumber'
                                onKeyPress={handleKeyPressNumber}
                                value={formData.phonenumber}
                            />
                            <p className='error-msg'>{formError.phonenumber}</p>
                            <select
                                className='input-custom-css'
                                onChange={handleChange}
                                name='profession'
                                value={formData.profession}>
                                <option value="" selected disabled className='text-grey'>
                                   Select profession
                                </option>
                                <option value='UI developer'>
                                    UI developer
                                </option>
                                <option value='Backend developer'>
                                    Backend developer
                                </option>
                                <option className='React developer'>
                                    React developer
                                </option>
                            </select>
                            <p className='error-msg'>{formError.profession}</p>
                            <button className='btn-submit'>Submit</button>
                        </form>
                    </Col>
                    <Col lg={8} md={2} xs={12}></Col>
                </Row>
            </Container>

        </div>
    )
}

export default SingupForm