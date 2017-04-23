<template>
	<div>
		<i class="fa fa-cutlery" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>Reduce Your Meat Consumption</h1>
		<p>Methane from cattle accounts for <b>14.5</b> and <b>18</b> percent of the total greenhouse gas emissions</p>
		<p>If you reduced the amount of meat you consume each week by <input v-model="meals" style="width: 20px;" maxlength="2"/> meals, you would reduce your impact on methane emissions in a day by <b>{{totalCow()}}</b> liters</p>
		<p>...in a week <b>{{(totalCow() * 7).toFixed(1)}}</b> liters</p>
		<p>...in a month <b>{{(totalCow() * 31).toFixed(1)}}</b> liters</p>
		<p>...in a year a whopping <b>{{(totalCow() * 365).toFixed(1)}}</b> liters!!</p>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			meals: 1,
			cowWeight: 1000,
			cowLife: 540,
			cowMethane: 250,
			poundPerMeal: .5
		}
	},
	methods: {
		totalCow: function () {
			return (this.cowLife * this.cowMethane * (this.poundPerMeal / this.cowWeight)) * this.meals
		}
	}
}
</script>

<style lang="sass">
</style>
