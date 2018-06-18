<style lang="sass" scoped>

.level, h1, h6
    margin-bottom: 0 !important

.level
    align-items: flex-end

h6
    font-weight: 400 !important

hr
    margin: 8px 0 24px


</style>

<template lang="pug">
.section-header
    .level.content
        .level-left: h1 {{ title }}
        .level-right: h6 {{ subtitle }}
    hr
</template>

<script>
export default {
    props: [ "title", "subtitle" ]
}
</script>
