/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import {
  getAllMissions,
  joinMission,
  leaveMission,
} from '../../redux/missions/missions';
import classes from './Missions.module.css';

const Missions = () => {
  // @ts-ignore
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    if (missions.length === 0) {
      dispatch(getAllMissions());
    }
  }, []);

  if (missions.length) {
    return (
      <section className={classes.missionsContainer}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
                <td>{mission.description}</td>
                <td>
                  {!mission.joined && <span className={`${classes.status} ${classes['non-member']}`}> Not a member </span>}
                  {mission.joined && <span className={`${classes.status} ${classes['active-member']}`}> Active member </span>}
                </td>
                <td>
                  {!mission.joined && (
                    <button
                      type="button"
                      className={`${classes.missionBtn} ${classes['join-button']}`}
                      onClick={() => {
                        dispatch(joinMission(mission.id));
                      }}
                    >
                      Join Mission
                    </button>
                  )}
                  {mission.joined && (
                    <button
                      type="button"
                      className={`${classes.missionBtn} ${classes['leave-button']}`}
                      onClick={() => {
                        dispatch(leaveMission(mission.id));
                      }}
                    >
                      Leave Mission
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    );
  }
  return (
    <>
      <p>There are no missions </p>
    </>
  );
};
export default Missions;
