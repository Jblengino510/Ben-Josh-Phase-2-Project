import {useState, useEffect} from 'react'
import {Input} from "semantic-ui-react"

function CreatePostForm(){
    return (
        <form>
            <input type='text' placeholder='title'></input>
            <input type='text' placeholder='image url'></input>
            <input type='textarea' placeholder='Text (optional)'></input>
            <input type='submit' value='post'></input>
        </form>
    )
}

export default CreatePostForm