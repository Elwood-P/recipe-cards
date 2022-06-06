import React from 'react';

const RecipeRating = ({ rating }) => {
  const printStars = () => {
    let starsContent = [];
    for (let i = 0; i < 5; i++) {
      let starClass;
      i < rating ? (starClass = 'star--on') : (starClass = 'star--off');
      starsContent.push(<span className={starClass}>*</span>);
    }
    return starsContent;
  };

  return <div className="recipe__rating">{printStars()}</div>;
};

export default RecipeRating;
