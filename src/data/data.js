const DUMMY_RECIPES = [
  {
    id: '742e2ab2-f09b-4a1b-a135-e1fb6d8c60c3',
    name: 'Plain Pork',
    rating: 4,
    cookTime: '0:45',
    servings: 4,
    instructions: [
      { id: '7ef0b5e6-e76a-4bf5-8741-674d293eb17a', text: 'Put parika in oven' },
      { id: 'a7918fdc-dc26-11ec-a98d-8709245222df', text: 'Put pork in oven' },
      { id: 'a791913a-dc26-11ec-a98e-23c0cb1eecd6', text: 'Eat pork' },
    ],
    ingredients: [
      { id: 'a791916c-dc26-11ec-a98f-db4e2aea59a9', name: 'Pork', amount: '3 Pounds' },
      { id: 'b81f70e4-dc26-11ec-bc5d-bf66d13f3daa', name: 'Paprika', amount: '2 Tbs' },
    ],
  },
  {
    id: 'b81f71ca-dc26-11ec-bc5e-3fb8f3805862',
    name: 'Delicious Chicken',
    rating: 3,
    cookTime: '1:45',
    servings: 5,
    instructions: [
      { id: 'b81f71e8-dc26-11ec-bc5f-6f43a9d3ed0b', text: 'Put chicken in oven' },
      { id: 'b81f7206-dc26-11ec-bc60-779f83183660', text: 'Make chicken delicious' },
      { id: 'b81f7224-dc26-11ec-bc61-0bd4d5397ee1', text: 'Eat chicken' },
    ],
    ingredients: [
      { id: 'b81f7242-dc26-11ec-bc62-bf5a14a4b583', name: 'Chicken', amount: '3 Kgs' },
      { id: 'b81f7260-dc26-11ec-bc63-b343698b50e4', name: 'Delicous seasoning', amount: '3 sprinkles' },
    ],
  },
];

export default DUMMY_RECIPES;
