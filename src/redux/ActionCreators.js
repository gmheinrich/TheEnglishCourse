import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';

export const fetchLessons = () => (dispatch) => {
    dispatch(lessonsLoading(true));

    return firestore.collection('lessons').get()
        .then(snapshot => {
            let lessons = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                lessons.push({_id, ...data });
            });
            return lessons;
        })
        .then(lessons => dispatch(addLessons(lessons)))
        .catch(error => dispatch(lessonsFailed(error.message)));
}

export const lessonsLoading = () => ({
    type: ActionTypes.LESSONS_LOADING
});

export const lessonsFailed = (errmess) => ({
    type: ActionTypes.LESSONS_FAILED,
    payload: errmess
});

export const addLessons = (lessons) => ({
    type: ActionTypes.ADD_LESSONS,
    payload: lessons
});