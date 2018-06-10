<style lang="sass" scoped>
    li
        font-size: $size-6
        font-weight: 500
        text-transform: lowercase
        color: $white-ter


        background-color: rgba($grey-lighter, 0.3)
        padding: 4px 8px
        border-radius: 4px

        margin: 0 8px 8px 0
        display: inline-block

        a
            color: $white-ter

            &:hover
                text-decoration: underline
</style>

<template>
    <li>
        <a :href="href"> {{ text }} </a>
    </li>
</template>

<script>
export default {
    props: [ "href", "text" ]
}
</script>


