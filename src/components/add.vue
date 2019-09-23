<template>
  <div>
    <!-- <h3>当前最新count值：{{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="add">+1</button>
    <button @click="addN">+n</button>
    <br>
    <button @click="dec">-1</button>
    <button @click="addAsy">+1 async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    add() {
      // commit 作用 就是调用某个mutation函数
      this.$store.commit('add')
    },
    addN() {
      this.$store.commit('addN', 2)
    },
    dec() {
      this.$store.commit('dec')
    },
    addAsy() {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>
<style lang="less" scope>
  
</style>