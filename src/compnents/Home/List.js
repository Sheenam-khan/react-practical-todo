import React from 'react'
import { Button, Card, Form, Row, Col } from 'react-bootstrap';



function List({ todo, index, removeTodo, editTodo, multipleSelect }) {
    return (

        <Row>

            <Col span={1}>
                <div className='d-flex'>

                    <Form.Check type="checkbox" className="input"

                        onChange={e => multipleSelect(e.target.checked, index)}
                        placeholder="Add new todo" style={{ marginRight: "20px" }} />

                    <span>{todo && todo.text}</span>
                </div>
            </Col>
            <Col>
                <div className='text-end'>

                    <Button variant="outline-primary" onClick={() => editTodo(todo.text, index, false)} style={{ marginRight: '20px' }}>< i className='fa fa-edit' /> </Button>
                    <Button variant="outline-danger" onClick={() => removeTodo(index)}>< i className='fa fa-trash' /></Button>

                </div>

            </Col>
        </Row>

    )
}

export default List