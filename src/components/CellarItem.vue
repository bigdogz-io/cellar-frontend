<template lang="pug">
  .cellar-item
    .columns.is-vcentered
      .column.is-6
        strong {{ product.name }}
      .column-is-3
        textarea {{ product.description }}
      .column-is-3
        .is-size-7.has-text-grey-light "ABV"
          strong {{ product.abv }}
      .column-is-3
        .is-size-7.has-text-grey-light "Notes"
          .is-size-7.has-text-grey.mb-8 {{ item.notes }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  name: 'CellarItem',
};
</script>

<style scoped>

</style>
