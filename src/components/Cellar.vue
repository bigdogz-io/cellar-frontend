<template lang="pug">
  .cellar
    .b-table
      .cellar-item(
        v-for="(item, index) in cellar"
        :key="id"
        :product="product"
    )
    .no-cellar-items.container.has-padding-bottom-2(v-if="items.length === 0")
    b-icon(
      class="has-margin-bottom-2 has-margin-top-2"
      icon="ban"
      size="is-large"
    )
    .is-size-4 {{ $t("cellar.noItems") }}
    p.is-size-6.has-text-grey.has-margin-bottom-2 {{ $t("cellar.addItemsToEmpty") }}
</template>

<script>
import CellarItem from '@/components/CellarItem.vue';

export default {
  components: {
    CellarItem,
  },
  props: {
    cellar: {
      type: Array,
      required: true,
    },
  },
  name: 'Cellar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cellar {
  &.is-compact {
  .cellar-item {
    padding: $cellar-list-padding/2 0;

& + .cellar-item {
    padding-top: $cellar-list-padding/2;
  }
}
}

.cellar-item {
  padding: $cellar-list-padding 0;

  &:first-child {
   padding-top: 0;
  }
  &:last-child {
   border-bottom: 1px solid $grey-lighter;
  }

  & + .cellar-item {
    padding-top: $cellar-list-padding;
    border-top: 1px solid $grey-lighter;
  }
}
.no-cellar-items {
  max-width: $page-width-small;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
}
}
</style>
