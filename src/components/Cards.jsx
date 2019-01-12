import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

class Cards extends React.Component {
    render () {
        return (
            <div class="container">
                 <Row className="mt-5">
                    <Col sm="3">
                        <Card body>
                        <CardBody>
                        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
                        </CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardBody>
                        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
                        </CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardBody>
                        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
                        </CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardBody>
                        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180w=318h=180" alt="Card image cap" />
                        </CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
 }

export default Cards;