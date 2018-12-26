<template>
  <el-row
    :gutter="0"
    class="m-header"
  >
    <el-col :span="4">
      <geo/>
    </el-col>
    <el-col :span="6">
      <user/>
    </el-col>
    <el-col :span="14">
      <my-nav />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
import MyNav from './nav'
export default {
  components: {
    Geo,
    User,
    MyNav
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header.scss";
</style>
