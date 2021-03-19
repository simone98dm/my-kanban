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
    let newKanban = kanban;
    for (let i = 0; i < newKanban.lists.length; i++) {
      const cards = kanban.lists[i];
      for (let k = 0; k < cards.list.length; k++) {
        const card = cards.list[k];
        if (card.id === item.card.id) {
          cards.list.splice(k, 1);
          console.log(`remove ${card.id} from ${cards.name}`);
        }
      }

      if (cards.id === id) {
        cards.list.push(item.card);
        console.log(`add ${item.card.id} in ${cards.name}`);
      }
    }
    setKanban(newKanban);
  }

  useEffect(() => {
    console.log(kanban)
  }, [kanban])

  useEffect(() => {

    setLoading(true);

    getUserBoard()
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
