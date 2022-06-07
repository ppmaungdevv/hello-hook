import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // useEffect(() => {
    //     console.log('title change')
    //     document.title = `Clicked ${count}`
    // })
    useEffect(() => {
        console.log('title change')
        document.title = `Clicked ${count}`
    }, [count]) 
    // in [], [count], add props or states that need to be watched and only these states or props has been  changed the effect will execute
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Clicked Count {count}</button>
    </div>
  )
}

export default EffectHookCounter

// in effect hook, react execute func inside useEffect(() => {}) every time the component render