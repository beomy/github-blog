import React, { Component } from 'react';
import { Profile } from '../../components';
import { getProfileInfo } from '../../services/profile';

class ProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc: '',
            name:'',
            company: ''
        };
    }

    componentDidMount() {
        this.fetchProfileInfo();
    }

    fetchProfileInfo = async () => {
        var profileInfo = await getProfileInfo();
        this.setState({
            imgSrc: profileInfo.data.avatar_url,
            name: profileInfo.data.name,
            company: profileInfo.data.bio
        });
    }

    render() {
        return (
            <div>
                <Profile img={this.state.imgSrc} name={this.state.name} company={this.state.company} />
            </div>
        );
    }
}

export default ProfileContainer;