<template>
  <div>
    <input
      v-model="username"
    />

    <button @click="searchUser({username: username, page: 1})">search</button>

    <div :class="$style.main">
      <div :class="$style.users">
        <List
          :list-style="{cursor: 'pointer'}"
          :title="`users (${users.total})`"
          :data="users.data"
          :loading="users.loading"
          :error="users.error"
          icon=">"
          @clickPrev="searchPrev"
          @clickNext="searchNext"
          @clickItem="selectItem"
        />
      </div>

      <div :class="$style.followers">
        <List
          title="fllowers"
          :data="followers.data"
          :loading="followers.loading"
          :error="followers.error"
          @clickPrev="followersPrev"
          @clickNext="followersNext"
        />
      </div>

      <div :class="$style.followings">
        <List
          title="followings"
          :data="followings.data"
          :loading="followings.loading"
          :error="followings.error"
          @clickPrev="followingsPrev"
          @clickNext="followingsNext"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import List from '../../components/List/index.vue'

@Component({
  components: {
    List,
  }
})
export default
class Home extends Vue{
  username = ''
  selectUsername = ''
  userPageIndex = 1
  followersPageIndex = 1
  followeringPageIndex = 1

  get users() {
    return mapState({
      users: state => state.users,
    })
  }

  get followers() {
    return mapState({
      followers: state => state.followers,
    })
  }

  get followings() {
    return mapState({
      followings: state => state.followings,
    })
  }

  searchUser() {
    this.$store.dispatch('searchUser', {
      username: this.username,
      page: this.userPageIndex,
    })
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
.followers {
  width: 300px;
  margin-left: 50px;
}

.followings {
  width: 300px;
  margin-left: 50px;
}

.users,
.followers,
.followings {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
