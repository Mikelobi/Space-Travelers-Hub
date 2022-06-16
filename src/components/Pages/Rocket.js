import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  // sample display
  const rocketList = useSelector((state) => state.rockets.list);
  const list = rocketList.map((item) => (
    <div className="list-item" key={item}>
      { item.company }
    </div>
  ));
  return list;
};

export default Rocket;
