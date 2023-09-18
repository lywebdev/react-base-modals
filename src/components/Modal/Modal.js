import './../../styles/modal.css';

const Modal = (props) => {
    let rootClasses = ['modal'];

    if (props.visible) {
        rootClasses.push('active');
    }

    const hideModal = () => {
        props.setVisible(false);
    }



    return (
        <div className={rootClasses.join(' ')}>
            <div className="modal__body">
                <div className="modal__title">{props.title}</div>
                <div className="modal__text">{props.text}</div>
                <div className="modal__close" onClick={hideModal}>Закрыть</div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default Modal;