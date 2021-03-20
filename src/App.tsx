import { useEffect, useState } from 'react';
import { getUserBoard } from './api/fakeBackend';
import './App.css';
import Kanban from './components/Kanban/Kanban';
import { IKanban } from './models/Kanban';

const App = () => {
  const [kanban, setKanban] = useState({ name: '', lists: [] } as IKanban);

  const [error, setError] = useState("");

  const onMoveHandler = (item: any, id: number) => {
    let newKanban = kanban;
    for (let i = 0; i < newKanban.lists.length; i++) {
      const cards = kanban.lists[i];
      for (let k = 0; k < cards.list.length; k++) {
        const card = cards.list[k];
        if (card.id === item.card.id) {
          cards.list.splice(k, 1);
          console.log(`remove '${card.title}' from ${cards.name}`);
        }
      }

      if (cards.id === id) {
        cards.list.push(item.card);
        console.log(`add '${item.card.title}' in ${cards.name}`);
      }
    }
    setKanban({ name: kanban.name, lists: kanban.lists });
  }

  useEffect(() => {
    if (Object.keys(kanban.lists).length !== 0) {
      localStorage.setItem('kanban', JSON.stringify(kanban));
    }
  }, [kanban])


  useEffect(() => {
    const localKanban = localStorage.getItem('kanban');
    if (localKanban) {
      setKanban(JSON.parse(localKanban));
    } else {
      getUserBoard()
        .then((result: any) => {
          setKanban(result);
        }).catch((err: string) => {
          setError(err);
        }).finally(() => {
          // end loading
        });
    }
  }, [])

  return (<div className="App">
    {error !== "" && (<h5>{error}</h5>)}
    {error === "" && (<Kanban onMoveHandler={onMoveHandler} data={kanban} />)}
  </div>);
}

export default App;
