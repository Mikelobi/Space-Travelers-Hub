import { useSelector } from 'react-redux';

const JoinedMission = () => {
  const missionList = useSelector((state) => state.missions);
  const joinedList = missionList.filter((mission) => mission.joined === true);

  const missionJoined = joinedList.map((mission) => (
    <li key={mission.id}>{mission.name}</li>
  ));

  return <ul>{missionJoined}</ul>;
};

export default JoinedMission;
