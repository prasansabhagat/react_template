import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row xs={2} md={4} lg={6}>
                    <Col><img src="https://kylin.network/logoWhite.1cfda3b9.svg"></img></Col>
                    <Col><img src="https://kylin.network/foundation.c79c05e6.png"></img></Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>Copyright: 2021 The Kylin Project. All Rights Reserved</Col>
                </Row>
                <Row xs="auto">
                    <Col><img src="https://kylin.network/link_t.62268fc8.svg"></img></Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Container>
            </div>
        )
    }
}