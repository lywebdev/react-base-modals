import './../../styles/form.css';

const Form = (props) => {
    return (
        <div className="form">
            {props.children}
        </div>
    );
}

export default Form;