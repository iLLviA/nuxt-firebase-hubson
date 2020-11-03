<template>
  <ul>
    <li v-for="( todo, index ) in todoList" :key="index">
      {{ todo }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    todoList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
