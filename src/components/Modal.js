function Modal(props) {
    return (
        <div className="modal">
            <p>are you sure?</p>
            <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn" onClick={props.onConfirm}>Confirm</button>
        </div>
    )
}
export default Modal;