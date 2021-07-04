import React from 'react';
import { Card, CardImg, CardBody, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLesson({lesson}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={lesson.image} alt={lesson.name} />
                <CardBody>
                    <CardText>{lesson.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}

function RenderLessonDescription({lesson}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Lesson Description</h4>
            <p>{lesson.name}</p>
            <p>{lesson.category}</p>
            <p>{lesson.label}</p>
            <p>{lesson.description}</p>
            <Link to={`/listening/${lesson._id}`} >Listening Task</Link>
        </div>
    );
}

const LessonDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.lesson != null)        
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/lessons'>Lessons</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.lesson.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    <div className="col-12">
                        <h3>{props.lesson.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderLesson lesson={props.lesson} />
                    <RenderLessonDescription lesson={props.lesson} />
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}

export default LessonDetail;