// src/components/MeetingSummarySection.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { meetingSummary } from '../data/meetingSummary';
import { Link } from 'react-router-dom';

const MeetingSummarySection = () => {
  return (
    <div className='main-content'>
      <h2>Para los propietarios</h2>
      <Card bg='transparent' border="light">
        <Card.Body>
          <Card.Title>Reunión del {new Date(meetingSummary.date).toLocaleDateString()}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Temas Tratados</Card.Subtitle>
          <ul>
            {meetingSummary.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Link to="/meeting">
            <Button variant="secondary">Ver Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MeetingSummarySection;
