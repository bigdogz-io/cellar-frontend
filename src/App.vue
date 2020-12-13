<template lang="pug">
  #app
    loader(:active="!loaded")
    .container
      .app
        app-header
        router-view
      app-footer
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    Loader,
    AppHeader,
    AppFooter,
  },
  computed: {
    ...mapGetters({
      cellarLoaded: 'cellar/loaded',
    }),
    loaded() {
      return this.cellarLoaded;
    },
  },
  async created() {
    await this.$store.dispatch('cellar/get', '1234-5678-90AB-CDEF');
    return true;
  },
};
</script>
