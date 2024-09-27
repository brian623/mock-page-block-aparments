// src/pages/ZonesPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { zones } from '../data/zones';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/gi'; // Importa todos los iconos de react-icons/gi

const ZonesPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Todas las Zonas</h2>
      <Row>
        {zones.map((zone) => {
          const IconComponent = Icons[zone.icon] || Icons.GiGymBag;
          return (
            <Col key={zone.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body className="d-flex flex-column">
                  <IconComponent size={50} className="mb-3" />
                  <Card.Title>{zone.name}</Card.Title>
                  <Card.Text>{zone.description}</Card.Text>
                  <div className="mt-auto">
                    <Link to={`/zones/${zone.id}`}>
                      <Button variant="secondary">Agendar</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ZonesPage;
