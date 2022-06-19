import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import RecipeListProvider from './store/RecipeListProvider';
import './styles/normalize.css';
import './styles/vars.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeListProvider>
      <App />
    </RecipeListProvider>
  </React.StrictMode>
);