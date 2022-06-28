# Recipe Cards
> 🧑‍🏫 Part of a series of practice projects to learn React.  
> View project live: https://elwoodp-recipe-cards.netlify.app/

## Skills & Concepts practiced
- State management and useState hook
- Use of local storage to persist state
- Props, Context and Provider to pass data
- useEffect and useCallback hooks
- Continuous deplotment to Netlify

## Technologies used
- React
- Create React App
- Netlify

## Setup
```
# Install dependencies
$ npm install

# Run local server
$ npm start

# Publish changes to netlify
$ git push origin main
```

## TODO
- [ ] Refactor code with focus on:
  - [ ] Seperate handler functions from the thing they are doing
  - [ ] Clean up Context (only pass handlers?)
- [ ] UI improvments
  - [ ] Add focus to input when adding ingredient/instruction
  - [ ] Change "X" to trash icon (also used to close window)
  - [ ] Reorder cards with drag and drop
  - [ ] Add tags/filter
- [ ] Component Improvements
  - [ ] Improve Modal component to be made multi-purpose (pass message/button handlers as props)
  - [ ] Move buttons to their own component