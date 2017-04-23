<template>
	<div>
		<i class="fa fa-car" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>Reduce Car Emissions</h1>
		<p>Drive more conservatively to reduce amount of fuel that you use</p>
		<p>If you reduced your daily commute by <input v-model="distance" style="width: 20px;" maxlength="2"/> miles per day in a car that averaged <input v-model="mpg" style="width: 20px;" maxlength="2"/> city miles per gallon, you would save a daily amount of <b>{{pollutionSaved}} pounds</b> of pollution</p>
		<p>...in a week <b>{{(pollutionSaved * 7).toFixed(1)}}</b> pounds</p>
		<p>...in a month <b>{{(pollutionSaved * 31).toFixed(1)}}</b> pounds</p>
		<p>...in a year a whopping <b>{{(pollutionSaved * 365).toFixed(1)}}</b> pounds!!</p>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			distance: 2,
			mpg: 25,
			pollutionSaved: 0
		}
	},
	created: function () {
		this.pollutionSaved = (this.distance / this.mpg) * 19.5
	}
}
</script>

<style lang="sass">
</style>
