<template lang="pug">
  header.app-header
    .columns.is-mobile.is-vcentered
      .column
        img.logo(src="../assets/images/logo.png")
</template>

<script>

</script>

<style lang="scss" scoped>
.app-header {
  padding: 2em 2em 1.5em 2em;

  .logo {
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px;
  }
}
@media screen and (max-width: $tablet - 1) {
  .app-header {
    padding: 1em;

    .logo {
      max-width: 150px;
    }
  }
}
</style>
