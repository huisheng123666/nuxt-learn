<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="item in menu" :key="item.type" @mouseenter="kind=item.type">
        <i :class="item.type"/>{{ item.title }}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" @mouseleave="kind=''" @mouseenter="sover" v-if="kind">
      <template v-for="item in curDetail">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v in item.children" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        kind: '',
        menu: [
          {
            type: 'food',
            title: '美食',
            child: [
              {
                title: '美食',
                children: ['代金券', '甜点饮品', '自助餐']
              }
            ]
          },
          {
            type: 'takeout',
            title: '外卖',
            child: [
              {
                title: '外卖',
                children: ['代金券', '甜点饮品', '自助餐']
              }
            ]
          },
          {
            type: 'hotel',
            title: '酒店',
            child: [
              {
                title: '酒店',
                children: ['代金券', '甜点饮品', '自助餐']
              }
            ]
          }
        ]
      }
    },
    computed: {
      curDetail () {
        return this.menu.filter(item => item.type === this.kind)[0] ? this.menu.filter(item => item.type === this.kind)[0].child : []
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
