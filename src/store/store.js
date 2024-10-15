import { createStore } from 'vuex'
import movies from './modules/movies';
import search from './modules/search.js';
import pagination from './modules/pagination.js';
import user from "@/store/modules/user.js";

const store = createStore({
    modules: {
        movies,
        search,
        pagination,
        user
    },
    state () {
        return {
            loading: false,
        }
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload;
        },
    }
})

export default store;