import React, { useState } from 'react'
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
const FormIndex = ({ submitTodo, field, handleChangeText }) => {

    const { value, add, index } = field
    console.log("value in formIndex", add, index, add)

    const handleSubmit = e => {
        e.preventDefault();
        console.log("form", value, add, index)
        if (!value) return;
        submitTodo(value, index, add)
    };

    return (
        <Form onSubmit={handleSubmit} style={{ marginTop: "120px" }}>
            <Row className="justify-content-md-center" >

                <Col>
                    <Form.Group>
                        <Form.Control type="text" className="input"
                            value={value}
                            onChange={e => handleChangeText(e.target.value, index, add)}
                            placeholder="Add new todo" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary mb-3" size="large" type="submit">
                        {add ? 'ADD' : 'UPDATE'}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormIndex

FormIndex.defaultProps={
    value:''
}