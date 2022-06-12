import './App.css';
import DataFetching from './Components/DataFetching';
// import IntervalHookCounter from './Components/IntervalHookCounter';
// import EffectHookCounter from './Components/EffectHookCounter';
// import EffectHookCounterContainer from './Components/EffectHookCounterContainer';
// import HookWithArrayState from './Components/HookWithArrayState';
// import HookWithObjectState from './Components/HookWithObjectState';
// import HookCounter from './Components/HookCounter';
// import HookWithPrevState from './Components/HookWithPrevState';

function App() {
  return (
    <div>
      <DataFetching />
      {/* <IntervalHookCounter/> */}
      {/* <EffectHookCounterContainer/> */}
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