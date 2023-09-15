const Button = (props) => {
    return (
        <span className={`btn ${props.classes}`} id={props.id} onClick={props.onClick}>{props.children}</span>
    );
}

export default Button;