<template>
  <h1>Todo List en Vue Js</h1>
  <List />
  <AddForm />
</template>

<script>
import List from './components/List.vue'
import AddForm from './components/AddForm.vue'

export default {
  name: 'App',
  components: {
    List,
    AddForm,
  },
}
</script>
