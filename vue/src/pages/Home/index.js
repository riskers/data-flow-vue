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
      selectUsername: '',
      userPageIndex: 1,
      followersPageIndex: 1,
      followeringPageIndex: 1,
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
      followers: state => state.followers,
      followings: state => state.followings,
    })
  },
  methods: {
    ...mapActions({
      searchUser: 'searchUser',
      getFollowers: 'getFollowers',
      getFollowings: 'getFollowings',
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
    },
    selectItem: function(item) {
      this.followersPageIndex = 1
      this.followeringPageIndex = 1
      this.selectUsername = item.login

      this.getFollowers({
        username: item.login,
        page: this.followersPageIndex,
      })

      this.getFollowings({
        username: item.login,
        page: this.followeringPageIndex,
      })
    },

    followersPrev: function() {
      if (this.followersPageIndex == 1)
        return

      this.followersPageIndex--

      this.getFollowers({
        username: this.selectUsername,
        page: this.followersPageIndex,
      })
    },
    followersNext: function() {
      this.followersPageIndex++

      this.getFollowers({
        username: this.selectUsername,
        page: this.followersPageIndex,
      })
    },

    followingsPrev: function() {
      if (this.followeringPageIndex == 1)
        return

      this.followeringPageIndex--

      this.getFollowings({
        username: this.selectUsername,
        page: this.followeringPageIndex,
      })
    },
    followingsNext: function() {
      this.followeringPageIndex++

      this.getFollowings({
        username: this.selectUsername,
        page: this.followeringPageIndex,
      })
    }
  }
}