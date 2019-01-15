<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <e-menu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row :span="24">
      <el-col>
        <artistic/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eMenu from '../components/menu/menu'
import life from '../components/index/life'
import artistic from '../components/index/artistic'
export default {
  components: {
    eMenu,
    life,
    artistic
  }
}
</script>

<style lang="scss">
@import "../assets/css/index/index.scss";
</style>
