import React from "react";

class User extends React.Component{
    render() {
        const {user} = this.props;
        console.log(user);
        return (
        <div id='UserCard'>
            <img width='300px' src={user.avatar_url} />
            <a target="_blank" href={user.html_url}> <h3>Maribel Garcia</h3></a>
            <p>({user.login})</p>
            <p>Total Repos: {user.public_repos}</p>
            <p>Total Followers: {user.followers}</p>
        </div>
        
        );
    }
}

export default User;