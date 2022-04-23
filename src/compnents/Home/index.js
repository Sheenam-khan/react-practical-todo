import React, { useState, useReducer } from "react";
import Header from "./Header";
import Form from './Form'
import List from './List'
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { reducer, initialState } from './reducer'

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log("state", state)

  const submitTodo = (text, index, add) => {

    if (text) {
      dispatch({
        type: !add ? 'UPDATE' : 'ADD',
        payload: !add ? { text, index } : { text },
      })
      handleResetText()
    }
  };

  const removeTodo = index => {

    dispatch({
      type: 'DELETE',
      payload: index,
    })

  };

  const multiplDeleteTodo = () => {

    dispatch({
      type: 'DELETE_MULTIPLE'
    })

  };

  const handleChangeText = (value, index, add) => {
    console.log("handleChange", value, index, add)
    dispatch({
      type: 'SET_TEXT',
      payload: { value, index, add },
    })
  }

  const handleResetText = () => {
    dispatch({
      type: 'RESET_TEXT',
    })
  }

  const multipleSelect = (checked, index) => {
    console.log("checked", checked, index)
    if (checked)
      dispatch({
        type: 'SELECT',
        payload: index
      })
    else {
      dispatch({
        type: 'UNSELECT',
        payload: index
      })
    }
  }


  return (
    <Container>
      <Header />

      <Form submitTodo={submitTodo} field={state.field} handleChangeText={handleChangeText} handleResetText={handleResetText} />
      {state.selectedValues && state.selectedValues.length > 0 ?
        <Row className="justify-content-md-center">
          <Col>

            <Button variant="outline-danger" onClick={multiplDeleteTodo}>< i className='fa fa-trash' /></Button>

          </Col></Row> : null
      }

      {state.todos.map((todo, index) => (
        <Card key={index} style={{ width: "57%" }}>
          <Card.Body key={index}>
            <List
              key={index}
              // value={value}
              index={index}
              todo={todo}
              editTodo={handleChangeText}
              removeTodo={removeTodo}
              multipleSelect={multipleSelect}
            />
          </Card.Body>
        </Card>))}
    </Container>
  );
}

export default Index;
