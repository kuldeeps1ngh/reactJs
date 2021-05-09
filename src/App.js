import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Player from './components/player';

function App() {
  return (
    <div>
      <h1>My Videos</h1>
    <Todo title='Learn React' />
    <Todo title='Master React' />
    <Todo title='Explore React' />
    <Todo title='Love React' />
    <Modal />
    <Backdrop />
    {/* <Player url='videos/5_6093376008138785165.mkv' /> */}
    </div>
  );
}

export default App;
