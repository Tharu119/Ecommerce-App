import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'

const Signin = (props) => {

    const dispatch = useDispatch();

    const userLogin=(e)=>{

        e.preventDefault();
        
        const user = {
            email:'tharu@gmail.com',
            password:'123456'
        }

        dispatch(login(user));
    }
    return (
        <Layout>
           <Container>
               <Row style={{marginTop:'50px'}}>
                   <Col md={{span: 6, offset:3}}>
                   <Form onSubmit={userLogin}>
                   <Input
                               label = "Email Address"
                               placeholder="Enter email"
                               value=""
                               type="text"
                               onChange ={()=> {} }
                               errorMessage="We'll never share your email with anyone else."
                               
                               />

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                   </Col>
               </Row>
           
           </Container>
        </Layout>
    )
}

export default Signin