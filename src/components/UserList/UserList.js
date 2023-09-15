import UserListItem from "./UserListItem";
import '../../styles/user-list.css';

const UserList = (props) => {
    let usersExists = props.users.length > 0;


    return (
        <div className='user-list'>
            {!usersExists && <h3>Нет пользователей</h3>}
            {usersExists && props.users.map(user => (
                <UserListItem key={user.id} name={user.name} age={user.age} />
            ))}
        </div>
    );
}

export default UserList;