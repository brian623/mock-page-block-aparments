// src/pages/NewsPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { news } from '../data/news';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Todas las Noticias</h2>
      <Row>
        {news.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              {/* Opcional: Agregar una imagen representativa */}
              {/* <Card.Img variant="top" src={`/images/news${item.id}.jpg`} alt={item.title} /> */}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.summary}</Card.Text>
                <div className="mt-auto text-end">
                  <Link to={`/news/${item.id}`}>
                    <Button variant="secondary">Leer Más</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsPage;
