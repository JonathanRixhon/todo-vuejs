<template>
  <ol>
    <li
      v-for="(item, index) in items"
      :key="index"
      v-bind:class="{ 'is-done': item.done }"
    >
      {{ item.done }} : {{ item.content }}
      <button v-on:click="done(item)">Terminé !</button>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      items: this.$store.state.items,
    }
  },
  methods: {
    done(item) {
      item.done = !item.done
    },
  },
}
</script>
