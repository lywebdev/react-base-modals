const Button = (props) => {
    return (
        <span className={`btn ${props.classes}`} id={props.id}>{props.children}</span>
    );
}

export default Button;