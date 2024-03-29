import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function onCancelHandler() {
    setModalIsOpen(false);
  }

  function onConfirmHandler() {
    setModalIsOpen(false);
  }

    return (
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='actions'>
          <button className="btn" onClick={deleteHandler}>DELETE</button>
          </div>
          {modalIsOpen && <Modal onCancel={onCancelHandler} onConfirm={onConfirmHandler}/>}
          {modalIsOpen && <Backdrop onBackdropClick={closeModalHandler}/>}
      </div>
    )
}
export default Todo;