import * as Types from "./types";
const initailState = {
    posts: [],
    loading: false,
}
const postsReducer = (state = initailState, action) => {
    switch(action.type){
        case Types.FETCH_POSTS.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case Types.FETCH_POSTS.SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                loading: false,
            }
        case Types.FETCH_POSTS.FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default postsReducer;