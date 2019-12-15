import { Module } from 'vuex'
import { RootState } from "../index";
import { IPostState, initState } from "./state";
import { mutations} from "./mutation";

export * from './state'

export const store: Module<IPostState,RootState> = {
    state:initState,
    mutations
}
