import CreateUserForm from "./components/CreateUserForm";
import UserList from "./components/UserList/UserList";
import './styles/app.css';
import './styles/ui.css';

function App() {
    return (
        <div id="app">
            <CreateUserForm />
            <div className="clearfix" style={{
                marginBottom: '30px'
            }}></div>
            <UserList />
        </div>
    );
}

export default App;
