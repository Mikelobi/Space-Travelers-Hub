import axios from 'axios';

const FETCH_DATA = 'spacestore/rockets/FETCH_DATA';
const RESERVE_ROCKET = 'spacestore/rockets/RESERVE_ROCKET';
const CANCEL_RESERVE_ROCKET = 'spacestore/rockets/CANCEL_RESERVE_ROCKET';

const initialState = {
  list: [],
};

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA,
  data,
});

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelReserveRocket = (id) => ({
  type: CANCEL_RESERVE_ROCKET,
  id,
});

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        list: [...state.list, ...action.data],
      };
    case RESERVE_ROCKET: {
      const newList = state.list.map((item) => {
        if (item.id === action.id) return { ...item, reserved: true };
        return item;
      });
      return {
        list: newList,
      };
    }
    case CANCEL_RESERVE_ROCKET: {
      const newList = state.list.map((item) => {
        if (item.id === action.id) return { ...item, reserved: false };
        return item;
      });
      return {
        list: newList,
      };
    }
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
        reserved: false,
      }));
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      alert(error.message); // eslint-disable-line
    });
};

export { fetchRockets, reserveRocket, cancelReserveRocket };

export default rockets;
