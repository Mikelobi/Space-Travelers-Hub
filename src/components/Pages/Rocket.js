import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../rockets/rocketList';

import './Rocket.css';

const Rocket = () => {
  // sample display
  const rocketList = useSelector((state) => state.rockets.list);
  const list = rocketList.map((item) => {
    const image = item.flickr_images[0];
    return (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        image={image}
      />
    );
  });
  return <ul className="rocket-list">{list}</ul>;
};

export default Rocket;
