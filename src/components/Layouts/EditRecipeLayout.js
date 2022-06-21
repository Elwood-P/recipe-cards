import React, {useContext} from 'react';

import './EditRecipeLayout.css';
import RecipeCard from '../Recipes/RecipeCard';
import RecipeEditForm from '../Recipes/RecipeEditForm/RecipeEditForm';
import IconButton from '../UI/IconButton';
import RecipeListContext from '../../store/RecipeListContext';

const EditRecipeLayout = ({ recipe }) => {
  const {isEditing, editRecipeHandler} = useContext(RecipeListContext);
  return (
    <div className="edit-layout">
      <div className="edit-layout__card-column">
        <RecipeCard {...recipe} />
      </div>
      <div className="edit-layout__form-column">
        <RecipeEditForm {...recipe} />
      </div>
      <div className="edit-layout__close">
        <IconButton cName="icon-button--close" iconName="icon-x" clickHandler={() => {editRecipeHandler(isEditing.id)}} />
      </div>
    </div>
  );
};

export default EditRecipeLayout;
