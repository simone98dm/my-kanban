import { useEffect, useState } from 'react';
import { getUserBoard } from './api/fakeBackend';
import './App.css';
import Kanban from './components/Kanban/Kanban';
import { IKanban } from './models/Kanban';

const App = () => {
  const [kanban, setKanban] = useState({} as IKanban);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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

  const _fakeUserId = "simone98dm";

  useEffect(() => {

    setLoading(true);

    getUserBoard(_fakeUserId)
      .then((result: any) => {
        setKanban(result);
      }).catch((err: string) => {
        setError(err);
      }).finally(() => {
        setLoading(true)
      });

  }, [])


  return (<div className="App">
    {error !== "" && <h5>{error}</h5>}
    {error === "" && <Kanban onMoveHandler={onMoveHandler} data={kanban} />}
  </div>);
}

export default App;
