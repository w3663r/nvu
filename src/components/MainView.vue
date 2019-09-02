<template>
<div>
<el-row>
  <el-col :span="24">
    <VHead></VHead>
  </el-col>
</el-row>

<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div>
    <router-view></router-view>
  </el-col>

  <el-col :span="12"><div class="grid-content bg-purple-light"></div>
    <img src="../assets/logo.png">
  </el-col>
</el-row>
       <el-divider>Footer</el-divider>
    <third/>
    <VFoot></VFoot>
</div>
</template>

<script>

import VHead from '@/components/VHead'
import VFoot from '@/components/VFoot'
import third from '@/components/third'

import axios from 'axios'
export default {

  name: 'MainView',
  components: {
    VHead,
    VFoot,
    third
  },
  data () {
    return {
      info: null,
      msg: 'welcome to second',
      another: 'another messege',
      some_other_messege: 'hello Darkness my old Friend'
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
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
