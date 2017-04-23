<template>
	<div>
		<i class="fa fa-car" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>Reduce Car Emissions</h1>
		<p>Drive more conservatively to reduce amount of fuel that you use</p>
		<p>If you reduced your daily commute by <input v-model="distance" style="width: 30px;" maxlength="2"/> miles per day in a car that averaged <input v-model="mpg" style="width: 30px;" maxlength="2"/> city miles per gallon, you would save a daily amount of <b>{{((distance / mpg) * 19.5).toFixed(1)}} pounds</b> of pollution</p>
		<p>...in a week <b>{{((distance / mpg) * 19.5 * 7).toFixed(1)}}</b> pounds</p>
		<p>...in a month <b>{{((distance / mpg) * 19.5 * 31).toFixed(1)}}</b> pounds</p>
		<p>...in a year a whopping <b>{{((distance / mpg) * 19.5 * 365).toFixed(1)}}</b> pounds!!</p>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			distance: 2,
			mpg: 25,
		}
	},
}
</script>

<style lang="sass">
</style>
