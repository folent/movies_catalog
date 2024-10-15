export default {
    namespaced: true,
    state: () => ({
        query: '',
    }),

    mutations: {
        setQuery (state, payload) {
            state.query = payload;
        }
    }
}