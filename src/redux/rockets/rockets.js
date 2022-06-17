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
      let { data } = response;
      data = data.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        type: item.rocket_type,
        flickr_images: item.flickr_images,
        description: item.description,
      }));
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      // eslint-disable-next-line
      alert(error.message);
    });
};

export { fetchRockets };

export default rockets;
