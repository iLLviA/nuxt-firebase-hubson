<template>
  <div class="container">
    <p>{{ counter }}</p>
    <input type="number" v-model="countNum">
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="incrementByNum">任意</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      countNum: 0
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('counter/INCREMENT')
    },
    decrement() {
      this.$store.dispatch('counter/DECREMENT')
    },
    incrementByNum() {
      this.$store.dispatch('counter/INCREMENT_BY_NUM', this.countNum)
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter.count
    }
  }
}
</script>

<style scoped>

</style>
