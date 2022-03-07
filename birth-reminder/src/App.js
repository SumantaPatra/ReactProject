
import './App.css';
import { useState } from 'react'
import { List } from './List';
import data from './data'
function App() {
  const [person, setData] = useState(data);
  const [state, setState] = useState(false)
  return (
    <main>
      {
        <>You have {person.length} birthDay</>
      }
      <List person={person} />
      <button onClick={() => { setData([]); setState(!state) }} disabled={state}>Clear</button>
      <button onClick={() => { setData(data); setState(!state) }} disabled={state ? false : true}>Show</button>
    </main>
  );
}

export default App;
