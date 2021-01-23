import React, { useEffect, useCallback } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../redux/actions";
import Post from './Post';
import './styles.css';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.postsData.posts);
    const loading = useSelector((state)=>state.postsData.loading);

    const fetchPosts = useCallback(() => {
        dispatch(actions.postsAction.fetchPosts());
    },[])

    useEffect(() => {
        fetchPosts();
    },[])

    return (
        <React.Fragment>
            <h2 className="heading">Posts</h2>
            <div className="card-container">
                {loading && <CircularProgress />}
                {
                    posts.map((post)=>{
                        return <Post post={post} />;
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Posts;
