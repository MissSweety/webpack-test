import { combineReducers } from 'redux';
import github from './github.js';
import todolist from './todolist';

const reducer = combineReducers({
	github,
	todolist,
});

export default reducer;