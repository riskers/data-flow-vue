<template>
  <div>
    <input
      v-model="username"
    />

    <button @click="searchUser">search</button>

    <div :class="$style.main">
      <div :class="$style.users">
        <List
          :list-style="{cursor: 'pointer'}"
          :title="title"
          :data="userList"
          :loading="loading"
          icon=">"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import List from 'components/List'

export default {
  name: 'Home',
  components: {
    List,
  },
  data() {
    return {
      username: '',
      page: 1,
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
    searchUser: function() {
      this.$store.dispatch('searchUser', {
        username: this.username,
        page: this.page,
      })
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
