<template>
  <div class="container">
    <div class="app">
      <h1>カウンターアプリ</h1>
      <h2>{{ counter }}</h2>
      <input type="number" v-model="countNum" />
      <div class="buttons">
        <button @click="increment">インクリメント</button>
        <button @click="decrement">デクリメント</button>
        <button @click="tkgw">任意の値を追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countNum: 0,
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("counter/INCREMENT");
    },
    decrement() {
      if (this.counter > 0) this.$store.dispatch("counter/INCREMENT");
    },
    tkgw() {
      this.$store.dispatch("counter/TKGW", this.counter);
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter.count
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app {
}

.buttons {
  display: flex;
}
</style>