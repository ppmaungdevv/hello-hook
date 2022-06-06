import './App.css';
import HookCounter from './Components/HookCounter';

function App() {
  return (
    <div className="App">
      <HookCounter/>
    </div>
  );
}

export default App;

// only call Hook on top level, don't call inside loop, conditions or nested funct