import './../../styles/modal.css';

const Modal = (props) => {
    return (
        <div className='modal'>
            <div className="modal__body">
                <div className="modal__title">заголовок</div>
                <div className="modal__text">текст модалки</div>
                <div className="modal__close">Закрыть</div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default Modal;