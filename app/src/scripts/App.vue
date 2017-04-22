<template>
<div>
<nav-component></nav-component>
<router-view></router-view>
<footer-component></footer-component>
</div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'app',
  components: { NavComponent, FooterComponent }
}
</script>

<style lang="sass">

</style>
