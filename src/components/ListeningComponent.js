import React from 'react';
import { Card, CardHeader, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function RenderVideo({lesson}) {
    return(
        <div className="col-12 col-md-6">
            <div className='player-wrapper'>
                <ReactPlayer 
                    className='react-player'
                    url={lesson.video}
                    controls='true'
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    );
}

function RenderTask({lesson}) {
    return(
        <div className="col-12 col-md-6">
            <Card style={{width:"100%", height:"80%"}}>
                <CardHeader className="bg-primary text-white">
                    Fill in the gaps
                </CardHeader>
                <CardBody className="scroll-y">
                    <p>zarasa</p>
                    <p></p>
                    <p>zarasa</p>
                    <p>mas zarasa</p>
                    <p>mucha zarasa</p>
                    <p>mas zarasa</p>
                    <p>mucha zarasa</p>
                    <p>mas zarasa</p>
                    <p>mucha zarasa</p>
                    <p>mas zarasa</p>
                    <p>mucha zarasa</p>
                    <p>muchisima zarasa</p>
                    <p>parezco Guzman</p>
                    <p>jajaja</p>
                    <p>basta de zarasa</p>
                    <p>a ver si esto <input size="5"/> funciona</p>
                    <p>a ver si esto <input size="10"/>funciona 2</p>
                    <p>joya, aca puedo poner el codigo que genero</p>    
                </CardBody>
            </Card>
        </div>
    )
}


const Listening = (props) => {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/lessons'>Lessons</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to={`/lessons/${props.lesson._id}`}>{props.lesson.name}</Link></BreadcrumbItem>
                <BreadcrumbItem active>Listening</BreadcrumbItem>
            </Breadcrumb>
            <h3>{props.lesson.name}</h3>
            <div className="row" >
                <RenderVideo lesson={props.lesson} />
                <RenderTask lesson={props.lesson} />
            </div>
        </div>
    );
}

export default Listening;