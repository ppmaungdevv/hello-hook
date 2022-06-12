import axios from 'axios'
import React, { useState, useEffect } from 'react'

// 'https://jsonplaceholder.typicode.com/posts'

function DataFetching() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
            setPost(data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <div>
        <ul>
            {
                posts.map(post => <li key={post.id}>post.title</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching