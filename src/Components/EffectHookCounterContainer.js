import React, {useState} from 'react'
import EffectHookCounter from './EffectHookCounter'

function EffectHookCounterContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>
            Toggle display
        </button>
        {display && <EffectHookCounter /> }
    </div>
  )
}

export default EffectHookCounterContainer