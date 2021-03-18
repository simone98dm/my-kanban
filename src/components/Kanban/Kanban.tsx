import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IKanban } from '../../models/Kanban';
import List from '../List/List';
import './Kanban.css';

const Kanban = (props: KanbanProps) => (
  <div className="Kanban">
    <h1>{props.data.name}</h1>
    <div className="columns">
      <DndProvider backend={HTML5Backend}>
        {props.data.lists
          && props.data.lists.map((list, i) => {
            return (
              <div className="column col-3">
                <List cards={list} key={`list${i}`} />
              </div>)
          })}
      </DndProvider>
    </div>
  </div>
);

interface KanbanProps {
  data: IKanban;
}

export default Kanban;
