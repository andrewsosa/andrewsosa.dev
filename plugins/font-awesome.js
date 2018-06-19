// https://dev.to/coolgoose/how-to-setup-font-awesome-5-as-vuecomponent-in-nuxtjs-54e4

import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
// import brands from '@fortawesome/fontawesome-free-brands'
// import solids from '@fortawesome/fontawesome-free-solid'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'

// associate it to the library, if you need to add more you can separate them by a comma
// fontawesome.library.add(brands)
fontawesome.library.add(faCircle, faStar, faCodeBranch)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
