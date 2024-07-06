import './App.css';
import Profile from './component';
import Count from './component/count';

function App() {
  return (
    <div className="App">
      <Profile name={"Exa"} age={18} />
      <Count />
    </div>
  );
}

export default App;
