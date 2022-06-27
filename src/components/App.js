import React, { useContext } from 'react';

import './App.css';
import RecipeListContext from '../store/RecipeListContext';
import HomeLayout from './Layouts/HomeLayout';
import EditRecipeLayout from './Layouts/EditRecipeLayout';
import Modal from './UI/Modal';
import Footer from './UI/Footer';

function App() {
  const { isEditing, isModal, recipes } = useContext(RecipeListContext);
  return (
    <>
      <div className="page">
        {!isEditing.state && <HomeLayout />}
        {isEditing.state && <EditRecipeLayout recipe={recipes[isEditing.index]} />}
      </div>
      {!isEditing.state && <Footer />}
      {isModal && <Modal />}
    </>
  );
}

export default App;
