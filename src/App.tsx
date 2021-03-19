import { useEffect, useState } from 'react';
import './App.css';
import Kanban from './components/Kanban/Kanban';
import { ICard } from './models/Card';
import { IKanban } from './models/Kanban';
import { IList } from './models/List';

const App = () => {

  const [kanban, setKanban] = useState({
    name: 'Main',
    lists: [{
      name: 'Todo',
      list: [
        { id: 1, title: 'Create layout', description: '' },
        { id: 2, title: 'Create project', description: '' },
        { id: 3, title: 'Deploy in heroku', description: '' },
        { id: 4, title: 'Hack the world', description: '' }
      ],
      id: 0
    }, {
      name: 'Progress',
      list: [
        { id: 5, title: 'Completing this project', description: '' },
        { id: 6, title: 'print "Hello, World!"', description: '' }
      ],
      id: 1
    }, {
      name: 'To Check',
      list: [
        { id: 7, title: 'The water on the gas', description: '' },
        { id: 8, title: 'Did I close the main door?', description: '' }
      ],
      id: 2
    }, {
      name: 'Completed',
      list: [
        { id: 9, title: "Have an idea!", description: '' }
      ],
      id: 3
    }]
  })

  const onMoveHandler = (item: any, id: number) => {
    let nKan = kanban;
    for (let i = 0; i < nKan.lists.length; i++) {
      const cards = kanban.lists[i];
      for (let k = 0; k < cards.list.length; k++) {
        const card = cards.list[k];
        if (card.id === item.card.id) {
          cards.list.splice(k, 1);
        }
      }
    }

    let newList = nKan.lists.find(cards => cards.id === id);
    newList?.list.push(item.card);
    setKanban(nKan);
  }

  useEffect(() => {
    console.log(kanban);
  }, [kanban])


  return (<div className="App">
    <Kanban onMoveHandler={onMoveHandler} data={kanban} />
  </div>);
}

export default App;
