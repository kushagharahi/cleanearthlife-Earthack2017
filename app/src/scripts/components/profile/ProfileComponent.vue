<template>
	<div>
		<h1>Welcome</h1>
		<button action="/logout" method="post">Log Out</button>
		<energy-profile-component></energy-profile-component>
		<water-profile-component></water-profile-component>
		<pollution-profile-component></pollution-profile-component>
		<form action="/calculate" method="post">
			<input type="submit" value="Get your personalized results">
			<input type="checkbox" id="LIC" name="electric"
				   value="LIC"> Live in a city
			<hr>
		</form>
	</div>
</template>

<script>
	import EnergyProfileComponent from './EnergyProfileComponent.vue'
	import WaterProfileComponent from './WaterProfileComponent.vue'
	import PollutionProfileComponent from './PollutionProfileComponent.vue'

	export default {
	  name: 'app',
	  components: { EnergyProfileComponent, WaterProfileComponent, PollutionProfileComponent },
	  methods: {
	    scroll: function (id) {
	      this.$SmoothScroll(document.getElementById(id))
	    }
	  }
	}
</script>

<style lang="sass">
</style>
