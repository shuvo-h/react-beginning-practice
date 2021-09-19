import React, { useEffect, useState } from "react";

const LoadAPI = () =>{
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    },[])
    
    const [images,setImage] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setImage(data))
    },[])
    const UserComponent = props => {
        return(
            <div className="card">
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        )
    }
    return(
        <div >
            {
                posts.map(post => <UserComponent title={post.title} body={post.body}></UserComponent>)
            }
        </div>
    )
}

export default LoadAPI;