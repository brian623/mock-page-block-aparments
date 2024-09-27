// src/pages/ZonesDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { zones } from '../data/zones';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';

const ZonesDetail = () => {
  const { id } = useParams();
  const zone = zones.find((item) => item.id === parseInt(id));

  const [showAlert, setShowAlert] = useState(false);

  if (!zone) {
    return (
      <Container className="mt-4">
        <h2>Zona No Encontrada</h2>
        <Link to="/">
          <Button variant="secondary">Volver al Inicio</Button>
        </Link>
      </Container>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para manejar la reserva, como enviar datos a un backend
    setShowAlert(true);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{zone.name}</Card.Title>
          <Card.Text>{zone.description}</Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" required />
            </Form.Group>
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Fecha de Reserva</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Agendar
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="success" className="mt-3">
              ¡Reserva realizada con éxito!
            </Alert>
          )}
          <Link to="/" className="mt-3 d-block">
            <Button variant="secondary">Volver al Inicio</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ZonesDetail;
