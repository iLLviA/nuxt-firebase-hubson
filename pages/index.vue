<template>
  <div>
    <h1>TODO</h1>
    <input v-model="text" type="text"></input>
    <button @click="add">追加</button>
    <ul>
      <li v-for="( todo, index ) in todoList" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      text: ''
    }
  },
  props: {},
  methods: {
    add() {
      this.todoList.push(this.text)
    }
  }
}
</script>

<style>

</style>
