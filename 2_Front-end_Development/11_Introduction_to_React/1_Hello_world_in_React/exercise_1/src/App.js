import logo from './logo.svg';
import './App.css';

const taskList = ['a', 'b', 'c'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol> {
      taskList.map(tarefa => task(tarefa))
    } </ol>
  );
}

export default App;
