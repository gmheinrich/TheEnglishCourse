import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Video from './VideoComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={ () => <Home/> } />
                    <Route path="/video" component={ () => <Video/> } />
                    <Route exact path="/aboutus" component={ () => <About/> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main; 