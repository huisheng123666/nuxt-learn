<template>
  <el-container class="layout-default">
    <el-header style="height: auto;">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import myHeader from '../components/public/header/index'
  import myFooter from '../components/public/footer/index'
  export default {
    components: {
      myHeader,
      myFooter
    }
  }
</script>

<style>
</style>
