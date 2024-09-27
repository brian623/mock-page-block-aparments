import React from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { news } from '../data/news';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <div className='main-content'>
      <h2>Lo último que debes saber</h2>
      <Carousel>
        {news.slice(0, Math.ceil(news.length / 2)).map((_, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {news.slice(index * 2, index * 2 + 2).map((item) => (
                <Col key={item.id} xs={12} md={6} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.summary}</Card.Text>
                      <div className="text-end">
                        <Link to={`/news/${item.id}`}>
                          <Button variant="secondary">Leer Más</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsSection;
