import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserveRocket } from '../../redux/rockets/rockets';

const ListItem = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReserveRocket(id));
  };

  let button;
  if (reserved) {
    button = (
      <button type="button" onClick={() => cancelReserve(id)} className="cancel-button">
        Cancel Reservation
      </button>
    );
  } else {
    button = (
      <button type="button" onClick={() => reserve(id)} className="reserve-button">
        Reserve Reservation
      </button>
    );
  }

  return (
    <li key={id} className="list-item">
      <img src={image} alt={name} />
      <div className="list-desc">
        <h2>{name}</h2>
        <p>{description}</p>
        {button}
      </div>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
