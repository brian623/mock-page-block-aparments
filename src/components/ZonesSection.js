import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { zones } from '../data/zones';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/gi'; // Importa todos los iconos de react-icons/gi

const ZonesSection = () => {
  return (
    <div className='main-content'>
      <h2>Agenda tu espacio</h2>
      <Carousel interval={5000} controls={true} indicators={true}>
        {zones.map((zone, index) => {
          const IconComponent = Icons[zone.icon] || Icons.GiGymBag; // Selecciona el icono adecuado
          return (
            index % 4 === 0 && ( // Solo mostrar el primer elemento de cada grupo de 4
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {zones.slice(index, index + 4).map((zone) => ( // Corta el array en grupos de 4
                    <Col key={zone.id} xs={6} md={3} className="mb-4">
                      <Card className="h-100 text-center">
                        <Card.Body>
                          <IconComponent size={50} className="mb-3" />
                          <Card.Title>{zone.name}</Card.Title>
                          <Card.Text>{zone.description}</Card.Text>
                          <Link to={`/zones/${zone.id}`}>
                            <Button variant="secondary">Agendar</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            )
          );
        })}
      </Carousel>
    </div>
  );
};

export default ZonesSection;
