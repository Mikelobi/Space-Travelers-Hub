import axios from 'axios';

const FETCH_DATA = 'spacestore/rockets/FETCH_DATA';

const initialState = {
  list: [],
};

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA,
  data,
});

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        list: [...state.list, ...action.data],
      };
    default:
      return state;
  }
};

const fetchRockets = () => (dispatch) => {
  axios
    .get(baseUrl)
    .then((response) => {
      dispatch(fetchDataSuccess(response.data));
    })
    .catch((error) => {
      alert(error.message);
    });
};

export { fetchRockets };

export default rockets;
