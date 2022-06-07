import './App.css';
import HookWithArrayState from './Components/HookWithArrayState';
// import HookWithObjectState from './Components/HookWithObjectState';
// import HookCounter from './Components/HookCounter';
// import HookWithPrevState from './Components/HookWithPrevState';

function App() {
  return (
    <div className="App">
      <HookWithArrayState/>
      {/* <HookWithObjectState/> */}
      {/* <HookWithPrevState/> */}
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;

// only call Hook on top level, don't call inside loop, conditions or nested funct