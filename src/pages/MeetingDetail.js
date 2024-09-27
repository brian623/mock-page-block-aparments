// src/pages/MeetingDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import { meetingSummary } from '../data/meetingSummary';
import { Container, Card, Button } from 'react-bootstrap';

const MeetingDetail = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Reunión del {new Date(meetingSummary.date).toLocaleDateString()}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Temas Tratados</Card.Subtitle>
          <ul>
            {meetingSummary.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Card.Subtitle className="mb-2 text-muted">Decisiones Tomadas</Card.Subtitle>
          <ul>
            {meetingSummary.decisions.map((decision, index) => (
              <li key={index}>{decision}</li>
            ))}
          </ul>
          <Link to="/">
            <Button variant="secondary">Volver al Inicio</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MeetingDetail;
