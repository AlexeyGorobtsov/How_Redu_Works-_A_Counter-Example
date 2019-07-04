import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { counter } from './coutner';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    counter
});

export default todoApp;