<template>
  <div class="hello">
    <p>{{msg}} </p>
    <p>{{info}}</p>
    <p><router-link :to="{ name: 'first' }">first</router-link></p>
    second component
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'second',
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
