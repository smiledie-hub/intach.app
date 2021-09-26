<template>
  <div class="layout">
    <div class="layout-aside">
      <div class="layout-aside-wrapper">
        <slot name="aside"></slot>
      </div>
      <Nav/>
    </div>
    <div class="layout-main">
      <div class="layout-main-wrapper">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from "@/components/Nav.vue";
import LocalStorage from "@/services/LocalStorage";

@Options({
  components: {Nav},
  mounted() {
    const theme = LocalStorage.get("theme")
    if (theme) {
      document.body.classList.add(`theme--${theme}`)
    } else {
      document.body.classList.add(`theme--light`)
    }

    const navPosition = LocalStorage.get("navPosition")
    if (navPosition) {
      document.body.classList.add(`nav--${navPosition}`)
    } else {
      document.body.classList.add(`nav--left`)
    }
  }
})
export default class BaseLayout extends Vue {
}
</script>