import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        // setCount(count +1)
        setCount(prev_count => prev_count + 1)
    }

    // ------- run only once and the counter won't increase every seconds
    // but will work with using prev_count in setState
    useEffect(() => {
      const interval = setInterval(tick, 1000)
    
      return () => {
        clearInterval(interval)
      }
    }, [])


    // ---------- this will work
    // useEffect(() => {
    //   const interval = setInterval(tick, 1000)
    
    //   return () => {
    //     clearInterval(interval)
    //   }
    // }, [count])    
    
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter

// ******* note
// can have multiple useEffect within a component

// whenever need to use a function inside useEffect write it inside useEffet so that you can see more clearly which props must add to dependency arraya
// useEffect(() => {
// function someFunct() {
//    console.log(some_props )
// }
// }, [some_props]) <= this is called dependency array

