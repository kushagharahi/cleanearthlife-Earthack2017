<template>
	<div>
		vue link
        <div class='fullscreen' id='intro'>
			<intro-component></intro-component>
            <input type='button' v-on:click='scroll("water")' value='Next'></input>
        </div>
        <div class='fullscreen' id='water'>
			<water-component></water-component>
            <input type='button' v-on:click='scroll("polution")' value='Next'></input>
        </div>
        <div class='fullscreen' id='polution'>
			<pollution-component></pollution-component>
            <input type='button' v-on:click='scroll("intro")' value='Back to Top'></input>
        </div>
	</div>

</template>

<script>
import IntroComponent from './IntroComponent.vue'
import NavComponent from './NavComponent.vue'
import WaterComponent from './WaterComponent.vue'
import PollutionComponent from './PollutionComponent.vue'

export default {
  name: 'app',
  components: { NavComponent, IntroComponent, PollutionComponent, WaterComponent },
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
    background-color: grey;
    
}

</style>
