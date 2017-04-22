<template>
	<div>
        <div class='fullscreen' id='intro'>
			<intro></intro>
            <input type='button' v-on:click='scroll("water")'>Next</input>
        </div>
        <div class='fullscreen' id='water'>
			<water></water>
            <input type='button' v-on:click='scroll("polution")'>Next</input>
        </div>
        <div class='fullscreen' id='polution'>
			<polution></polution>
            <input type='button' v-on:click='scroll("intro")'>Back to Top</input>
        </div>
	</div>

</template>

<script>
import Login from './components/Login.vue'
import Intro from './components/Intro.vue'
import NavComponent from './components/NavComponent.vue'
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'app',
  components: { NavComponent, HomeComponent, Login, Intro },
  methods: {
    scroll: function (id) {
      this.$SmoothScroll(document.getElementById(id))
    }
  }
}
</script>

<style lang="sass">
.fullscreen {
    width: 100%;
    height: 100%;
    background-color: yellow;
    
}

</style>
