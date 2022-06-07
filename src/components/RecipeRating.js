import React from 'react';
import { ReactComponent as IconStar } from '../icons/icon-star.svg';

const RecipeRating = ({ rating }) => {
  const printStars = () => {
    let starsContent = [];
    for (let i = 0; i < 5; i++) {
      let starClass;
      i < rating ? (starClass = 'star--on') : (starClass = 'star--off');
      starsContent.push(<IconStar className={`star ${starClass}`} />);
    }
    return starsContent;
  };

  return <div className="recipe__rating">{printStars()}</div>;
};

export default RecipeRating;
