import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IKanban } from '../../models/Kanban';
import List from '../List/List';
import './Kanban.css';

const Kanban = (props: KanbanProps) => {

  return (
    <div className="Kanban">
      <h1>{props.data.name}</h1>
      <div className="columns">
        <DndProvider backend={HTML5Backend}>
          {props.data.lists
            && props.data.lists.map((list, i) => (
              <div className="column col-3" key={`list${i}`}>
                <List cards={list} onMoveHandler={props.onMoveHandler} />
              </div>)
            )}
        </DndProvider>
      </div>
    </div>
  );
}
interface KanbanProps {
  data: IKanban;
  onMoveHandler: any;
}

export default Kanban;
