import Vuex from 'vuex'

// simulate newwork deley
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const state = {
  loading: false,
  total: 0,
  data: [],
  error: '',
}

const mutations = {
  FETCH_GITHUB_USERS_LOADING(state) {
    state.loading = true
  },
  FETCH_GITHUB_SEARCH_USER_FAILURE(state, payload) {
    state.loading = false
    state.error = payload.error
  },
  FETCH_GITHUB_SEARCH_USER_SUCCESS(state, payload) {
    state.loading = false,
    state.total = payload.total_count,
    state.data = payload.items
  },
}

const actions = {
  async searchUser({dispatch, commit}, {username, page}) {
    commit({
      type: 'FETCH_GITHUB_USERS_LOADING'
    })

    await delay(2000)

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}&page=${page}`)
      let resData = await response.json()

      commit({
        type: 'FETCH_GITHUB_SEARCH_USER_SUCCESS',
        total_count: resData.total_count,
        items: resData.items,
      })
    } catch(e) {
      commit({
        type: 'FETCH_GITHUB_SEARCH_USER_FAILURE',
        error: 'No This User',
      })
    }
  },
}

const userStore = {
  state,
  mutations,
  actions,
}

export default userStore