<template>
  <div>
    <input v-model="text" type="text"></input>
    <button v-on:click="add">追加</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    add() {
      this.$emit('addTodo', this.text)
    }
  }

}
</script>

<style scoped>

</style>
