import './App.css';

const taskList = ['Abrir a geladeira', 'Pegar qualquer coisa', 'Esquentar no micro-ondas', 'Comer'];

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
