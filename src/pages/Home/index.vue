<template>
  <div>
    <input
      v-model="username"
    />

    <button @click="searchUser({username: username, page: userPageIndex})">search</button>

    <div :class="$style.main">
      <div :class="$style.users">
        <List
          :list-style="{cursor: 'pointer'}"
          :title="title"
          :data="userList"
          :loading="loading"
          icon=">"
          @searchPrev="searchPrev"
          @searchNext="searchNext"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import List from 'components/List'

export default {
  name: 'Home',
  components: {
    List,
  },
  data() {
    return {
      username: '',
      userPageIndex: 1,
    }
  },
  computed: {
    ...mapState({
      loading: state => state.users.loading,
      title: state => `users ${state.users.total}`,
      userList: state => state.users.data,
    })
  },
  methods: {
    ...mapActions({
      searchUser: 'searchUser'
    }),
    searchPrev: function() {
      if (this.userPageIndex == 1)
        return

      this.userPageIndex--

      this.searchUser({
        username: this.username,
        page: this.userPageIndex,
      })

      // this equal to below:
      /* this.$store.dispatch('searchUser', {
        username: this.username,
        page: this.userPageIndex,
      }) */
    },
    searchNext: function() {
      this.userPageIndex++

      this.searchUser({
        username: this.username,
        page: this.userPageIndex,
      })

      // this equal to below:
      /* this.$store.dispatch('searchUser', {
        username: this.username,
        page: this.userPageIndex,
      }) */
    }
  }
}
</script>

<style module>
.main {
  display: flex;
  margin-top: 30px;
}
.users {
  width: 300px;
}
</style>
