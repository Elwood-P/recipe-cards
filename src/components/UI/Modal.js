import React, { useContext } from 'react';
import './Modal.css';
import IconButton from './IconButton';
import RecipeListContext from '../../store/RecipeListContext';

const Modal = () => {
  // TODO: Make into generic modal component that can accpet props to do any task

  const { isModal, setIsModal, deleteRecipeHandler } = useContext(RecipeListContext);

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close">
          <IconButton cName="" iconName={'icon-x'} clickHandler={() => setIsModal(false)} />
        </div>
        <p className="modal__text">Are you sure you want to delete this recipe? This operation can’t be undone.</p>
        <div className="modal__button-group">
          <button className="button" onClick={() => setIsModal(false)}>
            Cancel
          </button>
          <button className="button button--warning" onClick={() => deleteRecipeHandler(isModal)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
