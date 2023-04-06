# Recipe Cards

> A React-based project showcasing a recipe management application that allows users to add, edit, and delete recipes while persisting data in Local Storage. One of several projects undertaken to expand my knowledge of React.  
> [View Project Live](https://elwoodp-recipe-cards.netlify.app/)

## Key Features
- Dynamic component rendering and interactivity, such as adding, editing, and deleting recipes
- State management using `useState`
- Local Storage for state persistence across sessions
- React Context and Provider pattern for efficient data sharing across components
- `useEffect` hook for handling side effects, such as synchronisation with Local Storage and scrolling cards into view
- DOM node manipulation with `useRef` and `requestAnimationFrame` for scrolling effect
- Continuous Deployment to Netlify

## Technologies
- React
- Create React App
- Netlify

## Setup
```shell
# Run local server
$ npm start

# Publish changes to netlify
$ git push origin main
```

## Todo
- [ ] Refactor provider code - cleanup using custom hooks and useReducer
- [ ] UI improvements
  - [ ] Add focus to input when adding ingredient/instruction
  - [ ] Change "X" to trash icon (also used to close window)
  - [ ] Reorder cards with drag and drop
  - [ ] Add search/filter/tags
- [ ] Component Improvements
  - [ ] Improve Modal component to be made multi-purpose (pass message/button handlers as props)
  - [ ] Move buttons to their own component
- [ ] Add responsive CSS
- [ ] Store data in database