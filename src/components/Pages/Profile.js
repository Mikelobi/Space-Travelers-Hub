import ReservedRocket from '../rockets/reservedRocket';
import JoinedMission from './joinedMission';

import './Profile.css';

const Profile = () => (
  <div className="profile">
    <div className="profile-list">
      <h2>My Missions</h2>
      <JoinedMission />
    </div>
    <div className="profile-list">
      <h2>My Rockets</h2>
      <ReservedRocket />
    </div>
  </div>
);
export default Profile;
