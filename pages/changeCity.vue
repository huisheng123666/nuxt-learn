<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <is-select :province="province" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import isSelect from '../components/changeCity/isSelect'
import categroy from '../components/changeCity/categroy'

export default {
  async asyncData (ctx) {
    const { status, data: {province} } = await ctx.$axios.get('/geo/province')
    if (status === 200) {
      return {province}
    } else {
      return []
    }
  },
  components: {
    isSelect,
    categroy
  },
  data () {
    return {
      province: []
    }
  }
}
</script>

<style>

</style>
