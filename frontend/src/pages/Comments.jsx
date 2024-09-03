
import { useState, useEffect } from "react"

import PageContent from "../components/PageContent"
import { comment } from "postcss"

const Comments = () => {
    const [comments, setComments] = useState([])
    
    useEffect( () => {
        const fetchComments = async () => {
            try {
                const res = await fetch('https://astrologer-cms-test.onrender.com/comments')
                const data = await res.json()
                setComments(data)
            }
            catch (error) {
                console.log('Error fetching data', error)
            }
        }
            
        fetchComments()
    }, [])

    console.log(comments)

    return (
        <PageContent>
            <div>
                {comments.map( (comment) => (
                    <div>
                        <h1>{comment.name}</h1>
                        <p>{comment.body}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        </PageContent>
    )
}

export default Comments