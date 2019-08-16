<template>
  <div class="hello">
    <h1>{{msg}} </h1>
    <li><router-link :to="{ name: 'second' }">second</router-link></li>
    <li><router-link :to="{ name: 'first' }">first</router-link></li>
    <li v-for="link in links" :key="link.value">
        <el-link
        :href="link.value">{{ link.label }}
        </el-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'VFoot',
  data () {
    return {
      msg: 'WELCOME',
      another: 'another messege',
      some_other_messege: 'hello Darkness my old Friend',
      links: [{
        value: 'https://vuejs.org',
        label: 'vue js'
      }, {
        value: 'https://forum.vuejs.org',
        label: 'forum'
      }]

    }
  }
}
</script>
