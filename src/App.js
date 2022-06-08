import './App.css';
// import EffectHookCounter from './Components/EffectHookCounter';
import EffectHookCounterContainer from './Components/EffectHookCounterContainer';
// import HookWithArrayState from './Components/HookWithArrayState';
// import HookWithObjectState from './Components/HookWithObjectState';
// import HookCounter from './Components/HookCounter';
// import HookWithPrevState from './Components/HookWithPrevState';

function App() {
  return (
    <div>
      <EffectHookCounterContainer/>
      {/* <EffectHookCounter/> */}
      {/* <HookWithArrayState/> */}
      {/* <HookWithObjectState/> */}
      {/* <HookWithPrevState/> */}
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;

// only call Hook on top level, don't call inside loop, conditions or nested funct