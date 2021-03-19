import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../Constants';
import { IList } from '../../models/List';
import Card from '../Card/Card';
import './List.css';

const List = (props: ListProps) => {

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      props.onMoveHandler(item, props.cards.id);
    }
  }));

  return (
    <div className="card List full-height" ref={drop}>
      <div className="card-header">
        <div className="card-title label label-primary">{props.cards.name}</div>
      </div>
      <div className="card-body">
        <div className="columns">
          {props.cards.list
            && props.cards.list.map((card, i) => (
              <div className="col-12" key={`card${i}`}>
                <Card item={card} />
              </div>)
            )}
        </div>
      </div>
    </div>
  );
}
interface ListProps {
  cards: IList;
  onMoveHandler: any;
}

export default List;
