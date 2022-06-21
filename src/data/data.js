const DUMMY_RECIPES = [
  {
    id: '742e2ab2-f09b-4a1b-a135-e1fb6d8c60c3',
    name: 'French Omlette',
    rating: 5,
    cookTime: '0:05',
    servings: 1,
    instructions: [
      { id: '7ef0b5e6-e76a-4bf5-8741-674d293eb17a', text: 'Beat eggs in bowl & season.' },
      { id: 'a7918fdc-dc26-11ec-a98d-8709245222df', text: 'Heat 20cm non-stick frying-pan.' },
      { id: 'h7918fdc-dc26-11ec-a98d-8709245222df', text: 'Add butter to pan. Add eggs.' },
      { id: 't7918fdc-dc26-11ec-a98d-870924hg12df', text: 'Beat for 1 minute.' },
      { id: 'a791913a-dc26-11ec-a98e-23c0cb1eecd6', text: 'Tilt pan, roll omlette & serve.' },
    ],
    ingredients: [
      { id: 'a791916c-dc26-11ec-a98f-db4e2aea59a9', name: 'Eggs', amount: '2' },
      { id: 'b81f70e4-dc26-11ec-bc5d-bf66d13f3daa', name: 'Butter', amount: '1 knob' },
      { id: 'b81f70e4-dc26-11ec-315d-bf66d13f3daa', name: 'Salt & Pepper', amount: 'To taste' }
    ],
  },
  {
    id: 'b81f71ca-dc26-11ec-bc5e-3fb8f3805862',
    name: 'Delicious Chicken',
    rating: 4,
    cookTime: '1:30',
    servings: 5,
    instructions: [
      { id: 'b81f71e8-dc26-11ec-bc5f-6f43a9d3ed0b', text: 'Heat oven to 180°C.' },
      { id: 'b81f7206-dc26-11ec-bc60-779f83183660', text: 'Add delicious seasoning to chicken.' },
      { id: 'b81f7224-dc26-11ec-bc61-0bd4d5397ee1', text: 'Put Chicken in oven for 75 minutes.' },
      { id: 't81f7214-dc26-11ec-bc61-0bd4d5397ee1', text: 'Enjoy delicious chicken.' },
    ],
    ingredients: [
      { id: 'b81f7242-dc26-11ec-bc62-bf5a14a4b583', name: 'Chicken', amount: '3kg' },
      { id: 'b81f7260-dc26-11ec-bc63-b343698b50e4', name: 'Delicous seasoning', amount: '3 sprinkles' },
    ],
  },
];

export default DUMMY_RECIPES;
