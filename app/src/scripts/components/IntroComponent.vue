<template>
	<div class="wrapper">
		<div class="col-one">
		<i class="fa fa-globe" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>CleanEarth.Life - A little change goes far</h1>
		<h4>So far, {{fbData.usersPledged}} people have pledged to:</h4>
		<p>Using {{(fbData.showerMinutes * 2.1).toFixed(1)}} gallons less when showering per day!</p>
		<p>Reducing car pollution by {{(fbData.milesReduced/25*19.5).toFixed(1)}} pounds per day!</p>
		<p>Saving ${{fbData.lightReplace * 100}} a year on energy!</p>
		<p>Using {{fbData.bottlesReduced}} less disposible plastic bottles per week!</p>
		<p>Reducing methane emissions by {{(540 * 250 * (.5/1000) * fbData.meatReduced).toFixed(1)}} liters a day!</p>
		<br />
		<p>Want to get involved? Scroll down!</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				fbData: {}
			}
		},
		created: function () {
			var vm = this
			firebase.database().ref('Pledge/').on('value', function(data){
				vm.fbData = data.val()
			})
		}
	}
</script>

<style lang="sass">

</style>
