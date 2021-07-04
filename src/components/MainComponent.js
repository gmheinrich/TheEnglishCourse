import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Profile from './ProfileComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLessons } from '../redux/ActionCreators';
import Lessons from './LessonsComponent';
import LessonDetail from './LessonDetailComponent';
import Listening from './ListeningComponent';

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

        const LessonWithId = ({match}) => {
            return(
                <LessonDetail lesson={this.props.lessons.lessons.filter((lesson) => lesson._id === match.params.lessonId)[0]}
                isLoading={this.props.lessons.isLoading}
                errMess={this.props.lessons.errMess}
                />
            );
        }

        const ListeningWithId = ({match}) => {
            return(
                <Listening lesson={this.props.lessons.lessons.filter((lesson) => lesson._id === match.params.lessonId)[0]}
                isLoading={this.props.lessons.isLoading}
                errMess={this.props.lessons.errMess}
                />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={ () => <Home/> } />
                    <Route exact path="/lessons" component={() => <Lessons lessons={this.props.lessons} />} />
                    <Route path="/lessons/:lessonId" component={LessonWithId} />
                    <Route path="/listening/:lessonId" component={ListeningWithId} />
                    <Route exact path="/aboutus" component={ () => <About/> } />
                    <Route exact path="/profile" component={ () => <Profile/> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 