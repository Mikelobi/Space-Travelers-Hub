import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  id, name, description, image,
}) => (
  <li key={id} className="list-item">
    <img src={image} alt={name} />
    <div className="list-desc">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
