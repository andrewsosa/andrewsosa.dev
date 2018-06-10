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
        color: $white-ter
        margin-bottom: 16px
</style>

<template lang="pug">
  div
    section.section#header
      .container
          h1.title Hi, I'm Andrew Sosa.
          h3.subtitle Software Engineer II for Harris Corporation in Melbourne, FL.
          ul.tags
              HobbyTag(href="http://github.com/andrewsosa" text="Software Engineer")
              HobbyTag(href="#involvement" text="Student Leader")
              HobbyTag(href="http://acmatfsu.org" text="fmr. ACM President")
              HobbyTag(href="http://hackfsu.com" text="HackFSU organizer")
              HobbyTag(href="http://www.domistation.com" text="Startup Enthusiast")

    section.section
      .container
        SectionHeader(title="Github" subtitle="My most relevant open source projects.")
        .columns.repos
          GithubRepo(name="andrewsosa/homepage", desc="My personal website (this one).")
          GithubRepo(name="homepage")
          GithubRepo(name="homepage")
</template>

<script>
  import HobbyTag from '../components/HobbyTag.vue'
  import SectionHeader from '../components/SectionHeader.vue'
  import GithubRepo from '../components/GithubRepo.vue'

  export default {
    components: {
      HobbyTag,
      SectionHeader,
      GithubRepo
    }
  }
</script>
