# Recipe Cards
<<<<<<< HEAD

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
=======
> Part of a series of practice projects to learn React.  
> [View project live](https://elwoodp-recipe-cards.netlify.app/)
>>>>>>> 37aa86a9d808baf54577fa65e8f857650c3916c5

## Setup
```shell
# Run local server
$ npm start

# Publish changes to netlify
$ git push origin main
```

<<<<<<< HEAD
## Todo
- [ ] Refactor provider code - cleanup using custom hooks and useReducer
- [ ] UI improvements
=======
## Skills practiced
- State management and useState hook
- Use of local storage to persist state
- Props, Context and Provider to pass data
- useEffect and useCallback hooks
- Continuous deplotment to Netlify

## Technologies
- React
- Create React App
- Netlify

## Todo
- [ ] Refactor code with focus on:
  - [ ] Seperate handler functions from the thing they are doing
  - [ ] Clean up Context (only pass handlers?)
  - [ ] Potentially not good to combine states into objects?
- [ ] UI improvments
>>>>>>> 37aa86a9d808baf54577fa65e8f857650c3916c5
  - [ ] Add focus to input when adding ingredient/instruction
  - [ ] Change "X" to trash icon (also used to close window)
  - [ ] Reorder cards with drag and drop
  - [ ] Add search/filter/tags
- [ ] Component Improvements
  - [ ] Improve Modal component to be made multi-purpose (pass message/button handlers as props)
  - [ ] Move buttons to their own component
- [ ] Add responsive CSS
- [ ] Store data in database
