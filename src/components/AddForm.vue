<template>
  <input type="text" v-on:input="e => addTodo(e)" />
  <button v-on:click="e => addNew(e)">Ajouter</button>
</template>
<script>
export default {
  name: 'AddForm',
  data() {
    return {
      newItem: Object,
    }
  },
  methods: {
    addTodo(e) {
      this.newItem = { done: false, content: e.target.value }
    },
    addNew() {
      this.$store.commit('addNew', this.newItem)
    },
  },
}
</script>
