<template>
  <div>
    <!-- <h3>当前最新count值：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="addNum">+1</button>
    <button @click="dec">-1</button>
    <button @click="addN(5)">+n</button>
    <button @click="addAsync">+1</button>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['add', 'dec', 'addN']),
    ...mapActions(['addAsync']),
    addNum() {
      this.add()
    },
    // decNum() {
    //   this.dec()
    // },
    // decNumN() {
    //   this.addN(5)
    // }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
    
  }
}
</script>
<style lang="less" scope>
  
</style>