import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLessonItem({ lesson, onClick }) {
    return(
        <Card>
            <Link to={`/lessons/${lesson._id}`} >
                <CardImg width="100%" src={lesson.image} alt={lesson.name} />
                <CardImgOverlay>
                    <CardTitle tag="h4" style={{ color: '#333', borderColor: '#333' }}>{lesson.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Lessons = (props) => {

    const lessons = props.lessons.lessons.map((lesson) => {
        return (
            <div key={lesson._id} className="col-12 col-md-5 m-1">
                <RenderLessonItem lesson={lesson} />
            </div>
        );
    });

    if (props.lessons.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <p>Loading . . .</p>
                </div>
            </div>
        );
    }
    else if (props.lessons.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.lessons.errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Lessons</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {lessons}
                </div>
            </div>
        );
}

export default Lessons;
