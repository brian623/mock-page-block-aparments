// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsSection from './NewsSection';
import ZonesSection from './ZonesSection';
import MeetingSummarySection from './MeetingSummarySection';

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <NewsSection />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ZonesSection />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MeetingSummarySection />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
