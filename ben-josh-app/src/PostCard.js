import UpAndDownVote from "./UpAndDownVote"
import { Link, Route } from "react-router-dom"
import { Button, Grid, Icon } from 'semantic-ui-react'

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    console.log(post)

    const myLabel = { as: 'a', basic: true, pointing: 'left', content: post.comments.length }

    return (
        <>
        <div className='card'>
            <Grid >
                <Grid.Row>
                <Grid.Column width ={1}>
                    <UpAndDownVote post={post}/>
                </Grid.Column>
                <Grid.Column width ={14}>
                    <Link to={`/posts/${post.id}`} className="postLink">
                        <div>
                            <h2>{post.title}</h2>
                             <img src={post.image} />
                            <p>{post.text}</p>
                            <div>
                                {/* <Button icon name="comment">
                                    <Icon name='comment' />
                                </Button> */}
                                <Button
                                    content='Comments'
                                    icon='comment'
                                    label={myLabel}
                                    labelPosition='right'
                                    />
                            </div>
                         </div> 
                    </Link>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        </> 
    )
}

export default PostCard