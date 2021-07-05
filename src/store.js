//import Vue from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    message: 'Contenu textuel',
    items: [
      { done: false, content: 'Courir' },
      { done: false, content: 'Courir' },
      { done: false, content: 'Courir' },
      { done: false, content: 'Courir' },
    ],
  },
  mutations: {
    addNew(state, newItem) {
      state.items.push(newItem)
    },
  },
})

export default store
