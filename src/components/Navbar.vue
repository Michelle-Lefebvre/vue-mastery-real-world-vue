<template>
  <div id="nav" class="nav">
    <router-link to="/">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create Event</router-link>
    </nav>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}
</style>
