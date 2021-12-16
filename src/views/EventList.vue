<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard></EventCard>
    <BaseIcon name="users" />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard,
  },
}
</script>
