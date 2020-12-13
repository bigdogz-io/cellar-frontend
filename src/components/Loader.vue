<template lang="pug">
  b-loading.loading(:active="active")
    .loading-icon
    h3.subtitle {{ $t('loader.message') }}
</template>

<script>

export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  flex-direction: column;

  .subtitle {
    position: relative;
    margin-top: 3em;
  }
}
</style>
