import './normalize.css';
import './App.scss';

import DUMMY_RECIPES from './data/data';
import RecipeList from './components/RecipeList';

function App() {
  const recipes = DUMMY_RECIPES;

  return (
    <>
      <div className="container">
        <RecipeList recipes={recipes} />
        <button className="btn">Add Recipe</button>
      </div>
    </>
  );
}

export default App;
