import React from 'react';
import { Jumbotron, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';

function Home(props) {
    return(
        <React.Fragment>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>My Profile</h1>
                            <p>zaraza zaraza zaraza</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container">
                <div className="row row-content justify-content-md-center">
                    <div className="col-12 col-sm-6 col-md-8 col-lg-10">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">About Me</CardTitle>
                            <hr />
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>    
                            
                            <div className="text-right">
                                <Button>Edit</Button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="row row-content justify-content-md-center">
                    <div className="col-12 col-sm-6 col-md-8 col-lg-10">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">Work Experience and Education</CardTitle>
                            <hr />
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="text-right">
                                <Button>Edit</Button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="row row-content justify-content-md-center">
                    <div className="col-12 col-sm-6 col-md-8 col-lg-10">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">Career Goals</CardTitle>
                            <hr />
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="text-right">
                                <Button>Edit</Button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;