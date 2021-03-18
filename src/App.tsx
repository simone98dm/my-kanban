import React from 'react';
import './App.css';
import Kanban from './components/Kanban/Kanban';
import { ICard } from './models/Card';
import { IKanban } from './models/Kanban';
import { IList } from './models/List';

const App = () => {
  const todoList: ICard[] = [
    { title: 'Create layout', description: '' },
    { title: 'Create project', description: '' },
    { title: 'Deploy in heroku', description: '' },
    { title: 'Hack the world', description: '' }
  ];
  const progressList: ICard[] = [
    { title: 'Completing this project', description: '' },
    { title: 'print "Hello, World!"', description: '' }
  ];
  const toCheckList: ICard[] = [
    { title: 'The water on the gas', description: '' },
    { title: 'Did I close the main door?', description: '' }
  ];
  const completedList: ICard[] = [
    { title: "Have an idea!", description: '' }
  ];

  const lists: IList[] = [{
    name: 'Todo',
    list: todoList
  }, {
    name: 'Progress',
    list: progressList
  }, {
    name: 'To Check',
    list: toCheckList
  }, {
    name: 'Completed',
    list: completedList
  }]

  const kanban: IKanban = {
    name: 'Main',
    lists: lists
  }

  return (
    <div className="App">
      <Kanban data={kanban} />
    </div>
  );
}

export default App;
