import React from 'react'
import {Container, PostForm} from "../components/index.js"

function AddPost() {
    return (
        <div className='py-8 px-4 sm:px-8'>
            <Container>
                <PostForm/>
            </Container>
        </div>
    )
}

export default AddPost
