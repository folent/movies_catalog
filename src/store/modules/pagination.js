import {computed} from "vue";

export default {
    namespaced: true,
    state: () => ({
        currentPage: 1,
        take: 10,
    }),

    mutations: {
        setCurrentPage (state, payload) {
            state.currentPage = payload;
        },
    },
}