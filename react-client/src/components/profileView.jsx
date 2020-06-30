import React from "react";
import ReactDOM from "react-dom";

class ProfileView extends React.Component {

    render() {
        return (
            <div className="profil">
                <h3>Profile Page</h3>
                <img src="https://i.postimg.cc/xqVdQB6Q/logo-design-for-profile-picture-dessin-pour-photo-de-profil.jpg" width="150px" />
                <div className="container">
                    <h5>full name</h5>
                    <h5>date of birth</h5>
                    <h5> email</h5>
                    <h5>phone number</h5>
                    <h4>posts</h4>
                </div>
            </div>
        )
    }
}


export default ProfileView;