import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    // const [count, setCount] = useState(0)
    // const [name, setName] = useState('')
    // useEffect(() => {
    //     console.log('title change')
    //     document.title = `Clicked ${count}`
    // })

    // ------ conditionally run effect
    // useEffect(() => {
    //     console.log('title change')
    //     document.title = `Clicked ${count}`
    // }, [count]) 
    // in [], [count], add props or states that need to be watched and only these states or props has been  changed the effect will execute

    // ------ run effect Only Once
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
      console.log('mouse')
      setX(e.clientX)
      setY(e.clientY)
    }

    // useEffect(() => {
    //   console.log('effect called')
    //   window.addEventListener('mousemove', logMousePosition)
    // }, []) // called effect only once like componentDidMount in class


    // ------------- run effect with clean up
    useEffect(() => {
      console.log('effect called')
      window.addEventListener('mousemove', logMousePosition)

      return () => {
        console.log('Comp Unmout')
        window.removeEventListener('mousemove', logMousePosition)
      }
      // whatever return as function in useEffect is cleanup function
      // similar to componentWillUnmount in Class
    }, []) // withoutcleanup there might be memory leak

  return (
    <div>
        {/* <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Clicked Count {count}</button> */}
        X coordinate {x} Y coordinate {y}
    </div>
  )
}

export default EffectHookCounter

// in effect hook, react execute func inside useEffect(() => {}) every time the component render