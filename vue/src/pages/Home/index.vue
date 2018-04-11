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

<script src="./index.js"></script>
<style module src="./style.css"></style>
