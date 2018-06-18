<style lang="sass" scoped>
    .box
        height: 100%
        display: flex
        flex-direction: column

        .level
            margin-top: auto

            .level-item.i
                margin-right: 0.5rem

            .level-item.t
                margin-right: 1.0rem

            .level-item
                span.icon
                    width: auto
</style>

<template lang="pug">
.column.is-4
    .box.content.is-small(v-bind:style="styleObject")
        a(:href="link"): h1.title.is-6 {{ repo.owner }}/{{ repo.repo }}
        p(v-html="repo.description")
        .level.is-mobile: .level-left
            .level-item.i: span.icon
                font-awesome-icon(
                    :icon="['fas', 'circle']"
                    v-bind:style="{ color: repo.color}"
                )
            .level-item.t: span {{ repo.language }}
            .level-item.i(v-if="repo.stars"): span.icon
                font-awesome-icon(
                    :icon="['fas', 'star']"
                )
            .level-item.t(v-if="repo.stars"): span {{ repo.stars }}

            .level-item.i(v-if="repo.forks"): span.icon
                font-awesome-icon(
                    :icon="['fas', 'code-branch']"
                )
            .level-item.t(v-if="repo.forks"): span {{ repo.forks }}

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
    components: {
        FontAwesomeIcon
    },
    props: [ "repo" ],
    data: function () {
      return {
        link: `https://github.com/${this.repo.owner}/${this.repo.repo}`,
        styleObject: {
            borderTop: '2px solid',
            borderTopColor: this.repo.color
        }
    }
}
}
</script>
