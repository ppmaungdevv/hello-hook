import axios from 'axios'
import React, { useState, useEffect } from 'react'

// 'https://jsonplaceholder.typicode.com/posts'

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [post_id, setPostId] = useState(1)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ post_id).then(({data}) => {
            setPost(data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }, [post_id])
  return (
    <div>
        <input type='text' value={post_id} onChange={e => setPostId(e.target.value)} />
        <p>
            {post.title}
        </p>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>post.title</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching