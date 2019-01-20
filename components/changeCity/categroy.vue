<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母查询：</dt>
      <dd v-for="item in typeList" :key="item">
        <a :href="'#city' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl :id="'city' + item.title" v-for="item in block" :key="item.title" class="m-categroy-section">
      <dt>{{ item.title }}</dt>
      <dd>
        <span v-for="c in item.city" :key="c.id">{{ c.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyJs from 'js-pinyin'
export default {
  data () {
    return {
      typeList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  created () {
    this.getCity()
  },
  methods: {
    async getCity () {
      let blocks = []
      const { status, data: {city} } = await this.$axios.get('/geo/city')
      if (status === 200) {
        let pinyinFirst
        let unicode
        let obj = {}
        city.forEach(item => {
          pinyinFirst = pyJs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
          unicode = pinyinFirst.charCodeAt(0)
          if (unicode > 96 && unicode < 123) {
            if (!obj[pinyinFirst]) {
              obj[pinyinFirst] = []
            }
            obj[pinyinFirst].push(item)
          }
        })
        for (let [key, val] of Object.entries(obj)) {
          blocks.push({
            title: key.toLocaleUpperCase(),
            city: val
          })
        }
        blocks.sort((a, b) => a.title.charCodeAt() - b.title.charCodeAt())
        this.block = blocks
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/changecity/categroy.scss";
</style>
