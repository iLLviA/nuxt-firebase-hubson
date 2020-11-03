<template>
  <div>
    <h1>TODO</h1>
    <List :todoList="todoList" />
    <Form @addTodo="add" />
  </div>
</template>

<script>
import List from "~/components/List";
import Form from "~/components/Form";

export default {
  components: {
    List,
    Form
  },
  data() {
    return {
      todoList: [],
    }
  },
  props: {},
  methods: {
    add(text) {
      this.todoList.push(text)
    }
  }
}
</script>

<style>

</style>
