export default {
    namespaced: true,
    state: () => ({
        user: {
            userName: 'Alexander Borisenko',
            roles: ['Admin']
        },
    }),

    mutations: {
        setUser (state, payload) {
            state.user = payload;
        }
    },
    getters: {
        userName: state => state.user.userName,
    }
}