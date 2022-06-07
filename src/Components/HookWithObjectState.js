import React, {useState} from 'react'

function HookWithObjectState() {
    const [name, setName] = useState({first_name: '', last_name: ''})

  return (
    <div>
        <input type='text' value={name.first_name} onChange={e => setName({...name, first_name: e.target.value})} />
        <input type='text' value={name.last_name} onChange={e => setName({...name, last_name: e.target.value})} />
        <h4>First Name { name.first_name } </h4>
        <h4>Last Name { name.last_name } </h4>
    </div>
  )
}

export default HookWithObjectState