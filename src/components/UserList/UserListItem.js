const UserListItem = (props) => {
    return (
        <div className='user-list__item'>
            <span className="user-list__name">{props.name}</span>
            <span>&nbsp;-&nbsp;</span>
            <span className="user-list__age">{props.age}</span>
        </div>
    );
}

export default UserListItem;