<style lang="sass" scoped>
.section-header
    .text
        display: flex
        align-items: center
        justify-content: space-between

        +mobile
            flex-direction: column

        h1
            font-size: $size-5
            color: $black

    hr
        margin: 8px 0 24px
</style>

<template lang="pug">
.section-header
    .text
        h1 {{ title }}
        h2 {{ subtitle }}
    hr
</template>

<script>
export default {
    props: [ "title", "subtitle" ]
}
</script>
