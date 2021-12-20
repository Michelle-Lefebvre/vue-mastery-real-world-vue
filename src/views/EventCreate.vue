<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEvent(1) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapState(['user', 'categories']),
  },
}
</script>
