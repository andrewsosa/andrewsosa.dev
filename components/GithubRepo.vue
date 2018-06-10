<style lang="sass" scoped>

</style>

<template lang="pug">
.column.is-4
    .box.content.is-small
        a: h1.title.is-6 {{ name }}
        p {{ desc }}

</template>

<script>
export default {
    props: [ "name", "desc" ]
}
</script>
