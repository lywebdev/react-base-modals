import Form from "./Form/Form";
import Button from "./UI/Button";
import {useState} from "react";

const CreateUserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {

    }

    const changeNameHandler = (event) => {
        setName(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setAge(event.target.value);
    }


    return (
        <Form>
            <div className='form__item'>
                <label>Имя</label>
                <input className='form__input' type="text" name='name' value={name} onChange={changeNameHandler} />
            </div>
            <div className='form__item'>
                <label>Возраст</label>
                <input className='form__input' type="text" name={age} value={age} onChange={changeAgeHandler} />
            </div>
            <Button id='create-user-btn' classes='success' onClick={addUserHandler}>Добавить пользователя</Button>
        </Form>
    );
}

export default CreateUserForm;