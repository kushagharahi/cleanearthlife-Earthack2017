<template>
	<div>
		<h1>Welcome</h1>
		<button action="/logout" method="post">Log Out</button>
		<energy-component></energy-component>
		<water-component></water-component>
		<pollution-component></pollution-component>
		<form action="/calculate" method="post">
			<input type="submit" value="Get your personalized results">
			<input type="checkbox" id="LIC" name="electric"
				   value="LIC"> Live in a city
			<hr>
		</form>
	</div>
</template>

<script>
	import EnergyComponent from './EnergyProfileComponent.vue'
	import WaterComponent from './WaterProfileComponent.vue'
	import PollutionComponent from './PollutionProfileComponent.vue'

	export default {
		name: 'app',
		components: { EnergyComponent, WaterComponent, PollutionComponent},
		methods: {
			scroll: function (id) {
				this.$SmoothScroll(document.getElementById(id))
			}
		}
	}
</script>

<style lang="sass">
</style>
