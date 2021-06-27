import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import ReactPlayer from 'react-player';

function Video() {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        controls='true'                                              
                    />
                    
                </div>
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
            </div>
        </div>
    );
}

export default Video;

/*
<ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='50%'
          height='50%'
        />
*/