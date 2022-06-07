import './normalize.css';
import './App.scss';

import DUMMY_RECIPES from './data/data';
import RecipeList from './components/RecipeList';

function App() {
  const recipes = DUMMY_RECIPES;

  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
