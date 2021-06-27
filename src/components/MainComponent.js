import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Video from './VideoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLessons } from '../redux/ActionCreators';
import Lessons from './LessonsComponent';

const mapStateToProps = state => {
    return {
      lessons: state.lessons
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchLessons: () => {dispatch(fetchLessons())}
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchLessons();
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={ () => <Home/> } />
                    <Route exact path="/lessons" component={() => <Lessons lessons={this.props.lessons} />} />
                    <Route path="/video" component={ () => <Video/> } />
                    <Route exact path="/aboutus" component={ () => <About/> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 