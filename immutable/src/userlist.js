import React, { Component } from 'react';
import User from './user'

class UserList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }

    renderUser = () => {
        const { users } = this.props;
        return users.map(
            (user) => (
                <User key={user.get('id')} user={user} />
            )
        )
    }

    render() {
        console.log('userList가 렌더링 중이에용! 구독해주세용!')
        const { renderUser } = this;
        return (
            <div>
                {renderUser()}
            </div>
        )
    }
}
export default UserList;