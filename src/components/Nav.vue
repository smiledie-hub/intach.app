<template>
  <nav class="nav">
<!--    <router-link class="nav-item" to="/recent">-->
<!--      <SvgIcon name="clock"/>-->
<!--    </router-link>-->
    <router-link class="nav-item" to="/">
      <SvgIcon name="calendar"/>
    </router-link>
    <router-link class="nav-item" to="/profile">
      <SvgIcon name="profile"/>
    </router-link>
  </nav>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  name: "Nav",
  components: {SvgIcon}
}
</script>

<style scoped>

</style>