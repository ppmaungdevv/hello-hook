import './App.css';
// import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';

function App() {
  return (
    <div className="App">
      <HookCounter2/>
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;

// only call Hook on top level, don't call inside loop, conditions or nested funct