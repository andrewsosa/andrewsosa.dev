<style lang="sass" scoped>
@import "~assets/css3-mixins"

section#header
    background-image: linear-gradient(45deg, #f77062 0%, #fe5196 100%)
    height: 600px
    display: flex
    flex-direction: column
    justify-content: center

    h1.title
        font-size: $size-1 * 1.5
        font-weight: 700
        line-height: 1.25
        color: $white

    h3.subtitle
        font-size: $size-5
        font-weight: 500
        color: $white
        margin-bottom: 2px

        & + h3.subtitle
          margin-bottom: 16px
          font-size: $size-6
          color: hsl(0, 0, 92%)

</style>

<template lang="pug">
  div
    section.section#header
      .container
        h1.title Hi, I'm {{ my.name }}.
        h3.subtitle {{ my.desc }}
        h3.subtitle {{ my.prev }}
        ul.tags
          HeaderTag(
            v-for="tag in my.tags"
            :key="tag.text"
            :text="tag.text"
            :href="tag.href"
          )

    section.section
      .container
        SectionHeader(title="Github" subtitle="Some interesting open source projects I've contributed to.")
        .columns.repos.is-multiline
          GithubRepo(
            v-for="repo in $store.state.repos"
            :key="repo.repo"
            :repo="repo"
          )

    section.section
      .container
        SectionHeader(title="Live Projects" subtitle="Fun experiments currently in progess.")
        .content.has-text-centered
          pre No experiments currently running! Check back later...

    section.section
      .container
        SectionHeader(title="Community" subtitle="My involvement from my time as a student.")
        .columns.groups.is-multiline
          Group(
            v-for="group in my.groups"
            :key="group.name"
            :group="group"
          )

    footer.footer
      .container
        .content.has-text-centered
          p
          | Thanks for visiting 💥 You can find the source
          |
          strong
            a(href="https://github.com/andrewsosa/homepage") here
          | .
          br
          br
          p Copyright © 2018 Andrew Sosa

</template>

<script>
  import eeyore from 'eeyore'

  // Load components
  import HeaderTag from '../components/HeaderTag.vue'
  import SectionHeader from '../components/SectionHeader.vue'
  import GithubRepo from '../components/GithubRepo.vue'
  import Group from '../components/Group.vue'

  // Load local data
  import myData from 'js-yaml-loader!../assets/data.yml'

  export default {
    components: {
      HeaderTag,
      SectionHeader,
      GithubRepo,
      Group
    },
    data () {
      return {
        my: myData
      }
    },
    async fetch ({ store, params }) {
      let repos = await eeyore('andrewsosa')
      store.commit('setRepos', repos)
    }
  }
</script>
