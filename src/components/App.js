import '../styles/normalize.css';
import '../styles/vars.css';
import './App.scss';

import DUMMY_RECIPES from '../data/data';
import RecipeList from './recipes/RecipesList';

function App() {
  const recipes = DUMMY_RECIPES;

  return (
    <>
      <div className="container">
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
}

export default App;
