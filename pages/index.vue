<template lang="pug">

  section
    .hero.header
      .container
        //- img(src="~/assets/code-lines.svg")
        .title Andrew <br> Sosa
        .subtitle Software Engineer

    .section.content
      .container
        .title About

</template>

<script>
</script>

<style lang="sass">

@import "~assets/bulma"

.header
  padding-top: 10vh

  .container
    background-image: url("~/assets/code-lines.svg")
    background-repeat: no-repeat
    padding-top: 12vw

    .title
      font-size: $size-1 * 1.5

      +tablet
        font-size: $size-1 * 2.5

      +desktop
        font-size: $size-1 * 5

    .subtitle
      font-weight: 100
      font-size: $size-1


</style>
