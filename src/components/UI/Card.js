import './Card.css';

const Card = ({children, cName}) => {
  return (
    <div className={`card ${cName}`}>
      {children}
    </div>
  );
};

export default Card;
