import React from 'react';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profileWapper">
            <div className="imageArea">
                <img className="profileImage" src={props.img} />
            </div>
            <div className="textArea">
                <p className="profileName">{props.name}</p>
                <p className="profileCompany">{props.company}</p>
            </div>
        </div>
    );
};

export default Profile;