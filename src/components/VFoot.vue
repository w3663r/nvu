<template>
  <div class="hello">
    <p> {{need}} </p>
    <el-link v-for="link in links"
        :key="link.value"
        :href="link.value">{{ link.label }}
    </el-link>
  </div>
</template>

<script>
export default {
  name: 'VFoot',
  data () {
    return {
      need: 'i really need money',
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
