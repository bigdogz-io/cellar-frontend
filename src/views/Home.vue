<template lang="pug">
  .home.has-padding-2
    cellar(:items="items")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Cellar from '@/components/Cellar.vue';

export default {
  components: {
    Cellar,
  },
  computed: {
    ...mapGetters('cellar', [
      'ownerId',
      'items',
    ]),
  },
  methods: {
    ...mapActions('cellar', [
      'get',
    ]),
  },
};
</script>
