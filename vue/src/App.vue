<template>
  <div>
    <nav class="nav">
      <router-link to="/" class="link" exact>home</router-link>
      <router-link to="/test" class="link">test</router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
  .nav {
    text-align: center;
  }

  .link {
    text-decoration: none;
    font-size: 20px;
    color: #7f8c8d;
  }

  .router-link-active {
    color: #42b983;
    text-decoration: underline;
  }
</style>
