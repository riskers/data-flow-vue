<template>
  <div :style="listStyle">
    <header :class="$style.header">
      <h3 :class="$style.title">{{title}}</h3>
      <div :class="$style.links">
        <a href="javascript:void(0)" :class="$style.link" onClick={onClickPrev}> &lt; </a>
        <a href="javascript:void(0)" :class="$style.link" onClick={onClickNext}> &gt; </a>
      </div>
    </header>
    <ul :class="$style.list">
      <Loading v-if="loading" />
      <div v-else>
        <span v-if="data.length === 0">None</span>
        <li v-else
          v-for="e in data"
          :key="e.id" :class="$style.item"
        >
          <img :src="e.avatar_url" :class="$style.pic"/>
          {{e.login}}
          <span :class="$style.icon">{{icon}}</span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Loading from 'components/Loading'

export default {
  name: 'List',
  components: {
    Loading
  },
  props: [
    'list-style',
    'title',
    'data',
    'loading',
    'icon',
  ],
}
</script>

<style module>
.list {
  padding-left: 0;
}

.item {
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  position: relative;
}

.title {
  font-size: 15px;
  margin: 0;
}

.pic {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
}

.icon {
  display: block;
  width: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.links {
  display: flex;
}

.link {
  color: #ccc;
  text-decoration: none;
  margin-left: 10px;
  font-size: 15px;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
}
</style>

