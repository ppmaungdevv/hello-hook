import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count}`
    })
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Clicked Count {count}</button>
    </div>
  )
}

export default EffectHookCounter

// in effect hook, react execute func inside useEffect(() => {}) every time the component render