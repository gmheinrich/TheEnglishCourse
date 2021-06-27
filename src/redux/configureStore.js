import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Lessons } from './lessons';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            lessons: Lessons
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}