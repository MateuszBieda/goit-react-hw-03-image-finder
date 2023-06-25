import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onKeyDown);
  }

  render() {
    const { closeModal, url, tag } = this.props;

    return (
      <div className={css.overlay} onClick={closeModal}>
        <div>
          <img src={url} alt={tag} className={css.modal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
