import {getMovies} from "@/api/movies.js";

export default {
    namespaced: true,
    state: () => ({
        movies: [],
        totalCount: 0,
        errorMessage: '',
    }),

    actions: {
        async getMovies({ commit, rootState }) {
            const { query = '' } = rootState.search ?? {};
            const { currentPage = 1 } = rootState.pagination ?? {};

            commit('setLoading', true, { root: true });

            try {

                const movies = await getMovies(query, currentPage);


                if (movies.Response === "True") {
                    const currentMovies = Array.isArray(movies?.Search) ? movies?.Search : [movies];

                    commit('setMovies', currentMovies);
                } else {
                    commit('setMovies', []);
                }

                commit('setTotalCount', Number(movies?.totalResults ?? 0));
                commit('setErrorMessage', movies?.Error ?? '');

            } catch (error) {
                commit('setErrorMessage', error.message ?? 'Error! Something went wrong');
            } finally {
                commit('setLoading', false, { root: true });
            }
        }
    },
    mutations: {
        setMovies (state, payload) {
            state.movies = payload;
        },
        setErrorMessage (state, payload) {
            state.errorMessage = payload;
        },
        setTotalCount (state, payload) {
            state.totalCount = payload;
        },
    }
}