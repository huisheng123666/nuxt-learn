<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.id"
        :label="item.value"
        :value="item.id"/>
    </el-select>
    <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
      <el-option
        v-for="item in city"
        :key="item.id"
        :label="item.name"
        :value="item.id"/>
    </el-select>
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"/>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    province: {
      type: Array,
      default () {return []}
    }
  },
  data () {
    return {
      pvalue: '',
      city: [],
      cvalue: '',
      state4: '',
      cities: []
    }
  },
  watch: {
    pvalue () {
      this.getCityList()
    }
  },
  methods: {
    handleSelect () {
      this.$router.push({name: 'index', params: {id: 1}})
    },
    querySearchAsync: _.debounce(async function (query, cb) {
      let self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query) > -1))
      } else {
        const { status, data: {city} } = await self.$axios.get('/geo/city')
        if (status === 200) {
          self.cities = city.map(item => {
            return {value: item.name}
          })
          cb(self.cities.filter(item => item.value.indexOf(query) > -1))
        }
      }
    }, 200),
    async getCityList () {
      const { status, data: {city} } = await this.$axios.get(`/geo/province/${this.pvalue}`)
      if (status === 200) {
        this.city = city
        this.cvalue = ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/changecity/iselect.scss";
</style>
