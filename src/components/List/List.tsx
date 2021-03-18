import React from 'react';
import { useDrop } from 'react-dnd';
import { IList } from '../../models/List';
import Card from '../Card/Card';
import './List.css';

const List = (props: ListProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    hover(item) { },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  console.log(canDrop, isOver)

  return (
    <div className="card List full-height">
      <div className="card-header">
        <div className="card-title label label-rounded label-primary">{props.cards.name}</div>
      </div>
      <div className="card-body" >
        <div className="columns" ref={drop}>
          {props.cards.list
            && props.cards.list.map((card, i) => {
              return (<div className="col-12">
                <Card item={card} key={`card${i}`} />
              </div>)
            })}
        </div>
      </div>
    </div>
  );
}
interface ListProps {
  cards: IList;
}

export default List;
