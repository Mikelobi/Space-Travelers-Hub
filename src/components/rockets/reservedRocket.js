import { useSelector } from 'react-redux';

const ReservedRocket = () => {
  const rocketList = useSelector((state) => state.rockets.list);
  const reservedList = rocketList.filter((item) => item.reserved === true);

  const list = reservedList.map((item) => <li key={item.id}>{item.name}</li>);

  return <ul>{list}</ul>;
};

export default ReservedRocket;
