import get from '../util.js';

export const SET_GITHUB_INFO = 'SET_GITHUB_INFO';

const setGitHubInfo = (info) => ({
  type: SET_GITHUB_INFO,
  payload: info
});
export const setFirstView = () => dispatch =>
  dispatch(setGitHubInfo({ firstView: false }));

export const setKeyword = info => (dispatch) => {
	dispatch(setGitHubInfo({ keyword: info }));

}
export const setLoading = info => setGitHubInfo({ loading: info });

export const getUserByKeyword = () => (dispatch, getState) => {
	const keyword = getState().github.keyword;
  dispatch(setLoading(true));
  dispatch(setFirstView());
  const url = `https://api.github.com/search/users?q=${keyword}`;
  get(url).then((data) => {
  	dispatch(setLoading(false));
    if (data) {
    	dispatch(setGitHubInfo({ list: data.items }));
    }}).catch((error) => {
    	dispatch(setLoading(false));
      console.error(error);
    });
}