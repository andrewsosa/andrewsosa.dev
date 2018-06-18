import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            repos: {}
        },
        mutations: {
            setRepos (state, repos) {
                state.repos = repos
            }
        }
    })
}

export default createStore
