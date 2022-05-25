import './App.css';

import DUMMY_RECIPES from './data/data';
import Recipe from './components/Recipe';

function App() {
  const recipes = DUMMY_RECIPES;

  return (
    <>
      {recipes.map((recipe) => {
        return <Recipe {...recipe}/>;
      })}
    </>
  );
}

export default App;
