<template>
<div id="app">

<el-row>
  <el-col :span="24">
    <VHead/>
  </el-col>
</el-row>
       <el-divider>Main</el-divider>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div>
    <router-view></router-view>
  </el-col>

  <el-col :span="12"><div class="grid-content bg-purple-light"></div>
    <img src="./assets/logo.png">
  </el-col>
</el-row>
       <el-divider>Footer</el-divider>
    <VFoot/>

</div>
</template>

<script>
import VHead from '@/components/VHead'
import VFoot from '@/components/VFoot'

export default {
  name: 'App',
  components: {
    VHead,
    VFoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
