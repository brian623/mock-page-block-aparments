// src/pages/NewsDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';
import { Container, Card, Button } from 'react-bootstrap';

const NewsDetail = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <Container className="mt-4">
        <h2>Noticia No Encontrada</h2>
        <Link to="/">
          <Button variant="secondary">Volver al Inicio</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Fecha: {new Date(article.date).toLocaleDateString()}
          </Card.Subtitle>
          <Card.Text>{article.content}</Card.Text>
          <Link to="/">
            <Button variant="secondary">Volver al Inicio</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsDetail;
