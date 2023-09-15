import CreateUserForm from "./components/CreateUserForm";
import UserList from "./components/UserList/UserList";
import './styles/app.css';
import './styles/ui.css';
import {useState} from "react";
import Modal from "./components/Modal/Modal";

function App() {
    const [users, setUsers] = useState([
        {id: 1, name: 'user', age: 18},
        {id: 2, name: 'test', age: 25},
    ]);

    const addUserHandler = (newUser) => {
        setUsers((prevUsers) => {
            return [...prevUsers, newUser];
        });
    }

    const showModal = () => {
        
    }


    return (
        <div id="app">
            <Modal />
            <p onClick={showModal}>Вызвать модальное окно</p>
            <CreateUserForm addUserHandler={addUserHandler} />
            <div className="clearfix" style={{
                marginBottom: '30px'
            }}></div>
            <UserList users={users} />
        </div>
    );
}

export default App;
