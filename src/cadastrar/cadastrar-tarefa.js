/* eslint-disable no-unused-vars */
import { A } from 'hookrouter';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'



function CadastrarTarefa() {
  return (
    <div>
      <h3 className='text-center'>Cadastar</h3>
      <div class='container bg-primary text-white'>
        <Form>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digitar a tarefa"
              minLength="5"
              maxLength="100"
              required></Form.Control>
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Voltar</A>
          </Form.Group>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa adicionada com sucesso
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">Continuar</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </div>
  )
}
export default CadastrarTarefa;