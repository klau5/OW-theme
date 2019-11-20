import React from 'react';
import icon from './images/ow-icon.png';
import './CSS/profile.css';

const ProfileCard = () => {
	return (
		<div className="profile-card">
			<div className="icon">
				<img src={icon} alt="profile icon" />
			</div>
			<div className="username">KLAU5</div>
		</div>
	);
};

export default ProfileCard;
