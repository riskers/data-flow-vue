<template>
  <div :style="listStyle">
    <header :class="$style.header">
      <h3 :class="$style.title">{{title}}</h3>
      <div :class="$style.links">
        <a
          href="javascript:void(0)"
          :class="$style.link"
          @click="onClickPrev"
        >
          &lt;
        </a>
        <a
          href="javascript:void(0)"
          :class="$style.link"
          @click="onClickNext"
        >
          &gt;
        </a>
      </div>
    </header>
    <ul :class="$style.list">
      <Loading v-if="loading" />
      <div v-else>
        <span v-if="data.length === 0">None</span>
        <li v-else
          v-for="e in data"
          :key="e.id" :class="$style.item"
          @click="onClickItem(e)"
        >
          <img :src="e.avatar_url" :class="$style.pic"/>
          {{e.login}}
          <span :class="$style.icon">{{icon}}</span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script src="./index.js"></script>
<style module src="./style.css"></style>
