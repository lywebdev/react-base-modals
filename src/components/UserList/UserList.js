import UserListItem from "./UserListItem";
import '../../styles/user-list.css';

const UserList = (props) => {
    const users = [
        {name: 'user', age: 18},
    ];

    let usersExists = users.length > 0;

    let userListItems = '';
    if (usersExists) {
        userListItems = users.map(user => (
            <UserListItem name={user.name} age={user.age} />
        ));
    }


    return (
        <div className='user-list'>
            {!usersExists && <h3>Нет пользователей</h3>}
            {/*{usersExists && `${userListItems}`}*/}
            {
                users.map(user => (
                    <UserListItem name={user.name} age={user.age} />
                ))
            }
        </div>
    );
}

export default UserList;