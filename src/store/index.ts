import Vuex from 'vuex'
import * as post from "./Post";

export interface RootState {
    post:post.IPostState

}

export default () => new Vuex.Store<RootState>({
    modules:{
        post:post.store
    }
})
