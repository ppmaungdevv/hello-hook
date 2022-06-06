import React, { useState } from 'react'

function HookCounter2() {
    const init_value = 0,
    [count, setCount] = useState(init_value)

    const increaseFive = () => {
        for (let index = 0; index < 5; index++) {
            
            setCount(prev_count => prev_count + 1 )
            
        }
    }

  return (
    <div>
        <h4>Count {count}</h4>
        <button onClick={() => setCount(prev_count => prev_count + 1 )}>Increase</button>
        <button onClick={() => setCount(prev_count => prev_count - 1 )}>Decrease</button>
        <button onClick={() => setCount(init_value)}>Reset</button>
        <button onClick={increaseFive}>Increase 5x</button>
    </div>
  )
}

export default HookCounter2