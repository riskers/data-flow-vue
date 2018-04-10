import Vuex from 'vuex'

// simulate newwork deley
const delay = (ms: Number) => new Promise(resolve => setTimeout(resolve, ms))

export const userStore = {
  state: {
    loading: false,
    total: 0,
    data: [],
    error: '',
  },
  mutations: {
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
  },
  actions: {
    async searchUser({commit}, {username, page}) {
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
      } catch(error) {
        commit({
          type: 'FETCH_GITHUB_SEARCH_USER_FAILURE',
          error: 'No This User',
        })
      }
    },
  },
}

export const followersStore = {
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    FETCH_GITHUB_USER_FOLLOWERS_LOADING(state)  {
      state.loading = true
    },
    FETCH_GITHUB_USER_FOLLOWERS_SUCCESS(state, payload) {
      state.loading = false
      state.data = payload.data
    },
    FETCH_GITHUB_USER_FOLLOWERS_FAILURE(state, payload) {
      state.loading = false
      state.error = payload.error
    }
  },
  actions: {
    async getFollowers({commit}, {username, page}) {
      commit({
        type: 'FETCH_GITHUB_USER_FOLLOWERS_LOADING'
      })

      await delay(2000)

      try {
        const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`)
        let resData = await response.json()

        commit({
          type: 'FETCH_GITHUB_USER_FOLLOWERS_SUCCESS',
          data: resData
        })
      } catch(error) {
        commit({
          type: 'FETCH_GITHUB_USER_FOLLOWERS_FAILURE',
          error: 'No This User',
        })
      }
    },
  }
}

export const followingsStore = {
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    FETCH_GITHUB_USER_FOLLOWINGS_LOADING(state)  {
      state.loading = true
    },
    FETCH_GITHUB_USER_FOLLOWINGS_SUCCESS(state, payload) {
      state.loading = false
      state.data = payload.data
    },
    FETCH_GITHUB_USER_FOLLOWINGS_FAILURE(state, payload) {
      state.loading = false
      state.error = payload.error
    }
  },
  actions: {
    async getFollowings({commit}, {username, page}) {
      commit({
        type: 'FETCH_GITHUB_USER_FOLLOWINGS_LOADING'
      })

      await delay(2000)

      try {
        const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`)
        let resData = await response.json()

        commit({
          type: 'FETCH_GITHUB_USER_FOLLOWINGS_SUCCESS',
          data: resData
        })
      } catch(error) {
        commit({
          type: 'FETCH_GITHUB_USER_FOLLOWINGS_FAILURE',
          error: 'No This User',
        })
      }
    },
  }
}
