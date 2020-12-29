import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {

  return ReactDOM.createPortal(
    <div
      // onDismiss is a prop from the parent component
      onClick={props.onDismiss}
      className='ui dimmer modals visible active'
    >
      <div
        // e.stopPropagation() stop the onClick event from the upper element to bubble downt to the elements
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >

        <i onClick={props.onDismiss} className='close icon'></i>
        <div className='header'>{props.title}</div>
        <div className='content'>
          {props.content}
        </div>
        <div className='actions'>
          {props.actions}
        </div>
      </div>

    </div>,
    document.querySelector("#signUpModal")
  )

}

export default Modal;