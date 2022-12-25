import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const OutPutData = ({data}) => {
  return (
    <Row>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={data.imageUrl} />
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {data.textData}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default OutPutData;