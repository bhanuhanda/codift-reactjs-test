import React, { useEffect, useCallback } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import actions from "../../redux/actions";
import Post from './Post';
import './styles.css';

const fetchedPosts = createSelector(
    state => state.postsData.posts,
    posts => posts
)

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(fetchedPosts);
    const loading = useSelector((state) => state.postsData.loading);

    const fetchPosts = useCallback(() => {
        dispatch(actions.postsAction.fetchPosts());
    },[])

    useEffect(() => {
        fetchPosts();
    },[])

    return (
        <div>
            <h1 className="heading">Posts</h1>
            <div className="card-container">
                {loading && <CircularProgress />}
                {
                    posts.map((post)=>{
                        return <Post post={post} />;
                    })
                }
            </div>
        </div>
    )
}

export default Posts;
