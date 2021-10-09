import React, { Component } from "react";
import './Modal.css';
import { createPortal } from 'react-dom';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    console.log(e);

    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
    };
    
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }

    };
    render() {
        const { children } = this.props;
        return createPortal(<div className="Overlay" onClick={this.handleBackdropClick}>
            <div className="Modal">{children}</div>
            
        </div>,
            MODAL_ROOT,
        );

}

}