import React , {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const LoginForm = () => {
    const init = {
        name: '',
        password: '',
        
    }
    let navigate = useNavigate()
    const [formData, setData] = useState(init)
    const [formError, setFormError] = useState({})
    const [invalid, setInvalid] = useState()
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
        
        if (Object.keys(validate(formData)).length === 0  ) {
            var data = JSON.parse(localStorage.getItem('data'))
            if (data?.name != formData?.name || data?.password != formData?.password){
                setInvalid('invalid credentials')
            }
            else{
                navigate('/',{ replace: true })
            }

        }

    }

    const validate = (values) => {
        let error = {}
       
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       
        if (!values.name) {
            error.name = "Enter Name"
        }
        if (!values.password) {
            error.password = "Enter password"
        }
        else if (!regexPass.test(values.password)) {
            error.password = "Please strengthen the password";
        }
       
        return error
    }
   
    return (
        <div className='signup__form'>
            <Container>
                <Row>
                    <Col lg={2} md={2} xs={12}></Col>
                    <Col lg={8} md={8} xs={12}>
                        <h1 >Login Form</h1>
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
                                className='input-custom-css' placeholder='Password'
                                onChange={handleChange}
                                name='password'
                                value={formData.password}
                            />
                            <p className='error-msg'>{formError.password}</p>
                            <p className='error-msg'>{invalid}</p>
                            <button className='btn-submit'>Submit</button>
                        </form>
                        <Link to='/signup'>Singup</Link>
                    </Col>
                    <Col lg={8} md={2} xs={12}></Col>
                </Row>
            </Container>

        </div>
    )
}

export default LoginForm