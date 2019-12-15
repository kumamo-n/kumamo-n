import { ActionTree, ActionContext } from 'vuex'
import { Context } from '@nuxt/types';

declare module 'vuex/types/index' {
    interface ActionTree<S, R> {
        nuxtServerInit: (context: ActionContext<S, R>, nuxtContext: Context) => void
    }
}

