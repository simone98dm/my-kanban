import { useState } from 'react';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Constants';
import { ICard } from '../../models/Card';
import Badge from '../Badge/Badge';
import Form from '../Form/Form';
import './Card.css';

const Card = (props: CardProps) => {
  const card = props.item;
  const [showEditForm, setShowEditForm] = useState(false);

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { card },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    }),
  }), []);

  const toggleEdit = (e: any, status: boolean) => {
    e.stopPropagation();
    setShowEditForm(status);
  }

  const onTitleChange = (title: string) => {
    props.onTitleChange({ newTitle: title, id: card.id });
  }

  return (
    <div className="card mt-2" ref={dragRef} style={{ opacity }} onClick={(e) => toggleEdit(e, false)}>
      <div className="card-header">
        <Badge text={`${props.item.id}`} /> <br />

        {!showEditForm && <h4 onClick={(e) => toggleEdit(e, true)}>{props.item.title}</h4>}
        {showEditForm && <div onClick={(e) => toggleEdit(e, true)}><Form title={card.title} onTitleChange={onTitleChange} /></div>}

      </div>
    </div>
  );
}

interface CardProps {
  item: ICard;
  onTitleChange: any;
}

export default Card;
