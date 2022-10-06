import "./card.css";

interface CardProps {
  title: string;
  cardIcon: string;
  cardContent: CardEntryProps[];
}

interface CardEntryProps {
  icon?: React.ReactNode;
  text: string;
}

const Card = (cardDetails: CardProps) => {
  const { title, cardIcon, cardContent } = cardDetails;

  return (
    <div className={title}>
      <div className={`${title}__header`}>
        <img className="icons" src={cardIcon} alt="icon" />
      </div>

      <div className={`${title}__body`}>
        {cardContent.map((entry, index) => {
          const { icon, text } = entry;
          return (
            <div className="entry" key={index}>
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
