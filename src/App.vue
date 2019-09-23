<template>
  <div id="app">
    <add />
    <p>-----------</p>
    <dec />
  </div>
</template>

<script>
import add from './components/add'
import dec from './components/dec'

export default {
  data() {
    return {

    }
  },
  components: {
    add,
    dec
  }
}
</script>

<style>

</style>
