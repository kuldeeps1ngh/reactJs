function Modal(props) {
    function cancelClick() {
        props.onCancel();
    }
    function confirmClick() {
        props.onConfirm();
    }
    return (
        <div className='modal'>
            <p>Are you sure ?</p>
            <button className='btn btn--alt' onClick={cancelClick}>Cancel</button>
            <button className='btn' onClick={confirmClick}>Confirm</button>
        </div>
    )
}

export default Modal;