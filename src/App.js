import Todo from './components/Todo';
import Player from './components/player';

function App() {
  return (
    <div>
      <h1>My Courses</h1>
    <Todo title='Learn React' />
    <Todo title='Master React' />
    <Todo title='Explore React' />
    <Todo title='Love React' />
    {/* <Player url='videos/5_6093376008138785165.mkv' /> */}
    </div>
  );
}

export default App;
