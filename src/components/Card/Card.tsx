import React from 'react';
import { useDrag } from 'react-dnd'
import { ICard } from '../../models/Card';
import './Card.css';

const Card = (props: CardProps) => {
  const text = props.item.title;
  
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'CARD',
    item: { text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  }), []);

  return (
    <div className="card mt-2" ref={dragRef} style={{ opacity }}>
      <div className="card-header h5">
        {props.item.title}
      </div>
    </div>
  );
}

interface CardProps {
  item: ICard;
}

export default Card;
