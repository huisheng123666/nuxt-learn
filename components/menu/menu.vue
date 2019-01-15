<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="item in $store.state.home.menu" :key="item.type" @mouseenter="kind=item.type">
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" @mouseleave="kind=''" @mouseenter="sover" v-if="kind">
      <template v-for="item in curDetail">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v + Math.random()">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        kind: ''
      }
    },
    computed: {
      curDetail () {
        return this.$store.state.home.menu.filter(item => item.type === this.kind)[0] ? this.$store.state.home.menu.filter(item => item.type === this.kind)[0].child : []
      }
    },
    methods: {
      mouseleave () {
        this.timer = setTimeout(() => {
          this.kind = ''
        }, 150)
      },
      sover () {
        if (this.kind) clearTimeout(this.timer)
      }
    }
  }
</script>

<style scoped>

</style>
