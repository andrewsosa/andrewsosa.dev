<style lang="sass" scoped>
    .box
        height: 100%
        display: flex
        flex-direction: column
        border-radius: 0 !important

        h3
            margin-bottom: .25rem !important


        ul
            list-style: none !important
            margin-left: 0 !important
            margin-top: 0 !important

            li
                line-height: 1.1em

        h6
            margin-bottom: 0 !important


</style>

<template lang="pug">
.column.is-6
    .box.content(v-bind:style="styleObject")
        h3 {{ this.group.name }}
        ul
            li(v-for="job in this.group.jobs") {{ job }}

        h6 About
        p {{ this.group.desc }}

        .site(v-if="this.group.site")
            h6 Site
            a(:href="this.group.site") {{ this.group.site }}


</template>

<script>
export default {
    props: [ "group" ],
    data: function () {
        return {
            link: `this.group.site`,
            styleObject: {
                // borderTop: '2px solid',
                // borderTopColor: this.repo.color
            }
        }
    }
}
</script>
