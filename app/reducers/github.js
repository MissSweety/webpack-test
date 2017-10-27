import update from 'react-addons-update';
import { SET_GITHUB_INFO } from '../actions/github';

const initialState = {
  loading: false,
  list: [],
  firstView: true,
  keyword: '',
};

function github(state = initialState, { type, payload }) {
  if (type === SET_GITHUB_INFO) {
  	return { ...state, ...payload };
  }
  return state;
};

export default github;
