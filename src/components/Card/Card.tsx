import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Constants';
import { ICard } from '../../models/Card';
import Badge from '../Badge/Badge';
import './Card.css';

const Card = (props: CardProps) => {
  const card = props.item;

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { card },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    }),
  }), []);

  return (
    <div className="card mt-2" ref={dragRef} style={{ opacity }}>
      <div className="card-header h4">
        <Badge text={`${props.item.id}`} /> <br/> 
        {props.item.title}
      </div>
    </div>
  );
}

interface CardProps {
  item: ICard;
}

export default Card;
